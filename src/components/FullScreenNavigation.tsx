"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface FullScreenNavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const FullScreenNavigation = ({ currentPage, setCurrentPage }: FullScreenNavigationProps) => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when page changes
  useEffect(() => {
    setIsOpen(false);
  }, [currentPage]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'hidden'; // Keep hidden for full-page sections
    }
    return () => {
      document.body.style.overflow = 'hidden'; // Keep hidden for full-page sections
    };
  }, [isOpen]);

  const menuVariants: Variants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants: Variants = {
    closed: { 
      x: 50, 
      opacity: 0 
    },
    open: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30
      }
    }
  };

  const navLinks = [
    { id: 'home', label: '首頁', color: '#000000', darkColor: '#ffffff' },
    { id: 'about', label: '關於', color: '#ff4d4d', darkColor: '#ff4d4d' },
    { id: 'work', label: '工作', color: '#4d79ff', darkColor: '#4d79ff' },
    { id: 'contact', label: '聯繫', color: '#4dff4d', darkColor: '#4dff4d' },
  ];

  const getPageColor = () => {
    const page = navLinks.find(link => link.id === currentPage);
    if (!page) return theme === 'dark' ? '#ffffff' : '#000000';
    return theme === 'dark' ? page.darkColor : page.color;
  };

  return (
    <>
      {/* Hamburger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'bg-transparent' : theme === 'dark' ? 'bg-black' : 'bg-white'}`}
        aria-label="Toggle navigation menu"
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <span className={`w-full h-0.5 block transition-all duration-300 ease-in-out ${theme === 'dark' ? 'bg-white' : 'bg-black'} ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-full h-0.5 block transition-all duration-300 ease-in-out ${theme === 'dark' ? 'bg-white' : 'bg-black'} ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`w-full h-0.5 block transition-all duration-300 ease-in-out ${theme === 'dark' ? 'bg-white' : 'bg-black'} ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 left-6 z-50 p-3 rounded-full transition-all duration-300 ease-in-out ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )}
      </button>

      {/* Logo/Brand */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
        <button 
          onClick={() => setCurrentPage('home')}
          className={`text-lg font-bold transition-colors duration-500`}
          style={{ color: getPageColor() }}
        >
          Rachid Ezzahraouy
        </button>
      </div>

      {/* Full Screen Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className={`fixed inset-0 z-40 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <nav className="flex flex-col items-center space-y-8">
                {navLinks.map((link) => (
                  <motion.div key={link.id} variants={linkVariants}>
                    <button
                      onClick={() => setCurrentPage(link.id)}
                      className={`text-4xl font-light hover:font-normal transition-all duration-300`}
                      style={{ 
                        color: theme === 'dark' ? link.darkColor : link.color,
                        fontWeight: currentPage === link.id ? 'normal' : 'light'
                      }}
                    >
                      {link.label}
                    </button>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FullScreenNavigation;
