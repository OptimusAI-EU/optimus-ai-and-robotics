import React from 'react';
import PageSection from '../components/PageSection';
import DomainCard from '../components/DomainCard';

const domains = [
  { name: 'Education', image: 'https://source.unsplash.com/800x600/?robot,education' },
  { name: 'Health', image: 'https://source.unsplash.com/800x600/?ai,healthcare,medical' },
  { name: 'Industry', image: 'https://source.unsplash.com/800x600/?robotic,factory,automation' },
  { name: 'Earth Sciences', image: 'https://source.unsplash.com/800x600/?satellite,earth,data' },
  { name: 'Geospatial Sciences', image: 'https://source.unsplash.com/800x600/?geospatial,map,ai' },
];

const About: React.FC = () => {
  return (
    <div className="space-y-16">
      <section className="text-center pt-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Engineering the Future with
          <span className="block text-cyan-400">Intelligent Systems</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Optimus AI and Robotics is an Artificial Intelligence (AI) First company that provides products and services powered by AI.
        </p>
      </section>

      <PageSection title="Our Story">
        <p className="max-w-3xl mx-auto">
          We use agentic framework to seamlessly cover various domains. We also design, manufacture, train and supply robots for industries, research, education and domestic use.
        </p>
      </PageSection>

      <PageSection title="Our Mission">
        <p className="mb-10 max-w-3xl mx-auto">
          Create AI and Robotics for real World domains such as Education, Health, Industry, Earth Sciences, Geospatial Sciences and more.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {domains.map((domain) => (
            <DomainCard key={domain.name} imageUrl={domain.image} title={domain.name} />
          ))}
        </div>
      </PageSection>
    </div>
  );
};

export default About;