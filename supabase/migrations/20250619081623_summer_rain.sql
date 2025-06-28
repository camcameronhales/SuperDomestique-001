/*
  # Grant INSERT permissions to anonymous users for bookings table

  1. Permissions
    - Grant INSERT permission on `bookings` table to `anon` role
    - This allows anonymous users to submit booking requests through the form

  2. Security
    - The existing RLS policy "Allow anonymous bookings" will still control access
    - Anonymous users can only INSERT, not SELECT, UPDATE, or DELETE
*/

-- Grant INSERT permission to anonymous users on bookings table
GRANT INSERT ON public.bookings TO anon;