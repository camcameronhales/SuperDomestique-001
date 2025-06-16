import React, { useState, useEffect } from 'react';
import { Cog } from 'lucide-react';

const NavBar: React.FC = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 100;
      const newOpacity = Math.max(0, 1 - (scrollPosition / maxScroll) * 1.5);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <div style={{ opacity }} className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-3">
              <Cog className="w-6 h-6 sm:w-8 sm:h-8 text-brand-gold rotate-45" />
              <div className="text-xl sm:text-2xl font-light tracking-wider text-brand-gold">SUPER DOMESTIQUE</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;