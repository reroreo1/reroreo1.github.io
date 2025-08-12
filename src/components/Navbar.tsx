'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { Transition } from '@headlessui/react';
import classNames from 'classnames';

const Navbar = () => {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const SCROLL_THRESHOLD = 200;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = Math.abs(currentY - lastScrollY.current);
    
      if (delta < SCROLL_THRESHOLD) return;
    
      if (currentY > lastScrollY.current && currentY > 100) {
        setIsVisible(false); // Scroll down — hide
      } else {
        setIsVisible(true); // Scroll up — show
      }
    
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Transition
      show={isVisible}
      enter="transition-transform duration-1800 ease-out"
      leave="transition-transform duration-1800 ease-in"
    >
      <nav
        className={classNames(
          'fixed top-0 left-0 right-0 z-50 transform',
          isVisible ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div
          className={classNames(
            'rounded-full border-4 px-8 py-4 flex items-center justify-center w-full max-w-[650px] gap-6 mx-auto mt-6 transition-all origin-top shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(128,128,128,0.3)]',
            theme === 'dark' ? 'bg-black border-black' : 'bg-white border-white'
          )}
        >
          <Link
            href="/"
            style={{ color: theme === 'dark' ? '#ffffff' : '#333333' }}
            className={classNames(
              'font-medium hover:bg-gray-100 hover:text-black dark:hover:bg-gray-900 dark:hover:text-white px-2 py-2 rounded-full transition-all text-base whitespace-nowrap',
              pathname === '/' && 'font-bold'
            )}
          >
            Rachid Ezzahraouy
          </Link>
          <Link
            href="/#about"
            style={{ color: theme === 'dark' ? '#ffffff' : '#333333' }}
            className={classNames(
              'font-medium hover:bg-gray-100 hover:text-black dark:hover:bg-gray-900 dark:hover:text-white px-2 py-2 rounded-full transition-all text-base whitespace-nowrap',
              pathname === '/#about' && 'font-bold'
            )}
          >
            Highlights
          </Link>
          <Link
            href="/#projects"
            style={{ color: theme === 'dark' ? '#ffffff' : '#333333' }}
            className={classNames(
              'font-medium hover:bg-gray-100 hover:text-black dark:hover:bg-gray-900 dark:hover:text-white px-2 py-2 rounded-full transition-all text-base whitespace-nowrap',
              pathname === '/#projects' && 'font-bold'
            )}
          >
            Work
          </Link>
          <Link
            href="https://www.linkedin.com/in/rezzahra/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: theme === 'dark' ? '#ffffff' : '#333333' }}
            className="font-medium hover:bg-gray-100 hover:text-black dark:hover:bg-gray-900 dark:hover:text-white px-2 py-2 rounded-full transition-all text-base whitespace-nowrap"
          >
            LinkedIn
          </Link>
          <Link
            href="/#contact"
            style={{ color: theme === 'dark' ? '#ffffff' : '#333333' }}
            className={classNames(
              'font-medium hover:bg-gray-100 hover:text-black dark:hover:bg-gray-900 dark:hover:text-white px-2 py-2 rounded-full transition-all text-base whitespace-nowrap',
              pathname === '/#contact' && 'font-bold'
            )}
          >
            Contact
          </Link>
        </div>
      </nav>
    </Transition>
  );
};

export default Navbar;
