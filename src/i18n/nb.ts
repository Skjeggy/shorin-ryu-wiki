export const nb = {
  site: {
    title: 'Shorin-Ryu Wiki',
    tagline: 'En åpen kunnskapsbase om Shorin-Ryu karate',
    description:
      'Kunnskapsbase om Shorin-Ryu karate: rang, kata, teknikker, bunkai, Randori og treningsøkter.',
  },
  nav: {
    home: 'Hjem',
    ranks: 'Rang',
    kata: 'Kata',
    techniques: 'Teknikker',
    bunkai: 'Bunkai',
    randori: 'Randori',
    trainingSessions: 'Treningsøkter',
    about: 'Om stilen',
    search: 'Søk',
    skipToContent: 'Hopp til hovedinnhold',
    menu: 'Meny',
    closeMenu: 'Lukk meny',
    toggleTheme: 'Bytt mellom lyst og mørkt tema',
  },
  sections: {
    ranks: {
      title: 'Rang',
      description: 'Krav og pensum for hver kyu- og dan-grad.',
    },
    kata: {
      title: 'Kata',
      description: 'Detaljerte beskrivelser av kataene i Shorin-Ryu-pensumet.',
    },
    techniques: {
      title: 'Teknikker',
      description: 'Stillinger, slag, blokkeringer og spark.',
    },
    bunkai: {
      title: 'Bunkai',
      description: 'Anvendelser og tolkninger av bevegelsene i kata.',
    },
    randori: {
      title: 'Randori',
      description: 'Prinsipper og anvendelser av Randori i Shorin-Ryu.',
    },
    'training-sessions': {
      title: 'Treningsøkter',
      description: 'Strukturerte øktplaner for ulike nivåer og temaer.',
    },
    'ressurser': {
      title: 'Ressurser',
      description: 'Anbefalte YouTube-kanaler, bøker og eksterne ressurser om karate og Shorin-Ryu.',
    },
  },
  search: {
    placeholder: 'Søk i wikien …',
    noResults: 'Ingen treff',
    loading: 'Laster …',
    button: 'Søk',
  },
  article: {
    related: 'Relaterte artikler',
    tags: 'Stikkord',
    rank: 'Grad',
    section: 'Seksjon',
    onThisPage: 'På denne siden',
    keyPoints: 'Nøkkelpunkter',
    bunkai: 'Bunkai',
    requiredKata: 'Påkrevde kata',
    techniques: 'Teknikker',
    senseiNotes: 'Sensor-notater',
    backTo: 'Tilbake til',
    edit: 'Foreslå endring',
    lastUpdated: 'Sist oppdatert',
    previous: 'Forrige',
    next: 'Neste',
    sectionNav: 'Bla mellom artikler',
    noArticles: 'Ingen artikler ennå.',
  },
  home: {
    welcomeTitle: 'Velkommen til Shorin-Ryu Wiki',
    welcomeBody:
      'Denne wikien samler kunnskap om Shorin-Ryu karate: kata, teknikker, bunkai, Randori, gradskrav og strukturerte treningsøkter. Innholdet er ment som en levende ressurs som utøvere og instruktører kan bygge videre på.',
    exploreSections: 'Utforsk seksjoner',
    latestUpdates: 'Siste oppdateringer',
    getStarted: 'Kom i gang',
  },
  footer: {
    rights: 'Alle rettigheter forbeholdt.',
    builtWith: 'Bygget med Astro, Tailwind og Pagefind.',
  },
} as const;

export type UIStrings = typeof nb;
export default nb;
