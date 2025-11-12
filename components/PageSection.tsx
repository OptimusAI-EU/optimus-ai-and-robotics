
import React from 'react';

interface PageSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const PageSection: React.FC<PageSectionProps> = ({ title, children, className = '' }) => {
  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        {title.split(' ').map((word, index) => 
          index === 0 ? <span key={index}>{word} </span> : <span key={index} className="text-cyan-400">{word} </span>
        )}
      </h2>
      <div className="max-w-4xl mx-auto text-lg text-gray-300 text-center">
        {children}
      </div>
    </section>
  );
};

export default PageSection;
