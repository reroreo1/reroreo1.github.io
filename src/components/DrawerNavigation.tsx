"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { profileTranslations } from '@/translations/profileTranslations';
import Link from 'next/link';
import Image from 'next/image';

// Define the page sections with our color palette: #F3F3E0, #27548A, #183B4E, #DDA853
const sections = [
  { id: 'profile', label: '簡介', englishLabel: 'Profile', color: '#F3F3E0', darkColor: '#183B4E', position: 'left' },
  { id: 'experience', label: '經驗', englishLabel: 'Experience', color: '#27548A', darkColor: '#27548A', position: 'center-left' },
  { id: 'projects', label: '項目', englishLabel: 'Projects', color: '#183B4E', darkColor: '#F3F3E0', position: 'center-right' },
  { id: 'contact', label: '聯繫', englishLabel: 'Contact', color: '#DDA853', darkColor: '#DDA853', position: 'right' },
];

const DrawerNavigation = () => {
  const { theme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState('profile'); // Default to profile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Calculate section widths based on active section
  const getSectionWidth = (sectionId: string) => {
    if (sectionId === activeSection) {
      return '88%'; // Active section takes most of the screen
    } else {
      return '4%'; // Inactive sections are very slim tabs on the sides
    }
  };

  // Get section content based on ID
  const getSectionContent = (sectionId: string) => {
    switch (sectionId) {
      case 'profile':
        return (
          <div className="h-full flex flex-col">
            <div className="min-h-screen font-radley overflow-auto scrollbar-hide bg-[#F3F3E0]">
              <div className="max-w-6xl mx-auto px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                  {/* Left Column */}
                  <div className="md:col-span-5 flex flex-col justify-between h-full">
                    <div className="sticky top-0 pt-4 pb-6 bg-[#F3F3E0] z-10">
                      <div className="text-right">
                        <h1 className="text-3xl md:text-4xl text-[#183B4E] font-normal leading-tight">
                          {profileTranslations[language].title.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                              {line}{i < profileTranslations[language].title.split('\n').length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </h1>
                      </div>

                      <div className="flex justify-center mt-6">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#183B4E] shadow-xl"
                          whileHover={{
                            scale: 1.03,
                            boxShadow: "0 10px 25px rgba(24, 59, 78, 0.3)",
                            transition: { duration: 0.3 }
                          }}
                        >
                          <Image
                            src="/rachid_cv.jpg"
                            alt="Rachid&apos;s Profile"
                            className="w-full h-full object-cover"
                            width={200}
                            height={200}
                          />
                        </motion.div>
                      </div>
                    </div>

                    <div className="mt-auto pt-16 md:pt-24 sticky bottom-0 bg-[#F3F3E0] pb-4">
                      {/* Dog illustration - simplified to match reference */}
                      <svg width="90" height="200" viewBox="0 0 110 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#183B4E]">
                        {/* Dog head */}
                        <path d="M50 20C50 20 40 10 50 5C60 0 80 0 90 5C100 10 90 20 90 20" stroke="currentColor" strokeWidth="1"/>
                        {/* Dog eye */}
                        <circle cx="60" cy="10" r="2" fill="currentColor"/>
                        {/* Dog ear */}
                        <path d="M40 15C40 15 30 5 45 0" stroke="currentColor" strokeWidth="1"/>
                        {/* Dog nose/mouth */}
                        <path d="M65 15C65 15 70 18 75 15" stroke="currentColor" strokeWidth="1"/>
                        {/* Dog long neck */}
                        <path d="M70 20C70 20 80 60 70 120C60 180 70 240 70 270" stroke="currentColor" strokeWidth="1"/>
                        {/* Dog legs */}
                        <path d="M70 270L50 290" stroke="currentColor" strokeWidth="1"/>
                        <path d="M70 270L90 290" stroke="currentColor" strokeWidth="1"/>
                      </svg>

                      {/* Social links */}
                      <div className="flex space-x-5 mt-6">
                        <a href="https://www.linkedin.com/in/rezzahra/" target="_blank" rel="noopener noreferrer" className="text-[#183B4E]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        <a href="https://www.instagram.com/rezzahra0/" target="_blank" rel="noopener noreferrer" className="text-[#183B4E]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                        <a href="https://github.com/reroreo1" target="_blank" rel="noopener noreferrer" className="text-[#183B4E]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="hidden md:block md:col-span-1 relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-[#183B4E] opacity-30"></div>
                  </div>

                  {/* Right Column */}
                  <div className="md:col-span-6 flex flex-col justify-between h-full">
                    <div className="overflow-y-auto scrollbar-hide">
                      <h2 className="text-base font-medium text-[#183B4E] mb-6">{profileTranslations[language].tldr}</h2>
                      <p className="text-[#183B4E] mb-6 text-base leading-relaxed">
                        {profileTranslations[language].paragraph1}
                      </p>
                      <p className="text-[#183B4E] mb-6 text-base leading-relaxed">
                        {profileTranslations[language].paragraph2}
                      </p>
                      <p className="text-[#183B4E] text-base leading-relaxed">
                        {profileTranslations[language].paragraph3}
                      </p>
                    </div>

                    <div className="mt-auto pt-12">
                      <div className="flex space-x-6">
                        <button
                          onClick={() => setLanguage('en')}
                          className={`text-[#183B4E] hover:underline font-normal ${language === 'en' ? 'underline font-medium' : ''}`}
                        >
                          EN
                        </button>
                        <button
                          onClick={() => setLanguage('fr')}
                          className={`text-[#183B4E] hover:underline font-normal ${language === 'fr' ? 'underline font-medium' : ''}`}
                        >
                          FR
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'experience':
        return (
          <div className="h-full flex flex-col">
            <div className="min-h-screen font-radley overflow-auto scrollbar-hide bg-[#27548A]">
              <div className="max-w-6xl mx-auto px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                  {/* Left Column - Experience */}
                  <div className="md:col-span-5 flex flex-col h-full">
                    <div className="text-right sticky top-0 pt-4 pb-2 bg-[#27548A] z-10">
                      <h1 className="text-3xl md:text-4xl text-white font-normal leading-tight">
                        Professional<br />Experience
                      </h1>
                    </div>

                    <div className="mt-8 space-y-12 overflow-y-auto scrollbar-hide">
                      <motion.div
                        className="p-4 border-b border-[#DDA853] border-opacity-30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-medium text-[#DDA853]">Lead Developer</h3>
                          <span className="text-white font-medium text-sm">06/2024 - present</span>
                        </div>
                        <h4 className="text-lg text-white mb-3">OS Websolutions</h4>
                        <div className="space-y-3 text-white text-opacity-90">
                          <p className="text-base leading-relaxed"><strong className="text-[#DDA853]">Halal Sheikh App:</strong> Developed a cross-platform barcode scanning app using Flutter with a Strapi CMS backend, allowing users to check if products are halal or haram.</p>
                          <p className="text-base leading-relaxed"><strong className="text-[#DDA853]">ActiveCSP:</strong> Built an OSINT platform to monitor user assets like IPs, domains, and emails using tools such as Nmap, Nuclei, and honeypots.</p>
                          <p className="text-base leading-relaxed"><strong className="text-[#DDA853]">Leadshift:</strong> Developed an AI-powered lead generation platform that automates cold outreach via emails and calls using Next.js, ShadCN, and NestJS.</p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="p-4 border-b border-[#DDA853] border-opacity-30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-medium text-[#DDA853]">Full Stack Developer</h3>
                          <span className="text-white font-medium text-sm">01/2023 - 05/2023</span>
                        </div>
                        <h4 className="text-lg text-white mb-3">UM6P College of Computing</h4>
                        <div className="space-y-3 text-white text-opacity-90">
                          <p className="text-base leading-relaxed">
                            Developed a revolutionary AI note-taking app utilizing the Whisperx transcription model as a microservice on a Flask server. Built with Angular and Spring Boot to assist a student with dysarthria in enhancing her academic experience.
                          </p>
                          <p className="text-base leading-relaxed">
                            Involved in every development stage from benchmarking to presenting the MVP to investors. Focused on improving user experience, ensuring satisfying results with minimal clicks. Revamped the design three times and reimplemented the UI based on client feedback.
                          </p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <span className="px-2 py-1 text-xs text-white bg-[#27548A] bg-opacity-50">Angular</span>
                            <span className="px-2 py-1 text-xs text-white bg-[#27548A] bg-opacity-50">Spring Boot</span>
                            <span className="px-2 py-1 text-xs text-white bg-[#27548A] bg-opacity-50">Flask</span>
                            <span className="px-2 py-1 text-xs text-white bg-[#27548A] bg-opacity-50">NLP</span>
                            <span className="px-2 py-1 text-xs text-white bg-[#27548A] bg-opacity-50">UI/UX</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="hidden md:block md:col-span-1 relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-[#DDA853] opacity-30"></div>
                  </div>

                  {/* Right Column - Education */}
                  <div className="md:col-span-6 flex flex-col h-full">
                    <div className="sticky top-0 pt-4 pb-2 bg-[#27548A] z-10">
                      <h1 className="text-3xl md:text-4xl text-white font-normal leading-tight">
                        Education &<br />Certifications
                      </h1>
                    </div>

                    <div className="mt-8 space-y-12 overflow-y-auto scrollbar-hide">
                      <motion.div
                        className="p-4 border-b border-[#DDA853] border-opacity-30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-medium text-[#DDA853]">Member, Software Architect</h3>
                          <span className="text-white font-medium text-sm">2026</span>
                        </div>
                        <h4 className="text-lg text-white mb-3">1337 Benguerir</h4>
                        <p className="text-base leading-relaxed text-white text-opacity-90">
                          Specialized in software architecture and advanced programming techniques.
                        </p>
                      </motion.div>

                      <motion.div
                        className="p-4 border-b border-[#DDA853] border-opacity-30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-medium text-[#DDA853]">Computer Science & Engineering</h3>
                          <span className="text-white font-medium text-sm">2018 - 2020</span>
                        </div>
                        <h4 className="text-lg text-white mb-3">École nationale des sciences appliquées d&apos;Agadir</h4>
                        <p className="text-base leading-relaxed text-white text-opacity-90">
                          Focused on computer science fundamentals and engineering principles.
                        </p>
                      </motion.div>

                      <motion.div
                        className="p-4 border-b border-[#DDA853] border-opacity-30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-medium text-[#DDA853]">Meta Full Stack Developer Specialization</h3>
                          <span className="text-white font-medium text-sm">2023</span>
                        </div>
                        <h4 className="text-lg text-white mb-3">Meta</h4>
                        <p className="text-base leading-relaxed text-white text-opacity-90">
                          React-Django specialization covering front-end and back-end development.
                        </p>
                      </motion.div>
                    </div>

                    <div className="mt-auto pt-12 sticky bottom-0 bg-[#27548A] pb-4">
                      <motion.button
                        onClick={() => setActiveSection('projects')}
                        className="px-6 py-3 bg-[#183B4E] text-white border border-[#183B4E] rounded-none text-lg hover:bg-opacity-90 transition-all duration-300 flex items-center space-x-2"
                        whileHover={{ scale: 1.05, x: 5, backgroundColor: "#183B4E", boxShadow: "0 0 10px rgba(24, 59, 78, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>View My Projects</span>
                        <motion.span
                          initial={{ x: 0 }}
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeInOut"
                          }}
                        >→</motion.span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="h-full flex flex-col">
            <div className="min-h-screen font-radley overflow-auto scrollbar-hide bg-[#183B4E]">
              <div className="max-w-6xl mx-auto px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                  {/* Left Column - Skills */}
                  <div className="md:col-span-5 flex flex-col h-full">
                    <div className="text-right sticky top-0 pt-4 pb-2 bg-[#183B4E] z-10">
                      <h1 className="text-3xl md:text-4xl text-white font-normal leading-tight">
                        Technical<br />Skills
                      </h1>
                    </div>

                    <div className="mt-8 space-y-8 overflow-y-auto scrollbar-hide">
                      {/* Frontend Skills */}
                      <motion.div
                        className="p-4 border-b border-[#DDA853] border-opacity-30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <h3 className="text-xl font-medium mb-4 text-[#DDA853]">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            'Next.js', 'Angular', 'React.js', 'TypeScript', 'JavaScript',
                            'TailwindCSS', 'Bootstrap', 'Flutter', 'Dart', 'Version Control'
                          ].map((skill) => (
                            <span key={skill} className="px-3 py-1 text-white text-sm bg-[#183B4E] border border-[#DDA853] border-opacity-30">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Backend Skills */}
                      <motion.div
                        className="p-4 border-b border-[#DDA853] border-opacity-30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <h3 className="text-xl font-medium mb-4 text-[#DDA853]">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            'Python', 'Flask', 'FastAPI', 'JavaScript', 'TypeScript', 'Node.js', 'Express'
                          ].map((skill) => (
                            <span key={skill} className="px-3 py-1 text-white text-sm bg-[#183B4E] border border-[#DDA853] border-opacity-30">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Databases Skills */}
                      <motion.div
                        className="p-4 border-b border-[#DDA853] border-opacity-30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <h3 className="text-xl font-medium mb-4 text-[#DDA853]">Databases</h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            'MySQL', 'PostgreSQL', 'MongoDB', 'GraphQL'
                          ].map((skill) => (
                            <span key={skill} className="px-3 py-1 text-white text-sm bg-[#183B4E] border border-[#DDA853] border-opacity-30">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>

                      {/* DevOps Skills */}
                      <motion.div
                        className="p-4 border-b border-[#DDA853] border-opacity-30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        <h3 className="text-xl font-medium mb-4 text-[#DDA853]">DevOps</h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            'Docker', 'Linux', 'AWS', 'Digital Ocean', 'Microsoft Azure'
                          ].map((skill) => (
                            <span key={skill} className="px-3 py-1 text-white text-sm bg-[#183B4E] border border-[#DDA853] border-opacity-30">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Languages */}
                      <motion.div
                        className="p-4 border-b border-[#DDA853] border-opacity-30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        <h3 className="text-xl font-medium mb-4 text-[#DDA853]">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            'English', 'French', 'Arabic'
                          ].map((skill) => (
                            <span key={skill} className="px-3 py-1 text-white text-sm bg-[#183B4E] border border-[#DDA853] border-opacity-30">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="hidden md:block md:col-span-1 relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-[#DDA853] opacity-30"></div>
                  </div>

                  {/* Right Column - Projects & Certificates */}
                  <div className="md:col-span-6 flex flex-col h-full">
                    <div className="sticky top-0 pt-4 pb-2 bg-[#183B4E] z-10">
                      <h1 className="text-3xl md:text-4xl text-white font-normal leading-tight">
                        Projects &<br />Certificates
                      </h1>
                    </div>

                    <div className="mt-8 space-y-8 overflow-y-auto scrollbar-hide">
                      {/* Projects */}
                      <motion.div
                        className="p-4 border-b border-[#DDA853] border-opacity-30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        <h3 className="text-xl font-medium mb-4 text-[#DDA853]">Halal Sheikh App</h3>
                        <p className="text-white text-opacity-90 mb-3">
                          A cross-platform barcode scanning app using Flutter with a Strapi CMS backend, allowing users to check if products are halal or haram.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="px-2 py-1 text-xs text-white bg-[#27548A] bg-opacity-50">Flutter</span>
                          <span className="px-2 py-1 text-xs text-white bg-[#27548A] bg-opacity-50">Strapi</span>
                          <span className="px-2 py-1 text-xs text-white bg-[#27548A] bg-opacity-50">OCR</span>
                        </div>
                      </motion.div>

                      <motion.div
                        className="p-4 border-b border-[#DDA853] border-opacity-30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        <h3 className="text-xl font-medium mb-4 text-[#DDA853]">ActiveCSP</h3>
                        <p className="text-white text-opacity-90 mb-3">
                          An OSINT platform to monitor user assets like IPs, domains, and emails using tools such as Nmap, Nuclei, and honeypots.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="px-2 py-1 text-xs text-white bg-[#27548A] bg-opacity-50">FastAPI</span>
                          <span className="px-2 py-1 text-xs text-white bg-[#27548A] bg-opacity-50">Docker</span>
                          <span className="px-2 py-1 text-xs text-white bg-[#27548A] bg-opacity-50">Azure</span>
                        </div>
                      </motion.div>

                      {/* Certificates */}
                      <motion.div
                        className="p-4 border-b border-[#DDA853] border-opacity-30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                      >
                        <h3 className="text-xl font-medium mb-4 text-[#DDA853]">Certificates</h3>
                        <ul className="space-y-4 text-white text-opacity-90">
                          <li className="flex items-start">
                            <span className="text-[#DDA853] mr-2">•</span>
                            <div>
                              <p className="font-medium">Meta Full Stack Developer Specialization</p>
                              <p className="text-sm text-white text-opacity-70">Meta - 2023</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#DDA853] mr-2">•</span>
                            <div>
                              <p className="font-medium">Programming with Javascript</p>
                              <p className="text-sm text-white text-opacity-70">Coursera - 2023</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#DDA853] mr-2">•</span>
                            <div>
                              <p className="font-medium">Data Structure and Algorithmic using Javascript</p>
                              <p className="text-sm text-white text-opacity-70">Coursera - 2023</p>
                            </div>
                          </li>
                        </ul>
                      </motion.div>
                    </div>

                    <div className="mt-auto pt-12 sticky bottom-0 bg-[#183B4E] pb-4">
                      <motion.button
                        onClick={() => setActiveSection('contact')}
                        className="px-6 py-3 bg-[#DDA853] text-white border border-[#DDA853] rounded-none text-lg hover:bg-opacity-90 transition-all duration-300 flex items-center space-x-2"
                        whileHover={{ scale: 1.05, x: 5, backgroundColor: "#DDA853", boxShadow: "0 0 10px rgba(221, 168, 83, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Contact Me</span>
                        <motion.span
                          initial={{ x: 0 }}
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeInOut"
                          }}
                        >→</motion.span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="h-full flex flex-col justify-center items-center bg-[#DDA853]">
            <div className="max-w-3xl w-full px-6 py-12">
              {/* Social Icons */}
              <motion.div
                className="flex justify-center space-x-12 mb-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.a
                  href="mailto:contact@rachidezzahraouy.com"
                  className="bg-[#183B4E] text-white p-4 hover:bg-[#27548A] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/rezzahra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#183B4E] text-white p-4 hover:bg-[#27548A] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://github.com/reroreo1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#183B4E] text-white p-4 hover:bg-[#27548A] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
              </motion.div>

              {/* Contact Heading */}
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#183B4E]">
                  Want to get in touch?
                </h1>
                <p className="text-2xl font-medium text-[#183B4E]">
                  Drop me a line
                </p>
              </motion.div>

              {/* Contact Form */}
              <motion.form
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-lg mb-2 text-[#183B4E] font-medium">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-white border-2 border-[#F3F3E0] focus:border-[#183B4E] focus:outline-none transition-all duration-300 text-[#183B4E]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lg mb-2 text-[#183B4E] font-medium">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white border-2 border-[#F3F3E0] focus:border-[#183B4E] focus:outline-none transition-all duration-300 text-[#183B4E]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg mb-2 text-[#183B4E] font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Enter your message"
                    className="w-full px-4 py-3 bg-white border-2 border-[#F3F3E0] focus:border-[#183B4E] focus:outline-none transition-all duration-300 text-[#183B4E]"
                  ></textarea>
                </div>

                <div className="flex justify-center mt-8">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02, backgroundColor: "#27548A" }}
                    whileTap={{ scale: 0.98 }}
                    className="px-12 py-4 bg-[#183B4E] text-white text-lg font-medium transition-all duration-300"
                  >
                    Submit
                  </motion.button>
                </div>
              </motion.form>

              {/* Back Button */}
              <motion.div
                className="mt-12 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              >
                <motion.button
                  onClick={() => setActiveSection('profile')}
                  className="text-[#183B4E] font-medium hover:underline transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, -5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut"
                    }}
                  >←</motion.span>
                  <span>Back to Profile</span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Toggle menu for mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed inset-0 flex flex-col h-screen w-screen overflow-hidden">
      {/* Header with logo and menu button */}
      <motion.header
        className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.1
        }}
      >
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link href="/" className="text-2xl font-bold text-black bg-opacity-10 p-3 rounded-full">
            RE
          </Link>
        </motion.div>

        <div className="flex items-center space-x-4">

          <motion.button
            onClick={toggleMenu}
            className="md:hidden p-3 text-white bg-[#183B4E] bg-opacity-30 hover:bg-opacity-50 border-r-2 border-[#DDA853]"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(24, 59, 78, 0.5)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white block transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white block transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-0.5 bg-white block transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#26282B] bg-opacity-95 md:hidden flex flex-col items-center justify-center"
          >
            <motion.nav
              className="flex flex-col items-center space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                staggerChildren: 0.08,
                delayChildren: 0.1
              }}
            >
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-2xl font-light transition-all duration-300 px-6 py-2 ${
                    activeSection === section.id
                      ? 'text-white font-normal bg-[#183B4E] bg-opacity-30 border-l-2 border-[#DDA853]'
                      : 'text-gray-400 hover:text-[#DDA853] hover:bg-[#183B4E] hover:bg-opacity-20 hover:border-l-2 hover:border-[#DDA853]'
                  }`}
                  style={{ color: activeSection === section.id ? section.color : '' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {section.englishLabel}
                </motion.button>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Drawer Navigation */}
      <div className="hidden md:flex h-full">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className="h-full overflow-hidden relative"
            style={{
              backgroundColor: section.color,
              cursor: activeSection === section.id ? 'default' : 'pointer'
            }}
            initial={{
              width: 0,
              opacity: 0
            }}
            animate={{
              width: getSectionWidth(section.id),
              opacity: 1
            }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1.0], // Improved cubic bezier curve for smoother motion
              delay: index * 0.1, // Slightly reduced delay for faster overall animation
            }}
            onClick={() => activeSection !== section.id && setActiveSection(section.id)}
          >
            {/* Vertical text for collapsed sections */}
            {activeSection !== section.id && (
              <div className={`absolute inset-0 flex items-center justify-center ${
                section.id === 'profile'
                  ? 'hover:bg-[#183B4E] hover:bg-opacity-20 hover:shadow-[inset_0_0_0_1px_#183B4E]'
                  : section.id === 'experience'
                    ? 'hover:bg-[#DDA853] hover:bg-opacity-20 hover:shadow-[inset_0_0_0_1px_#DDA853]'
                    : section.id === 'projects'
                      ? 'hover:bg-[#DDA853] hover:bg-opacity-20 hover:shadow-[inset_0_0_0_1px_#DDA853]'
                      : 'hover:bg-[#F3F3E0] hover:bg-opacity-20 hover:shadow-[inset_0_0_0_1px_#F3F3E0]'
              } transition-all duration-300`}>
                <motion.div
                  className="transform rotate-90 whitespace-nowrap"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  whileHover={{
                    scale: 1.05,
                    color: section.id === 'profile'
                      ? '#183B4E'
                      : section.id === 'experience'
                        ? '#DDA853'
                        : section.id === 'projects'
                          ? '#DDA853'
                          : '#F3F3E0'
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: index * 0.15 + 0.3 // Staggered delay for text appearance
                  }}
                >
                  <h2 className={`text-lg font-light flex items-center space-x-2 ${
                    section.id === 'profile' && theme !== 'dark' ? 'text-[#183B4E]' : 'text-white'
                  }`}>
                    <span className="font-normal">{section.englishLabel}</span>
                    <motion.span
                      initial={{ x: -5, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.5 }}
                    >→</motion.span>
                  </h2>
                </motion.div>
              </div>
            )}

            {/* Content for expanded section */}
            {activeSection === section.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut"
                }}
                className="h-full overflow-y-auto scrollbar-hide"
              >
                {getSectionContent(section.id)}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile Content */}
      <div className="md:hidden h-full overflow-hidden">
        <motion.div
          className="h-full overflow-y-auto scrollbar-hide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.2
          }}
          style={{
            backgroundColor: sections.find(s => s.id === activeSection)?.color
          }}
        >
          {getSectionContent(activeSection)}
        </motion.div>
      </div>
    </div>
  );
};

export default DrawerNavigation;
