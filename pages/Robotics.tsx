import React from 'react';
import PageSection from '../components/PageSection';
import DomainCard from '../components/DomainCard';

const robotTypes = [
  { name: 'Manipulation', image: 'https://source.unsplash.com/800x600/?robotic,arm,precision' },
  { name: 'Locomotion', image: 'https://source.unsplash.com/800x600/?legged,robot,walking' },
  { name: 'Mobile Manipulation', image: 'https://source.unsplash.com/800x600/?mobile,robot,warehouse' },
  { name: 'Industrial Robots', image: 'https://source.unsplash.com/800x600/?industrial,robots,assembly' },
];

const humanoidImages = [
    { name: 'Humanoid Alpha', image: 'https://source.unsplash.com/800x600/?humanoid,robot,future' },
    { name: 'Humanoid Beta', image: 'https://source.unsplash.com/800x600/?humanoid,robot,ai' },
    { name: 'Humanoid Gamma', image: 'https://source.unsplash.com/800x600/?humanoid,robot,sleek' },
];

const Robotics: React.FC = () => {
  return (
    <div className="space-y-16">
      <section className="text-center pt-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Pioneering Modern
          <span className="block text-cyan-400">Robotics</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Creating efficient hardware and intelligent robots through advanced learning techniques.
        </p>
      </section>

      <PageSection title="Research & Development">
        <p className="max-w-3xl mx-auto mb-10">
          We carry out research in the field of modern robotics focused on creating efficient hardware and training robots using reinforcement learning, imitation learning, training in simulation and Sim2Real Transfer. Our range of robots range from low cost hardware capable of manipulation, locomotion and mobile manipulation to heavy duty industrial robots and humanoids.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {robotTypes.map((robot) => (
            <DomainCard key={robot.name} imageUrl={robot.image} title={robot.name} />
          ))}
        </div>
      </PageSection>
      
      <section className="py-12 md:py-16 bg-gray-800/50 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          The <span className="text-cyan-400">Humanoid</span> Project
        </h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-300 text-center">
            <p className="mb-10 max-w-3xl mx-auto">
                We are actively working with our partners to develop humanoids capable of working in industry and perform real World work. Humanoids will be trained through reinforcement learning and imitation learning techniques to be autonomous agents for various domains.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                 {humanoidImages.map((humanoid) => (
                    <DomainCard key={humanoid.name} imageUrl={humanoid.image} title={humanoid.name} />
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Robotics;