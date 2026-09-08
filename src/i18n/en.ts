// English translations — stub for future bilingual support.
// Mirrors the structure of `nb.ts`. Strings are placeholders for now.

import type { UIStrings } from './nb';

export const en: UIStrings = {
  site: {
    title: 'Shorin-Ryu Wiki',
    tagline: 'An open knowledge base on Shorin-Ryu karate',
    description:
      'Knowledge base for Shorin-Ryu karate: ranks, kata, techniques, bunkai, Randori and training sessions.',
  },
  nav: {
    home: 'Home',
    ranks: 'Ranks',
    kata: 'Kata',
    techniques: 'Techniques',
    bunkai: 'Bunkai',
    randori: 'Randori',
    trainingSessions: 'Training sessions',
    about: 'About the style',
    search: 'Search',
    skipToContent: 'Skip to main content',
    menu: 'Menu',
    closeMenu: 'Close menu',
    toggleTheme: 'Toggle light and dark theme',
  },
  sections: {
    ranks: {
      title: 'Ranks',
      description: 'Requirements and syllabus for each kyu and dan grade.',
    },
    kata: {
      title: 'Kata',
      description: 'Detailed descriptions of the kata in the Shorin-Ryu syllabus.',
    },
    techniques: {
      title: 'Techniques',
      description: 'Stances, strikes, blocks and kicks.',
    },
    bunkai: {
      title: 'Bunkai',
      description: 'Applications and interpretations of the movements in kata.',
    },
    randori: {
      title: 'Randori',
      description: 'Principles and applications of Randori within Shorin-Ryu.',
    },
    'training-sessions': {
      title: 'Training sessions',
      description: 'Structured session plans for different levels and themes.',
    },
    'ressurser': {
      title: 'Resources',
      description: 'Recommended YouTube channels, books and external resources on karate and Shorin-Ryu.',
    },
  },
  search: {
    placeholder: 'Search the wiki …',
    noResults: 'No results',
    loading: 'Loading …',
    button: 'Search',
  },
  article: {
    related: 'Related articles',
    tags: 'Tags',
    rank: 'Rank',
    section: 'Section',
    onThisPage: 'On this page',
    keyPoints: 'Key points',
    bunkai: 'Bunkai',
    requiredKata: 'Required kata',
    techniques: 'Techniques',
    senseiNotes: 'Sensei notes',
    backTo: 'Back to',
    edit: 'Suggest an edit',
    lastUpdated: 'Last updated',
    previous: 'Previous',
    next: 'Next',
    sectionNav: 'Browse articles',
    noArticles: 'No articles yet.',
  },
  home: {
    welcomeTitle: 'Welcome to the Shorin-Ryu Wiki',
    welcomeBody:
      'This wiki gathers knowledge about Shorin-Ryu karate: kata, techniques, bunkai, Randori, grading requirements and structured training sessions. The content is intended as a living resource that practitioners and instructors can build on.',
    exploreSections: 'Explore sections',
    latestUpdates: 'Latest updates',
    getStarted: 'Get started',
  },
  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with Astro, Tailwind and Pagefind.',
  },
};

export default en;
