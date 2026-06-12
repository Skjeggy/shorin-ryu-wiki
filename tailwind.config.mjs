/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f7f5f1',
          100: '#ece7dc',
          200: '#d7cdba',
          300: '#b9aa8e',
          400: '#998769',
          500: '#7d6c52',
          600: '#5f5240',
          700: '#463d31',
          800: '#2c2620',
          900: '#1a1612',
        },
        accent: {
          DEFAULT: '#8b1d1d',
          dark: '#5e1212',
          light: '#d97a7a',
        },
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink.800'),
            '--tw-prose-headings': theme('colors.ink.900'),
            '--tw-prose-links': theme('colors.accent.DEFAULT'),
            '--tw-prose-bold': theme('colors.ink.900'),
            '--tw-prose-quotes': theme('colors.ink.700'),
            '--tw-prose-quote-borders': theme('colors.accent.DEFAULT'),
            maxWidth: '70ch',
          },
        },
        invert: {
          css: {
            '--tw-prose-body': theme('colors.ink.200'),
            '--tw-prose-headings': theme('colors.ink.100'),
            '--tw-prose-links': theme('colors.accent.light'),
            '--tw-prose-bold': theme('colors.ink.100'),
            '--tw-prose-quotes': theme('colors.ink.300'),
            '--tw-prose-quote-borders': theme('colors.accent.light'),
            '--tw-prose-bullets': theme('colors.ink.500'),
            '--tw-prose-counters': theme('colors.ink.400'),
            '--tw-prose-hr': theme('colors.ink.700'),
            '--tw-prose-captions': theme('colors.ink.400'),
            '--tw-prose-code': theme('colors.ink.100'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
