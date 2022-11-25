# Architecture

- [Architecture](#architecture)
  - [`docs`](#docs)
  - [`src`](#src)
    - [`assets`](#assets)
    - [`components`](#components)
    - [`containers`](#containers)
    - [`utils`](#utils)
    - [`vite.config.ts`](#viteconfigts)
    - [`main.tsx`](#maintsx)
    - [`index.scss`](#indexcsss)
  - [`index.html`](#indexhtml)

## `docs`

You found me! :wink:

### `index.html`

This one file actually _does_ get processed by our build system, allowing us to inject some information from Rollup, then add our JSX and SCSS.

## `src`

Where we keep all our source files.

### `assets`

This project manages assets files.

### `components`

Where most of the components in our app will live.

### `containers`

Where most of the components that interact with redux and sagas to get data from backend services will live.

### `utils`

These are utility functions you may want to share between many files in your application

### `vite.config.ts`

Contains app-specific metadata.

### `main.tsx`

The entry point to our app, were we create our React instance and mount it to the DOM.

## `index.scss`

Global styles that include css from other libraries like bootstrap