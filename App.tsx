
import React, { useState, useCallback } from 'react';
import type { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Odin from './pages/Odin';
import Robotics from './pages/Robotics';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('About');

  const handleNavClick = useCallback((page: Page) => {
    setCurrentPage(page);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'ODIN':
        return <Odin />;
      case 'Robotics':
        return <Robotics />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans flex flex-col">
      <Header currentPage={currentPage} onNavClick={handleNavClick} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
