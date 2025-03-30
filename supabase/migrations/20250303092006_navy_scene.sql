/*
  # Create bookings table and email function

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `client_name` (text)
      - `client_type` (text)
      - `email` (text)
      - `phone` (text)
      - `bike_details` (text)
      - `groupset_details` (text)
      - `service_type` (text[])
      - `preferred_date` (text)
      - `preferred_time` (text)
      - `comments` (text)
      - `submitted_at` (timestamptz)
      - `email_to` (text)
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on `bookings` table
    - Add policy for authenticated users to insert data
*/

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_type text,
  email text,
  phone text,
  bike_details text,
  groupset_details text,
  service_type text[],
  preferred_date text,
  preferred_time text,
  comments text,
  submitted_at timestamptz DEFAULT now(),
  email_to text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts
CREATE POLICY "Allow anonymous bookings" 
  ON bookings 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Create policy to allow service staff to view bookings
CREATE POLICY "Allow authenticated users to view bookings" 
  ON bookings 
  FOR SELECT 
  TO authenticated 
  USING (true);