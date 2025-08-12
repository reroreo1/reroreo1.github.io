"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const ProfileImage = () => {
  const { theme } = useTheme();

  return (
    <section className="w-full bg-white dark:bg-black py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/rachid.png"
            alt="Rachid Ezzahraouy"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="grayscale hover:grayscale-0 transition-all duration-1000"
            priority
          />
          <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black' : 'bg-white'} opacity-10 mix-blend-multiply`}></div>

          <motion.div
            className="absolute bottom-0 left-0 p-6 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className={`text-xl md:text-3xl font-light ${theme === 'dark' ? 'text-white' : 'text-black'} bg-opacity-70 inline-block`}>
              Software Engineer & Data Scientist
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileImage;
