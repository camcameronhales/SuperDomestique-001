import React, { useState } from 'react';
import { ArrowLeft, Calendar, Cog } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

interface BookingPageProps {
  onClose: () => void;
  preSelectedService?: string | null;
}

const BookingPage: React.FC<BookingPageProps> = ({ preSelectedService }) => {
  const navigate = useNavigate();
  const [clientName, setClientName] = useState('');
  const [clientType, setClientType] = useState<'new' | 'returning' | null>(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bikeDetails, setBikeDetails] = useState('');
  const [groupsetDetails, setGroupsetDetails] = useState('');
  const [serviceType, setServiceType] = useState<string[]>(preSelectedService ? [preSelectedService] : []);
  const [preferredDate, setPreferredDate] = useState('');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const serviceTypes = [
    'Complete Service',
    'Standard Service',
    'Race Prep Service',
    'Custom Build',
    'Parts Install / General Labour',
    'Tubeless Setup',
    'Chain Strip & Wax'
  ];

  const handleServiceTypeChange = (service: string) => {
    if (serviceType.includes(service)) {
      setServiceType(serviceType.filter(item => item !== service));
    } else {
      setServiceType([...serviceType, service]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    const bookingData = {
      client_name: clientName,
      client_type: clientType,
      email: email,
      phone: phone,
      bike_details: bikeDetails,
      groupset_details: groupsetDetails,
      service_type: serviceType,
      preferred_date: preferredDate,
      comments: comments,
      submitted_at: new Date().toISOString(),
    };
    
    try {
      // First, save to Supabase
      const { error: supabaseError } = await supabase
        .from('bookings')
        .insert([bookingData]);
      
      if (supabaseError) throw supabaseError;

      // Then, send email
      const emailResponse = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-booking-email`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookingData }),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json();
        throw new Error(errorData.error || 'Failed to send email notification');
      }
      
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting booking:', error);
      setErrorMessage(error.message || 'There was an error submitting your booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-brand-blue flex flex-col">
        <div className="fixed inset-0 z-0">
          <img 
            src="https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/BOOKING%20PAGE/SystemSix_drivetrain.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0JPT0tJTkcgUEFHRS9TeXN0ZW1TaXhfZHJpdmV0cmFpbi5qcGciLCJpYXQiOjE3NDA5OTExNjQsImV4cCI6MjA1NjM1MTE2NH0.-NX_1pFt2larLDSOShlJjoLiHqXry2FpvetBI1wmG78"
            alt="Luxury bicycle drivetrain"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-blue bg-opacity-90"></div>
        </div>
        
        <div className="fixed w-full z-50 top-0 bg-brand-blue">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex h-24 items-center justify-between">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 text-brand-gold hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Return to Home</span>
              </button>
              <div className="flex items-center space-x-2">
                <Cog className="w-6 h-6 text-brand-gold rotate-45" />
                <div className="text-xl font-light tracking-wider text-brand-gold">SUPER DOMESTIQUE</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow flex items-center justify-center relative z-10">
          <div className="bg-brand-blue bg-opacity-90 p-12 rounded-lg border border-brand-gold max-w-2xl w-full text-center">
            <Calendar className="w-16 h-16 text-brand-gold mx-auto mb-6" />
            <h2 className="text-3xl font-light text-brand-gold mb-6">Booking Confirmed</h2>
            <p className="text-white text-lg mb-8">
              Thank you, {clientName}. Your appointment request has been received. We'll contact you shortly to confirm your booking details.
            </p>
            <button 
              onClick={() => navigate('/')}
              className="mt-2 text-sm px-6 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300"
            >
              RETURN TO HOME
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-blue flex flex-col">
      <div className="fixed inset-0 z-0">
        <img 
          src="https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/BOOKING%20PAGE/SystemSix_drivetrain.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0JPT0tJTkcgUEFHRS9TeXN0ZW1TaXhfZHJpdmV0cmFpbi5qcGciLCJpYXQiOjE3NDA5OTExNjQsImV4cCI6MjA1NjM1MTE2NH0.-NX_1pFt2larLDSOShlJjoLiHqXry2FpvetBI1wmG78"
          alt="Luxury bicycle drivetrain"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue bg-opacity-90"></div>
      </div>
      
      <div className="fixed w-full z-50 top-0 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-24 items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-brand-gold hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Return to Home</span>
            </button>
            <div className="flex items-center space-x-2">
              <Cog className="w-6 h-6 text-brand-gold rotate-45" />
              <div className="text-xl font-light tracking-wider text-brand-gold">SUPER DOMESTIQUE</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32 pb-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-light text-brand-gold mb-12 text-center">BOOK YOUR SERVICE</h1>
          
          <form onSubmit={handleSubmit} className="bg-brand-blue bg-opacity-90 p-8 border border-brand-gold">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <label htmlFor="clientName" className="block text-brand-gold mb-2">Client Name</label>
                  <input
                    type="text"
                    id="clientName"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                    className="w-full bg-transparent border border-gray-600 p-2 text-white focus:border-brand-gold outline-none"
                  />
                </div>

                <div className="mb-6">
                  <p className="text-brand-gold mb-2">Client Type</p>
                  <div className="flex space-x-6">
                    <label className="flex items-center space-x-2 text-white cursor-pointer">
                      <input
                        type="checkbox"
                        checked={clientType === 'new'}
                        onChange={() => setClientType('new')}
                        className="form-checkbox text-brand-gold"
                      />
                      <span>New Client</span>
                    </label>
                    <label className="flex items-center space-x-2 text-white cursor-pointer">
                      <input
                        type="checkbox"
                        checked={clientType === 'returning'}
                        onChange={() => setClientType('returning')}
                        className="form-checkbox text-brand-gold"
                      />
                      <span>Returning Client</span>
                    </label>
                  </div>
                </div>

                {clientType === 'new' && (
                  <>
                    <div className="mb-6">
                      <label htmlFor="phone" className="block text-brand-gold mb-2">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-transparent border border-gray-600 p-2 text-white focus:border-brand-gold outline-none"
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="email" className="block text-brand-gold mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-transparent border border-gray-600 p-2 text-white focus:border-brand-gold outline-none"
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="bikeDetails" className="block text-brand-gold mb-2">Bike Details</label>
                      <input
                        type="text"
                        id="bikeDetails"
                        value={bikeDetails}
                        onChange={(e) => setBikeDetails(e.target.value)}
                        placeholder="Make, model, year"
                        className="w-full bg-transparent border border-gray-600 p-2 text-white focus:border-brand-gold outline-none"
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="groupsetDetails" className="block text-brand-gold mb-2">Groupset</label>
                      <input
                        type="text"
                        id="groupsetDetails"
                        value={groupsetDetails}
                        onChange={(e) => setGroupsetDetails(e.target.value)}
                        placeholder="Make, model"
                        className="w-full bg-transparent border border-gray-600 p-2 text-white focus:border-brand-gold outline-none"
                      />
                    </div>
                  </>
                )}
              </div>

              <div>
                <div className="mb-6">
                  <p className="text-brand-gold mb-2">Service Type</p>
                  <div className="grid grid-cols-1 gap-2">
                    {serviceTypes.map((service) => (
                      <label key={service} className="flex items-center space-x-2 text-white cursor-pointer">
                        <input
                          type="checkbox"
                          checked={serviceType.includes(service)}
                          onChange={() => handleServiceTypeChange(service)}
                          className="form-checkbox text-brand-gold"
                        />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="preferredDate" className="block text-brand-gold mb-2">Preferred Date</label>
                  <input
                    type="date"
                    id="preferredDate"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-transparent border border-gray-600 p-2 text-white focus:border-brand-gold outline-none"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="comments" className="block text-brand-gold mb-2">Additional Comments</label>
                  <textarea
                    id="comments"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    rows={4}
                    className="w-full bg-transparent border border-gray-600 p-2 text-white focus:border-brand-gold outline-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {errorMessage && (
              <div className="text-red-500 text-center mb-4">
                {errorMessage}
              </div>
            )}

            <div className="text-center mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT BOOKING REQUEST'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;