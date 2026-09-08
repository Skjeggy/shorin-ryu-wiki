# Shorin-Ryu Wiki

En statisk wiki for Shorin-Ryu karate — bygget med
[Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com)
og [Pagefind](https://pagefind.app) for klient-sidesøk.
Innholdsspråket er **norsk bokmål (nb)**, og strukturen er forberedt
for senere engelsk versjon.

## Innhold

Wikien har følgende seksjoner (under `/src/content/`):

| Mappe                | Hva                                                  |
| -------------------- | ---------------------------------------------------- |
| `ranks/`             | Én side per kyu- og dan-grad                         |
| `kata/`              | Detaljerte kata-beskrivelser med bunkai              |
| `techniques/`        | Stillinger, slag, blokkeringer, spark                |
| `bunkai/`            | Frittstående bunkai-artikler                         |
| `randori/`           | Randori — prinsipper og anvendelser                  |
| `training-sessions/` | Strukturerte øktplaner                               |

## Komme i gang lokalt

Krever Node.js 20+.

```bash
# klone repoet
git clone https://github.com/<bruker>/<repo>.git
cd <repo>

# installere avhengigheter
npm install

# starte utviklingsserver på http://localhost:4321
npm run dev
```

Endre `.md`-filer under `src/content/` mens dev-serveren kjører — den
oppdaterer seg automatisk.

### Bygging og forhåndsvisning

```bash
# bygg statisk site + bygg Pagefind-indeks
npm run build

# server bygget site lokalt
npm run preview
```

`npm run build` kjører først `astro build` og deretter `pagefind --site
dist`, slik at søkeindeksen alltid er en del av artefaktet som
publiseres.

## Mappestruktur

```
/src/
  content/           # Markdown-innhold, organisert etter seksjon
  components/        # Astro-komponenter (Sidebar, Search, ...)
  layouts/           # Side- og artikkellayout
  pages/             # Astro-ruter
    nb/              # Norsk versjon
      index.astro
      [section]/
        index.astro
        [slug].astro
  i18n/              # Språkstrenger (nb.ts, en.ts)
  styles/            # Tailwind + global CSS

/public/
  images/            # Statiske bilder, refereres som /images/...

/.github/workflows/  # CI/CD (GitHub Pages-deploy)

astro.config.mjs
tailwind.config.mjs
```

## Distribusjon via GitHub Pages

Repoet inneholder en GitHub Actions-workflow i
`.github/workflows/deploy.yml` som ved hver push til `main`:

1. Kjører `npm ci`.
2. Bygger sitet med `npm run build` (Astro + Pagefind).
3. Publiserer `dist/` til GitHub Pages via offisiell action.

### Førstegangs oppsett av GitHub Pages

1. Push repoet til GitHub.
2. Gå til **Settings → Pages**.
3. Under *Build and deployment*, velg **GitHub Actions** som kilde.
4. Oppdater `site` og evt. `base` i [`astro.config.mjs`](astro.config.mjs):
   - For prosjektsider (`https://<bruker>.github.io/<repo>`):
     ```js
     site: 'https://<bruker>.github.io',
     base: '/<repo>',
     ```
   - For organisasjons- eller brukersider (`https://<bruker>.github.io/`):
     ```js
     site: 'https://<bruker>.github.io',
     base: '/',
     ```
5. Push til `main`. Workflowen bygger og publiserer automatisk.

## Internasjonalisering

UI-strenger er samlet i `src/i18n/nb.ts` (aktiv) og `src/i18n/en.ts`
(stub). Sider lever under `/nb/...`, og URL-strukturen tillater
`/en/...` å bli aktivert senere uten omstrukturering.

Hver artikkel har et `lang`-felt i frontmatter (standard `nb`). Når du
oversetter en artikkel, opprett en parallell `.md`-fil med
`lang: en` — innholdslagene plukker den opp automatisk.

## Bidra

Se [CONTRIBUTING.md](CONTRIBUTING.md) for hvordan du legger til
artikler, bilder og oversettelser.

## Lisens

Innholdet eies av forfatterne. Tilpass denne seksjonen før publisering.
