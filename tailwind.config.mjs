import animations from '@midudev/tailwind-animations';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ancg: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d4d9e3',
          300: '#aeb9cb',
          400: '#8292ae',
          500: '#627595',
          600: '#4e5e7b',
          700: '#404c64',
          800: '#384154',
          900: '#323948',
          950: '#1f232d',
        },
      },
    },
  },
  plugins: [animations],
};
