/*
  # Fix RLS policies for clients table

  1. Security Changes
    - Drop existing policies
    - Enable RLS on clients table
    - Add policies for authenticated users to:
      - View all clients
      - Insert new clients
      - Update existing clients
      - Delete clients
    - Add updated_at trigger
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Allow authenticated users to manage clients" ON clients;

-- Ensure RLS is enabled
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

-- Create comprehensive policy for authenticated users
CREATE POLICY "Allow authenticated users to manage clients"
ON clients
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Create or replace trigger function for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Ensure trigger exists
DROP TRIGGER IF EXISTS update_clients_updated_at ON clients;
CREATE TRIGGER update_clients_updated_at
    BEFORE UPDATE ON clients
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();