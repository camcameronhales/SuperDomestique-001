/*
  # Fix RLS Policies for Client Management

  1. Changes
    - Drop existing policies to start fresh
    - Create new comprehensive policies for all tables
    - Add explicit policies for each operation type
    - Ensure proper authentication checks

  2. Security
    - Enable RLS on all tables
    - Add specific policies for SELECT, INSERT, UPDATE, and DELETE operations
    - Ensure authenticated users can manage their data
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Allow authenticated users to manage clients" ON clients;
DROP POLICY IF EXISTS "Allow authenticated users to manage client bikes" ON client_bikes;
DROP POLICY IF EXISTS "Allow authenticated users to manage service history" ON service_history;

-- Ensure RLS is enabled on all tables
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_bikes ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_history ENABLE ROW LEVEL SECURITY;

-- Create specific policies for clients table
CREATE POLICY "Allow authenticated users to select clients"
ON clients FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Allow authenticated users to insert clients"
ON clients FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update clients"
ON clients FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete clients"
ON clients FOR DELETE
TO authenticated
USING (true);

-- Create specific policies for client_bikes table
CREATE POLICY "Allow authenticated users to select client bikes"
ON client_bikes FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Allow authenticated users to insert client bikes"
ON client_bikes FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update client bikes"
ON client_bikes FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete client bikes"
ON client_bikes FOR DELETE
TO authenticated
USING (true);

-- Create specific policies for service_history table
CREATE POLICY "Allow authenticated users to select service history"
ON service_history FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Allow authenticated users to insert service history"
ON service_history FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update service history"
ON service_history FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete service history"
ON service_history FOR DELETE
TO authenticated
USING (true);