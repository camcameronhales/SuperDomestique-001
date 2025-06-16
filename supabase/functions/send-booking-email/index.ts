import {
  createClient,
  SupabaseClient,
} from 'npm:@supabase/supabase-js@2.39.7';
import { SMTPClient } from "npm:emailjs@4.0.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { bookingData } = await req.json();

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Check if client exists
    const { data: existingClient } = await supabase
      .from('clients')
      .select('id')
      .eq('email', bookingData.email)
      .single();

    let clientId;

    if (existingClient) {
      clientId = existingClient.id;
    } else {
      // Create new client
      const { data: newClient, error: clientError } = await supabase
        .from('clients')
        .insert({
          name: bookingData.client_name,
          email: bookingData.email,
          phone: bookingData.phone,
        })
        .select()
        .single();

      if (clientError) throw clientError;
      clientId = newClient.id;

      // Add bike details if provided
      if (bookingData.bike_details) {
        const [make, model, year] = bookingData.bike_details.split(',').map(s => s.trim());
        const { error: bikeError } = await supabase
          .from('client_bikes')
          .insert({
            client_id: clientId,
            make,
            model,
            year,
          });

        if (bikeError) throw bikeError;
      }
    }

    // Send email notification
    const client = new SMTPClient({
      user: "superdomestiqueservice@gmail.com",
      password: Deno.env.get('SMTP_PASSWORD'),
      host: "smtp.gmail.com",
      port: 465,
      ssl: true,
    });

    const emailContent = `
      New Booking Request:
      
      Client Name: ${bookingData.client_name}
      Client Type: ${bookingData.client_type}
      Email: ${bookingData.email}
      Phone: ${bookingData.phone}
      
      Bike Details: ${bookingData.bike_details}
      Groupset Details: ${bookingData.groupset_details}
      
      Service Type: ${bookingData.service_type.join(', ')}
      Preferred Date: ${bookingData.preferred_date}
      
      Comments: ${bookingData.comments}
      
      Submitted at: ${new Date(bookingData.submitted_at).toLocaleString()}
    `;

    await client.send({
      from: "superdomestiqueservice@gmail.com",
      to: "superdomestiqueservice@gmail.com",
      subject: `New Booking Request from ${bookingData.client_name}`,
      text: emailContent,
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing booking:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process booking', details: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});