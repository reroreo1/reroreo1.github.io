import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Enterprise Web Application',
      description: 'Led the development of a scalable web application for managing business operations, featuring real-time data processing and analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
      image: '/project-placeholder-1.jpg',
      link: '#',
      github: '#',
      featured: true,
      stats: {
        users: '10K+',
        performance: '99.9%',
        uptime: '99.99%'
      }
    },
    {
      title: 'E-commerce Platform',
      description: 'Developed a full-featured e-commerce solution with inventory management, payment processing, and customer analytics.',
      technologies: ['Next.js', 'Express', 'PostgreSQL', 'AWS'],
      image: '/project-placeholder-2.jpg',
      link: '#',
      github: '#',
      featured: true,
      stats: {
        users: '50K+',
        performance: '98%',
        uptime: '99.95%'
      }
    },
    {
      title: 'Machine Learning Model',
      description: 'Built a predictive analytics model using machine learning algorithms to forecast business metrics with high accuracy.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      image: '/project-placeholder-3.jpg',
      link: '#',
      github: '#',
      featured: true,
      stats: {
        accuracy: '95%',
        trainingTime: '2h',
        datasetSize: '1M+'
      }
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Created an interactive dashboard for visualizing complex datasets, enabling stakeholders to make data-driven decisions.',
      technologies: ['D3.js', 'React', 'Python', 'Flask'],
      image: '/project-placeholder-4.jpg',
      link: '#',
      github: '#',
      featured: false,
      stats: {
        users: '5K+',
        performance: '99%',
        uptime: '99.9%'
      }
    }
  ];

  const allTechnologies = Array.from(new Set(projects.flatMap(project => project.technologies)));
  const featuredProjects = projects.filter(project => project.featured);

  const filteredProjects = selectedTech
    ? featuredProjects.filter(project => project.technologies.includes(selectedTech))
    : featuredProjects;

  return (
    <section className="py-20 px-4 bg-background dark:bg-dark-bg" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground dark:text-dark-text">Featured Projects</h2>
          <p className="text-secondary dark:text-dark-secondary max-w-2xl mx-auto">
            A selection of my recent work across web development and data science projects.
          </p>
        </motion.div>

        {/* Technology Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => setSelectedTech(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedTech === null
                ? 'bg-primary dark:bg-dark-primary text-white'
                : 'bg-accent dark:bg-dark-accent text-secondary dark:text-dark-secondary hover:bg-primary dark:hover:bg-dark-primary hover:text-white'
            }`}
          >
            All Projects
          </button>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedTech === tech
                  ? 'bg-primary dark:bg-dark-primary text-white'
                  : 'bg-accent dark:bg-dark-accent text-secondary dark:text-dark-secondary hover:bg-primary dark:hover:bg-dark-primary hover:text-white'
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 gap-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <motion.div
                className="w-full lg:w-1/2 relative h-80 rounded-xl overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-primary dark:bg-dark-bg w-full h-full flex items-center justify-center relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary dark:from-dark-bg dark:to-dark-accent opacity-80"
                    animate={{
                      backgroundPosition: hoveredProject === index ? ['0% 0%', '100% 100%'] : '0% 0%',
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                  />
                  <div className="relative z-10 p-8 text-white">
                    <div className="mb-4 inline-block bg-primary dark:bg-dark-primary bg-opacity-50 p-2 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-white">{project.title}</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="w-full lg:w-1/2"
                whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-dark-text">{project.title}</h3>
                <p className="text-secondary dark:text-dark-secondary mb-6 leading-relaxed">{project.description}</p>
                
                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-accent dark:bg-dark-accent rounded-lg">
                      <div className="text-2xl font-bold text-primary dark:text-dark-primary">{value}</div>
                      <div className="text-sm text-secondary dark:text-dark-secondary capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-accent dark:bg-dark-accent text-secondary dark:text-dark-secondary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 bg-primary dark:bg-dark-primary text-white px-6 py-3 rounded-full font-medium hover:bg-secondary dark:hover:bg-dark-secondary transition-colors"
                  >
                    View Project
                    <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 border border-primary dark:border-dark-primary text-foreground dark:text-dark-text px-6 py-3 rounded-full font-medium hover:bg-primary dark:hover:bg-dark-primary hover:text-white transition-colors"
                  >
                    GitHub
                    <FaGithub />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-primary dark:border-dark-primary text-foreground dark:text-dark-text px-6 py-3 rounded-full font-medium hover:bg-primary dark:hover:bg-dark-primary hover:text-white dark:hover:text-white transition-colors"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
