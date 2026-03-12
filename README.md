# Composable Component Library

ShadCN UI components wired for the [Puck](https://puckeditor.com/) editor. Built with TypeScript, Vite, and Tailwind CSS; composable wrappers and Puck configs let you edit pages and components visually.

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

| Path | Description |
|------|-------------|
| `src/components/<Name>/` | Composable components: `<Name>.tsx` (presentation) and `puck.tsx` (Puck config) |
| `src/components/ui/` | UI primitives (buttons, inputs, dialogs, etc.) used by composables |
| `src/puck/` | Puck editor config, component categories, types, and sample data |
| `src/lib/` | Shared utilities (e.g. `cn`) |
| `src/data/` | Mock/fixture data and table definitions |

Component props are defined centrally in `src/puck/types.ts` as the `Components` type; each composable uses `Components["Name"]` for its props.

## Components

Components are grouped for the Puck editor as:

- **Atoms** – Button, Badge, Input, Checkbox, Avatar, Typography, Skeleton, Spinner, etc.
- **Molecules** – Accordion, Card, Dialog, Tabs, DataTable, DropdownMenu, DatePicker, etc.
- **Organisms** – HeroCard, Section
- **Layout** – Flex, Grid, GridItem, Field, Fieldset, Resizable, ScrollArea, Space

Each composable supports a `className` prop for style overrides and is wired for visual editing in Puck.
