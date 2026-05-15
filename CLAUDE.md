# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal resume/portfolio website for Sebastián Giraudo (Senior Frontend Engineer). A single-page React application that renders resume data (experience, education, skills, languages) from static TypeScript data files.

## Commands

- **Dev server:** `pnpm dev`
- **Build:** `pnpm build` (runs `tsc -b && vite build`)
- **Lint:** `pnpm lint` (eslint with `--max-warnings=0`)
- **Preview production build:** `pnpm preview`

There is no test suite in this project.

## Architecture

**Stack:** React 19, TypeScript, Vite 7, Tailwind CSS v4, shadcn/ui (new-york style)

**Layout:** Two-column grid defined in `src/App.tsx` — sidebar (header, skills, languages) and main content (summary, experience, education).

**Data layer:** All resume content lives in `src/data/` as plain exported objects/arrays. Components import data directly — there is no fetching, routing, or state management.

**Component structure:**

- `src/components/resume/` — domain components that compose UI primitives with resume data
- `src/components/ui/` — shadcn/ui primitives (badge, button, card, separator)
- `ResumeCard` / `ResumeCardHeader` / `ResumeCardList` / `ResumeSection` are reusable layout building blocks used by each section

**Path alias:** `@/` maps to `./src/` (configured in both tsconfig and vite).

**Styling:** Tailwind v4 with CSS variables for theming (light/dark) defined in `src/index.css`. Uses `tw-animate-css` for animations.

**React Compiler:** Enabled via `babel-plugin-react-compiler` in the Vite config.

**Pre-commit hook:** Husky runs `lint-staged` which auto-fixes eslint and formats with Prettier on staged files.

**Deployment:** Vercel (includes `@vercel/analytics`).
