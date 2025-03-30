import React, { useState, useEffect } from 'react';
import { Cog } from 'lucide-react';

interface NavBarProps {
  onBookNowClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onBookNowClick }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 100; // Reduced from 200 to 100 for faster fade
      const newOpacity = Math.max(0, 1 - (scrollPosition / maxScroll) * 1.5); // Added multiplier for even faster fade
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-24 items-center">
          <div style={{ opacity }} className="flex flex-col items-start">
            <div className="flex items-center space-x-2">
              <Cog className="w-6 h-6 text-brand-gold rotate-45" />
              <div className="text-xl font-light tracking-wider text-brand-gold">SUPER DOMESTIQUE</div>
            </div>
            <button 
              onClick={onBookNowClick}
              className="mt-2 text-sm px-4 py-1 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300"
            >
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;