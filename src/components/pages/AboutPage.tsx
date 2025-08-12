"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const AboutPage = ({ onNavigate }: AboutPageProps) => {
  const { theme } = useTheme();

  // Using our color palette in order: #F3F3E0 (cream), #27548A (blue), #183B4E (navy), #DDA853 (gold)
  const textColor = theme === 'dark' ? '#F3F3E0' : '#183B4E';
  const primaryColor = '#F3F3E0'; // Cream as primary
  const secondaryColor = '#27548A'; // Blue as secondary
  const tertiaryColor = '#183B4E'; // Navy as tertiary
  const accentColor = '#DDA853'; // Gold as accent

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-cream dark:bg-navy">
      <motion.div
        className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-light mb-8 text-gold dark:text-gold">
            關於 <span className="text-navy dark:text-cream">About</span>
          </h1>

          <div className="space-y-6" style={{ color: textColor }}>
            <p className="text-lg">
              I'm a Lead Developer at OS Websolutions with a passion for building complex systems and data-driven solutions.
            </p>

            <p className="text-lg">
              With expertise in full-stack development and a growing interest in machine learning and data science,
              I create elegant solutions to complex problems.
            </p>

            <p className="text-lg">
              My approach combines technical excellence with a deep understanding of user needs,
              resulting in applications that are both powerful and intuitive.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-medium mb-3 text-gold dark:text-gold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Machine Learning', 'Data Science'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 rounded-full text-sm bg-blue bg-opacity-10 dark:bg-blue dark:bg-opacity-20 text-blue dark:text-cream">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              onClick={() => onNavigate('work')}
              className="inline-block border-b-2 border-blue text-blue pb-1 text-lg hover:pb-2 transition-all duration-300 dark:border-blue dark:text-blue"
            >
              View My Work →
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:h-[500px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <Image
            src="/rachid.png"
            alt="Rachid Ezzahraouy"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy opacity-20 dark:from-transparent dark:to-blue"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <h2 className="text-xl md:text-3xl font-light bg-opacity-70 inline-block text-gold dark:text-gold">
              Lead Developer
            </h2>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutPage;
