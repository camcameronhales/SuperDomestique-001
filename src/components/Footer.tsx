import React from 'react';
import { Cog } from 'lucide-react';

// This component is no longer used as the footer is now integrated directly in App.tsx
// to share the background image with the booking section
const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex items-center space-x-2">
            <Cog className="w-6 h-6 text-brand-gold rotate-45" />
            <h3 className="text-xl font-light text-brand-gold">SUPER DOMESTIQUE</h3>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Super Domestique. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;