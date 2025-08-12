import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-accent dark:bg-dark-accent" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground dark:text-dark-text">Get In Touch</h2>
            <p className="text-lg text-secondary dark:text-dark-secondary mb-8">
              Interested in working together or have a question about my work? I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4 p-3">
              <div className="flex items-center gap-4">
                <div className="bg-primary dark:bg-dark-primary text-white p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground dark:text-dark-text">Email</h3>
                  <a href="mailto:contact@example.com" className="text-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-dark-primary transition-colors">
                    contact@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary dark:bg-dark-primary text-white p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground dark:text-dark-text">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/rezzahra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-dark-primary transition-colors"
                  >
                    linkedin.com/in/rezzahra
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary dark:bg-dark-primary text-white p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground dark:text-dark-text">Location</h3>
                  <p className="text-secondary dark:text-dark-secondary">Remote / Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card dark:bg-dark-bg p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-foreground dark:text-dark-text">Send Me a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary dark:text-dark-secondary mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-border dark:border-dark-accent bg-background dark:bg-dark-bg text-foreground dark:text-dark-text rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary dark:text-dark-secondary mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-border dark:border-dark-accent bg-background dark:bg-dark-bg text-foreground dark:text-dark-text rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary focus:border-transparent"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary dark:text-dark-secondary mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-border dark:border-dark-accent bg-background dark:bg-dark-bg text-foreground dark:text-dark-text rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary dark:bg-dark-primary text-white px-6 py-3 rounded-md font-medium hover:bg-secondary dark:hover:bg-dark-secondary transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
