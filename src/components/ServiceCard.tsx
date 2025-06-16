import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: string;
  backgroundImage?: string;
  buttons?: Array<{
    label: string;
    onClick: () => void;
  }>;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, backgroundImage, buttons }) => {
  const isDrivetrain = title === 'Drivetrain Efficiency';
  const isElectronic = title === 'Electronic Groupsets';

  return (
    <div className="p-8 border border-gray-100 hover:border-brand-gold transition-colors group relative overflow-hidden h-full flex flex-col">
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 z-0 transition-transform duration-500 ease-out group-hover:scale-110"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: isDrivetrain ? 'center' : isElectronic ? 'center' : 'center',
              transform: 'scale(1.0)'
            }}
          />
          <div className="absolute inset-0 bg-brand-blue bg-opacity-30 group-hover:bg-opacity-90 transition-all duration-500" />
        </>
      )}
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Title - Initially transparent, fades in on hover */}
        <h3 className="text-xl font-light mb-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {title}
        </h3>
        
        {/* Description - Fades in on hover */}
        <div className="flex-grow">
          <p className="text-brand-gold transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {description}
          </p>
        </div>

        {/* Buttons - If provided */}
        {buttons && buttons.length > 0 && (
          <div className="mt-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={button.onClick}
                className="w-full px-4 py-1 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300 text-sm"
              >
                {button.label}
              </button>
            ))}
          </div>
        )}
        
        {/* Icon with background panel - Fades out on hover */}
        <div className="mt-auto self-start relative">
          <div className="absolute inset-0 bg-brand-gold rounded-lg -m-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
          <div className="text-brand-blue relative opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;