'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'ABT', fullName: 'About', href: '#about' },
    { name: 'SKILLS', fullName: 'Skills', href: '#skills' },
    { name: 'PORTFOLIO', fullName: 'Portfolio', href: '#portfolio' },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Left Side (BIGGER!) */}
          <div className="flex-shrink-0">
            <button 
              onClick={scrollToTop}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img 
                src="/images/projects/ajg.png"
                alt="AJG Logo"
                className="h-14 w-auto"
                onError={(e) => {
                  // Fallback to text if image not found
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = '<span class="text-3xl font-bold text-gray-900 tracking-tight">AJG</span>';
                  }
                }}
              />
            </button>
          </div>

          {/* Desktop Navigation - Center/Right */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-gray-700 hover:text-gray-900 font-light tracking-[0.2em] transition-colors relative group uppercase"
                title={link.fullName}
              >
                {link.name}
                {/* Underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            {/* Contact Button - BIG LETTERS */}
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-2.5 bg-white border-2 border-black text-black text-base font-light tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-300 rounded-full uppercase"
            >
              CONTACT ME
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-light tracking-[0.2em] transition-colors rounded uppercase"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="block w-full text-center px-4 py-3 mt-2 border-2 border-black text-black text-sm font-light tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-300 rounded uppercase"
            >
              CONTACT ME
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}