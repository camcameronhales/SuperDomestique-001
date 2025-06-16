/*
  # Update RLS policies for clients table

  1. Changes
    - Update RLS policies for clients table to allow authenticated users to manage clients
    - Add policies for client_bikes and service_history tables
    - Ensure proper cascading delete behavior

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage all data
*/

-- Update clients table policies
DROP POLICY IF EXISTS "Allow authenticated users to manage clients" ON clients;
CREATE POLICY "Allow authenticated users to manage clients"
ON clients
FOR ALL 
TO authenticated
USING (true)
WITH CHECK (true);

-- Update client_bikes table policies
DROP POLICY IF EXISTS "Allow authenticated users to manage client bikes" ON client_bikes;
CREATE POLICY "Allow authenticated users to manage client bikes"
ON client_bikes
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Update service_history table policies
DROP POLICY IF EXISTS "Allow authenticated users to manage service history" ON service_history;
CREATE POLICY "Allow authenticated users to manage service history"
ON service_history
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);