import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-4 bg-background dark:bg-dark-bg" id="about">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-foreground dark:text-dark-text">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-accent dark:bg-dark-accent rounded-lg p-8 h-full">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary dark:bg-dark-primary rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground dark:text-dark-text">Lead Developer</h3>
              </div>
              <p className="text-secondary dark:text-dark-secondary">
                Currently leading development at OS Websolutions B.V., I focus on building scalable and
                maintainable web applications with modern technologies.
              </p>
            </div>
          </div>

          <div className="bg-accent dark:bg-dark-accent rounded-lg p-8 h-full">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary dark:bg-dark-primary rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground dark:text-dark-text">Data Science Student</h3>
              </div>
              <p className="text-secondary dark:text-dark-secondary">
                Passionate about machine learning and data science, I&apos;m constantly learning and applying new techniques to solve complex problems.
              </p>
            </div>
          </div>

          <div className="bg-accent dark:bg-dark-accent rounded-lg p-8 h-full">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary dark:bg-dark-primary rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground dark:text-dark-text">Problem Solver</h3>
              </div>
              <p className="text-secondary dark:text-dark-secondary">
                I approach challenges with analytical thinking and creativity, finding elegant solutions to complex technical problems.
              </p>
            </div>
          </div>

          <div className="bg-accent dark:bg-dark-accent rounded-lg p-8 h-full">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary dark:bg-dark-primary rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground dark:text-dark-text">Team Collaborator</h3>
              </div>
              <p className="text-secondary dark:text-dark-secondary">
                I believe in the power of collaboration and clear communication, working effectively with cross-functional teams to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
