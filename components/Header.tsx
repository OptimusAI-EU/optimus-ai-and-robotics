
import React, { useState } from 'react';
import type { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavClick: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  onClick: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, onClick, children }) => (
  <button
    onClick={() => onClick(page)}
    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      currentPage === page
        ? 'bg-cyan-500 text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`}
  >
    {children}
  </button>
);

const Header: React.FC<HeaderProps> = ({ currentPage, onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks: Page[] = ['About', 'ODIN', 'Robotics', 'Contact'];

  return (
    <header className="bg-gray-800/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-cyan-500/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={() => onNavClick('About')}>
              Optimus <span className="text-cyan-400">AI</span>
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((page) => (
                <NavLink key={page} page={page} currentPage={currentPage} onClick={onNavClick}>
                  {page === 'About' ? 'About Us' : page === 'Contact' ? 'Contact Us' : page}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navLinks.map((page) => (
                <button
                  key={page}
                  onClick={() => { onNavClick(page); setIsOpen(false); }}
                  className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium ${
                    currentPage === page
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {page === 'About' ? 'About Us' : page === 'Contact' ? 'Contact Us' : page}
                </button>
              ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
