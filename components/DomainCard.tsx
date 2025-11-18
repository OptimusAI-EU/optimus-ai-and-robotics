
import React from 'react';

interface DomainCardProps {
  imageUrl: string;
  title: string;
  description?: string;
}

const DomainCard: React.FC<DomainCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md shadow-gray-300/40 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/20 border border-gray-200">
      <img className="w-full h-56 object-cover" src={imageUrl} alt={title} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        {description && <p className="text-gray-600 text-base">{description}</p>}
      </div>
    </div>
  );
};

export default DomainCard;
