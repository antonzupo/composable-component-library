# Composable Component Library

A ShadCN component library built with TypeScript, Vite, and Tailwind CSS. Includes composable UI components and visual editing with Puck.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** – build and dev server
- **Tailwind CSS** – styling
- **Radix UI** – accessible primitives
- **class-variance-authority (CVA)** + **clsx** + **tailwind-merge** – component variants and class utilities
- **Puck** – visual page/component editor

## Getting started

### Prerequisites

- Node.js (v18+ recommended)
- npm, yarn, or pnpm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs the app in development mode at `http://localhost:5173`.

### Build

```bash
npm run build
```

Outputs to the `dist/` folder.

### Preview production build

```bash
npm run preview
```

## Project structure

- `src/components/` – UI components (atoms, ui)
- `src/puck/` – Puck editor config and sample data
- `src/lib/` – shared utilities
