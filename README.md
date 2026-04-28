# AKU ERP Landing Page

Single-page marketing landing page for AKU ERP, built with Astro.

## Tech Stack

- Astro 6
- Plain Astro components
- Global CSS for shared landing styles

## Local Development

From the project app directory:

```bash
cd app
npm install
npm run dev
```

Open `http://localhost:4321`.

## Build and Preview

```bash
cd app
npm run build
npm run preview
```

## Project Structure

```text
app/
├── src/
│   ├── components/
│   │   ├── Welcome.astro
│   │   └── landing/
│   │       ├── NavBar.astro
│   │       ├── HeroSection.astro
│   │       ├── ProblemSection.astro
│   │       ├── HowItWorksSection.astro
│   │       ├── SolutionSection.astro
│   │       ├── MarketSection.astro
│   │       ├── WhyNowSection.astro
│   │       ├── CompetitionSection.astro
│   │       ├── TeamSection.astro
│   │       ├── CtaFooterSection.astro
│   │       └── LandingInteractions.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── landing.css
└── package.json
```

## SOLID-Oriented Component Design

- **Single Responsibility:** each section has its own Astro component.
- **Open/Closed:** section components can be reordered or replaced in `Welcome.astro` without editing others.
- **Dependency Inversion (practical UI form):** page composition depends on section interfaces (component boundaries), not one monolithic file.
- **Separation of Concerns:** presentation markup is split by section, behavior is isolated in `LandingInteractions.astro`, shared styling in `src/styles/landing.css`.
