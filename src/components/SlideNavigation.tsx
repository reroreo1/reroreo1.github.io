"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const SlideNavigation = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
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
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#projects', label: 'Work' },
    { href: 'https://www.linkedin.com/in/rezzahra/', label: 'LinkedIn', external: true },
    { href: '/#contact', label: 'Contact' },
  ];

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
      <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
        <Link href="/" className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          Rachid Ezzahraouy
        </Link>
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
                {navLinks.map((link, index) => (
                  <motion.div key={index} variants={linkVariants}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-4xl font-light hover:font-normal transition-all duration-300 ${
                          theme === 'dark' ? 'text-white' : 'text-black'
                        }`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className={`text-4xl font-light hover:font-normal transition-all duration-300 ${
                          pathname === link.href ? 'font-normal' : ''
                        } ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                      >
                        {link.label}
                      </Link>
                    )}
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

export default SlideNavigation;
