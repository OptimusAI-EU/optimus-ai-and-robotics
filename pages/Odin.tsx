import React from 'react';
import PageSection from '../components/PageSection';
import DomainCard from '../components/DomainCard';

const applications = [
  { name: 'Education', image: 'https://source.unsplash.com/800x600/?tablet,ai,learning' },
  { name: 'Freelancing', image: 'https://source.unsplash.com/800x600/?futuristic,computer,interface' },
  { name: 'Health', image: 'https://source.unsplash.com/800x600/?smartwatch,health,analytics' },
  { name: 'Geospatial Sciences', image: 'https://source.unsplash.com/800x600/?augmented,reality,navigation' },
];

const Odin: React.FC = () => {
  return (
    <div className="space-y-16">
      <section className="text-center pt-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          ODIN: On Device
          <span className="block text-cyan-400">Intelligence</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Secure, private, and efficient AI that runs locally on your hardware.
        </p>
      </section>

      <PageSection title="Data Protection & Safety First">
        <p className="max-w-3xl mx-auto">
          ODIN stands for On Device Intelligence and we strictly adhere to the practice of building use cases in various domains on device for data protection and safety. This also reduces the cost and also eliminates the need for sending your private data to the web.
        </p>
      </PageSection>

      <PageSection title="Agentic Applications">
        <p className="mb-10 max-w-3xl mx-auto">
          Currently we have developed agentic applications in the following domains:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((app) => (
            <DomainCard key={app.name} imageUrl={app.image} title={app.name} />
          ))}
        </div>
      </PageSection>
    </div>
  );
};

export default Odin;