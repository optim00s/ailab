"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      // Trigger animation after state update
      requestAnimationFrame(() => setIsAnimating(true));
    } else {
      document.body.classList.remove('overflow-hidden');
      setIsAnimating(false);
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = ['Projects', 'Research', 'Company', 'Careers', 'News'];

  return (
    <header className={`fixed top-0 left-0 right-0 backdrop-blur-lg transition-all duration-300 z-50 ${isOpen ? 'h-screen bg-opacity-100' : 'h-auto bg-opacity-90'}`}>
      <nav className="flex flex-col md:flex-row items-center justify-between px-4 py-3">
        {/* Top Row - Logo and Burger Menu */}
        <div className="flex w-full justify-between items-center md:w-auto">
          <div className="flex-shrink-0">
            <Image 
              src="/logo.png" 
              width={50} 
              height={50} 
              alt="Company logo"
              className="transition-transform hover:scale-105"
            />
          </div>
          
          <button
            className="md:hidden p-2 transition-transform hover:scale-110"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="transition-transform rotate-180" />
            ) : (
              <Menu size={24} className="transition-transform" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <div 
              key={item} 
              className="cursor-pointer transition-all hover:scale-105 hover:opacity-80"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className={`w-full md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 h-[calc(100vh-80px)]' : 'opacity-0 h-0'
        }`}>
          <div className="flex flex-col items-center justify-center gap-6 h-full">
            {menuItems.map((item, index) => (
              <div
                key={item}
                className={`text-xl transition-all transform ${
                  isAnimating 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="cursor-pointer hover:opacity-75 transition-opacity">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;