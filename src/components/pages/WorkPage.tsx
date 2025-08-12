"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface WorkPageProps {
  onNavigate: (page: string) => void;
}

const WorkPage = ({ onNavigate }: WorkPageProps) => {
  const accentColor = '#27548A'; // Blue as accent for Work page

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce solution with real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/project1.jpg" // Replace with actual project image
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with filtering capabilities.",
      technologies: ["D3.js", "React", "Python"],
      image: "/project2.jpg" // Replace with actual project image
    },
    {
      title: "Machine Learning Model",
      description: "Predictive analytics model for customer behavior analysis.",
      technologies: ["Python", "TensorFlow", "Pandas"],
      image: "/project3.jpg" // Replace with actual project image
    }
  ];

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-cream dark:bg-navy">
      <motion.div
        className="w-full max-w-6xl mx-auto px-6 md:px-12 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-4xl md:text-5xl font-light mb-8 text-blue dark:text-blue">
          工作 <span className="text-navy dark:text-cream">Work</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
            >
              <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <span style={{ color: accentColor }}>Image Placeholder</span>
                </div>
                {/* Uncomment when you have actual images */}
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                /> */}
              </div>

              <h3 className="text-xl font-medium mb-2 text-blue dark:text-blue">{project.title}</h3>
              <p className="text-base mb-4 text-navy dark:text-cream">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 rounded-full text-xs bg-gold bg-opacity-10 text-gold dark:bg-gold dark:bg-opacity-20 dark:text-gold">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <button
            onClick={() => onNavigate('contact')}
            className="inline-block border-b-2 pb-1 text-lg hover:pb-2 transition-all duration-300"
            style={{ borderColor: accentColor, color: accentColor }}
          >
            Get In Touch →
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WorkPage;
