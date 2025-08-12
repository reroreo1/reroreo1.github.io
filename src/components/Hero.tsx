"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useTheme } from '@/context/ThemeContext';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const { theme } = useTheme();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-12 pt-24 pb-12 bg-white dark:bg-black overflow-hidden">
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <motion.div
        className="relative w-full max-w-6xl mx-auto z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          Rachid Ezzahraouy
        </h1>

        <div className={`text-2xl md:text-3xl lg:text-4xl font-light mb-12 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          <Typewriter
            options={{
              strings: ['Lead Developer at OS Websolutions', 'Machine Learning Enthusiast', 'Data Science Student'],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </div>

        <motion.p
          className={`text-lg md:text-xl max-w-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Software Engineer passionate about complex systems and data-driven solutions.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-primary dark:hover:text-primary transition-colors`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.a
            href="#projects"
            className={`inline-flex items-center gap-2 border-b-2 ${theme === 'dark' ? 'border-white text-white' : 'border-black text-black'} pb-1 text-lg hover:pb-2 transition-all duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className={`w-6 h-6 border-2 ${theme === 'dark' ? 'border-white' : 'border-black'} rounded-full flex items-center justify-center`}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className={`w-1 h-1 ${theme === 'dark' ? 'bg-white' : 'bg-black'} rounded-full`}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
