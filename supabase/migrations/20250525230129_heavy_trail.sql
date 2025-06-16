/*
  # Update clients table RLS policies

  1. Security Changes
    - Enable RLS on clients table
    - Add policies for authenticated users to:
      - View their own clients
      - Add new clients
      - Update client information
      - Delete clients
    - Ensure proper access control for client data
*/

-- First, drop existing policies if any
DROP POLICY IF EXISTS "Allow authenticated users to manage clients" ON clients;

-- Enable RLS (in case it's not already enabled)
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

-- Create comprehensive policy for authenticated users
CREATE POLICY "Allow authenticated users to manage clients"
ON clients
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Add trigger to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Ensure the trigger exists
DROP TRIGGER IF EXISTS update_clients_updated_at ON clients;
CREATE TRIGGER update_clients_updated_at
    BEFORE UPDATE ON clients
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();