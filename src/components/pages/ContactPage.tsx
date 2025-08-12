"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

const ContactPage = ({ onNavigate }: ContactPageProps) => {
  const { theme } = useTheme();

  // Using our color palette in order: #F3F3E0 (cream), #27548A (blue), #183B4E (navy), #DDA853 (gold)
  const textColor = theme === 'dark' ? '#F3F3E0' : '#183B4E';
  const accentColor = '#DDA853'; // Gold as accent for Contact page

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-cream dark:bg-navy">
      <motion.div
        className="w-full max-w-4xl mx-auto px-6 md:px-12 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-4xl md:text-5xl font-light mb-12 text-gold dark:text-gold">
          聯繫 <span className="text-navy dark:text-cream">Contact</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="text-lg mb-10" style={{ color: textColor }}>
              I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>

            <div className="space-y-6 mb-10">
              <div>
                <h3 className="text-xl mb-1" style={{ color: textColor }}>Email</h3>
                <a
                  href="mailto:contact@rachidezzahraouy.com"
                  className="text-lg hover:underline transition-all duration-300"
                  style={{ color: accentColor }}
                >
                  contact@rachidezzahraouy.com
                </a>
              </div>

              <div>
                <h3 className="text-xl mb-1" style={{ color: textColor }}>LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/rezzahra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:underline transition-all duration-300"
                  style={{ color: accentColor }}
                >
                  linkedin.com/in/rezzahra
                </a>
              </div>

              <div>
                <h3 className="text-xl mb-1" style={{ color: textColor }}>GitHub</h3>
                <a
                  href="https://github.com/reroreo1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:underline transition-all duration-300"
                  style={{ color: accentColor }}
                >
                  github.com/reroreo1
                </a>
              </div>

              <div>
                <h3 className="text-xl mb-1" style={{ color: textColor }}>Location</h3>
                <p className="text-lg" style={{ color: accentColor }}>
                  Morocco
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button
                onClick={() => onNavigate('home')}
                className="inline-block border-b-2 pb-1 text-lg hover:pb-2 transition-all duration-300"
                style={{ borderColor: accentColor, color: accentColor }}
              >
                ← Back to Home
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg mb-2" style={{ color: textColor }}>Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-all duration-300"
                  style={{
                    borderColor: accentColor,
                    color: textColor
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg mb-2" style={{ color: textColor }}>Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-all duration-300"
                  style={{
                    borderColor: accentColor,
                    color: textColor
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg mb-2" style={{ color: textColor }}>Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message"
                  className="w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-all duration-300"
                  style={{
                    borderColor: accentColor,
                    color: textColor
                  }}
                ></textarea>
              </div>

              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 text-lg transition-all duration-300"
                style={{
                  color: accentColor,
                  borderBottom: `2px solid ${accentColor}`
                }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
