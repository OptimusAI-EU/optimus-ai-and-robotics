
import React from 'react';

interface DomainCardProps {
  imageUrl: string;
  title: string;
  description?: string;
}

const DomainCard: React.FC<DomainCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg shadow-cyan-500/10 transform transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/20">
      <img className="w-full h-56 object-cover" src={imageUrl} alt={title} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        {description && <p className="text-gray-400 text-base">{description}</p>}
      </div>
    </div>
  );
};

export default DomainCard;
