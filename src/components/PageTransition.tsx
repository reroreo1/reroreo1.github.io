"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


interface PageTransitionProps {
  children: React.ReactNode;
  currentPage: string;
}

const PageTransition = ({ children, currentPage }: PageTransitionProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Prevent scrolling during transitions
  useEffect(() => {
    if (isAnimating) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'hidden'; // Keep hidden for full-page sections
    }
    return () => {
      document.body.style.overflow = 'hidden'; // Keep hidden for full-page sections
    };
  }, [isAnimating]);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
      <motion.div
        key={currentPage}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        onAnimationStart={() => setIsAnimating(true)}
        onAnimationComplete={() => setIsAnimating(false)}
        className="w-full h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
