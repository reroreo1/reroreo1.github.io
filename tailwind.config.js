/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-radley)', 'serif'],
      serif: ['var(--font-radley)', 'serif'],
      mono: ['var(--font-geist-mono)', 'monospace'],
    },
    extend: {
      colors: {
        // Custom color palette
        'cream': '#F3F3E0',
        'blue': '#27548A',
        'navy': '#183B4E',
        'gold': '#DDA853',

        // Light mode colors
        'light-bg': '#F3F3E0',
        'light-text': '#183B4E',
        'light-primary': '#27548A',
        'light-secondary': '#183B4E',
        'light-accent': '#DDA853',
        'light-muted': 'rgba(39, 84, 138, 0.5)',

        // Dark mode colors
        'dark-bg': '#183B4E',
        'dark-text': '#F3F3E0',
        'dark-primary': '#27548A',
        'dark-secondary': '#F3F3E0',
        'dark-accent': '#DDA853',
        'dark-muted': 'rgba(243, 243, 224, 0.5)',
      },
      fontFamily: {
        'radley': ['var(--font-radley)', 'serif'],
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'geist': ['var(--font-geist-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
