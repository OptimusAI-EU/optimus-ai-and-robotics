
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-12">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Optimus AI and Robotics. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
