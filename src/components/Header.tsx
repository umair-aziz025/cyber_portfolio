import React, { useState } from 'react';
import { Shield } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-green-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center logo-animated relative">
              <Shield className="w-6 h-6 text-black" />
              {/* Magical star burst effects */}
              <div className="star-burst"></div>
              <div className="star-burst"></div>
              <div className="star-burst"></div>
              <div className="star-burst"></div>
              <div className="star-burst"></div>
              <div className="star-burst"></div>
              <div className="star-burst"></div>
              <div className="star-burst"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold glow-green">UMAIR AZIZ</h1>
              <p className="text-xs text-green-400">Cybersecurity Analyst</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                  currentPage === item.id
                    ? 'text-black bg-green-500 shadow-lg shadow-green-500/25'
                    : 'text-white hover:text-green-400 hover:bg-green-500/10'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {currentPage !== item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1 relative z-50"
          >
            <div className={`w-6 h-0.5 bg-green-500 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-green-500 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-green-500 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-green-500/20 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <nav className="container mx-auto px-6 py-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 text-left ${
                    currentPage === item.id
                      ? 'text-black bg-green-500 shadow-lg shadow-green-500/25'
                      : 'text-white hover:text-green-400 hover:bg-green-500/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;