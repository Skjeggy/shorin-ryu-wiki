# Bidra til Shorin-Ryu Wiki

Takk for at du vil bidra! Denne guiden viser hvordan du legger til en
ny artikkel, redigerer en eksisterende, og laster opp bilder.

## Legge til en ny artikkel

1. **Finn riktig seksjonsmappe** under `src/content/`:

   | Seksjon              | Mappe                        |
   | -------------------- | ---------------------------- |
   | Rang (kyu / dan)     | `src/content/ranks/`         |
   | Kata                 | `src/content/kata/`          |
   | Teknikker            | `src/content/techniques/`    |
   | Bunkai (frittstående)| `src/content/bunkai/`        |
   | Ridori               | `src/content/ridori/`        |
   | Treningsøkter        | `src/content/training-sessions/` |

2. **Opprett en ny `.md`-fil**. Filnavnet blir URL-slug, så bruk små
   bokstaver, bindestreker, ingen norske spesialtegn. Eksempel:
   `pinan-yondan.md`.

3. **Legg inn frontmatter** øverst i filen:

   ```yaml
   ---
   title: "Pinan Yondan"
   section: kata
   order: 40
   lang: nb
   description: "Kort, beskrivende ingress på 1–2 setninger."
   tags: ["pinan", "kata"]
   related:
     - "ranks/3-kyu"
     - "kata/pinan-sandan"
   keyPoints:
     - "Nøkkelpunkt 1"
     - "Nøkkelpunkt 2"
   updated: 2026-05-31
   ---
   ```

4. **Skriv selve artikkelen** i Markdown under frontmatter. Bruk
   `##` for hovedseksjoner, `###` for underseksjoner. Hold seg til
   norsk bokmål.

5. **Test lokalt** med `npm run dev` og åpne den nye siden:
   `http://localhost:4321/nb/<seksjon>/<filnavn-uten-md>/`.

## Frontmatter-felter

Alle artikler støtter disse feltene (se
[`src/content/config.ts`](src/content/config.ts) for full skjema):

| Felt          | Påkrevd | Hva                                                |
| ------------- | ------- | -------------------------------------------------- |
| `title`       | ja      | Artikkelens tittel                                 |
| `section`     | ja      | Seksjons-ID (`kata`, `ranks`, …)                   |
| `description` | nei     | Kort ingress, vist på listesider                   |
| `lang`        | nei     | Språk, standard `nb`                               |
| `tags`        | nei     | Liste med stikkord                                 |
| `related`     | nei     | Liste over relaterte artikler (se nedenfor)        |
| `image`       | nei     | Sti til bilde i `/public/images/`                  |
| `order`       | nei     | Sortering i sidebar (lavest først)                 |
| `updated`     | nei     | Sist oppdatert (ISO-dato)                          |

### Seksjonsspesifikke felter

- **`ranks/`**: `rank` (påkrevd), `requiredKata`, `techniques`, `senseiNotes`.
- **`kata/`**: `keyPoints`, `origin`.
- **`techniques/`**: `category` (`stillinger` / `slag` / `blokkeringer` / `spark` / `annet`).
- **`bunkai/`**: `kata` (referanse).
- **`training-sessions/`**: `duration`, `level`, `focus`.

## Relaterte artikler

Feltet `related` kobler artikler sammen og vises i en seksjon nederst
på artikkelen. Bruk formatet `seksjon/slug`:

```yaml
related:
  - "kata/pinan-shodan"
  - "techniques/dachi"
```

Bare `slug` fungerer også, men `seksjon/slug` er mer presist hvis to
artikler i ulike seksjoner deler navn.

## Bilder

1. Lagre bildet i `public/images/`. Lag gjerne undermapper per seksjon:
   `public/images/kata/pinan-shodan-step1.jpg`.
2. Referer fra Markdown:
   ```markdown
   ![Pinan Shodan, første steg](/images/kata/pinan-shodan-step1.jpg)
   ```
3. Eller via frontmatter `image:`-feltet for å vise det som hero-bilde
   øverst i artikkelen:
   ```yaml
   image: /images/kata/pinan-shodan-hero.jpg
   ```

Filtyper: `.jpg`, `.png`, `.webp`, `.svg`. Optimaliser store bilder før
opplasting.

## Stil og språk

- Skriv på **norsk bokmål**.
- Bruk **du-form**, vennlig og direkte tone.
- Karate-termer på japansk skrives i kursiv første gang de
  introduseres: *zenkutsu-dachi*.
- Bruk **fete** for begreper som forklares, *kursiv* for fremmedord.
- Bunkai-seksjoner skal alltid vise minst ett konkret eksempel —
  unngå abstrakte beskrivelser uten anvendelse.

## Engelsk versjon (senere)

For å oversette en artikkel:

1. Opprett en parallell fil med samme slug i samme mappe.
2. Sett `lang: en` i frontmatter.
3. Plasser den under `src/content/<seksjon>/`.
4. URL-en blir automatisk `/en/<seksjon>/<slug>/`.

URL-strukturen er allerede klargjort, men `/en/`-rutene aktiveres
først når engelske ruter legges til i `src/pages/`. Gi beskjed i en
issue om du vil sette i gang oversettelse.

## Pull request-sjekkliste

Før du sender en PR:

- [ ] Artikkelen har korrekt frontmatter (`title`, `section`, `lang`).
- [ ] Lokal `npm run dev` viser siden uten feil.
- [ ] `npm run build` fullfører uten advarsler.
- [ ] Bilder ligger i `public/images/` og er optimalisert.
- [ ] Relaterte artikler er lagt til hvor det passer.
- [ ] Stavekontroll er kjørt.

Takk for bidraget!
