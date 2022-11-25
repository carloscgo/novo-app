[![Netlify Status](https://api.netlify.com/api/v1/badges/2aabd17a-5e38-4ff1-bc32-d7545cc0addf/deploy-status)](https://app.netlify.com/sites/novo-app-cc/deploys)

# Novo App

This template should help get you started developing with React and TypeScript in Vite.

# Why use Vite?

As a modern day build tool Vite has a variety of different responsibilities ranging from how to work with styles to handling ES modules and everything in between. In the course, we cover all such topics including:

- Working with Styles
  - CSS in SFCs
  - CSS stylesheets
  - CSS pre-processors
  - and CSS modules
- Static Assets
  - Importing images
  - Using new URL to get public paths
  - In-lining small images with base64 encoding
- JSON
  - Importing JSON as JavaScript objects
  - Importing a root field as a named export
- Glob Imports
  - Dynamically importing files based on a glob pattern
  - Importing asynchronously with a dynamic imports
  - Importing synchronously with static imports
- TypeScript
  - Adding TypeScript to an existing Vite/Vue project
  - Using Typescript in SFC's
- Vite Config
  - Setting up an @ import alias
  - And a sampling of other Vite config options

## Contents

- [Requirements](#requirements)
- [Setup and Development](#setup-and-development)
- [Linting and Formatting](#linting-and-formatting)
- [Run Test](#run-test)
- [Building and deploying to production](#building-and-deploying-to-production)
- [Environment Variables](#environment-variables)

## Documentation

This project includes a `docs` folder with more details on:

1. [Architecture](docs/architecture.md)
1. [Languages and technologies](docs/tech.md)
1. [State management](docs/state.md)
1. [Tests](docs/tests.md)
1. [Linting and formatting](docs/linting.md)
1. [Building and deploying to production](docs/production.md)
1. [Troubleshooting](docs/troubleshooting.md)

## Requirements

- [nodejs ^18.12.0](https://nodejs.org)
- [yarn ^1.22.19](https://yarnpkg.com/)

## Setup and development

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)

## Installation

```bash
# Install dependencies from package.json
yarn install
```

## Dev server

```bash
# Launch the dev server
yarn dev
```

## Linting and formatting

```bash
# Lint all files, fixing many violations automatically
yarn lint
```

## Run Test

```bash
# Run all tests
yarn test

## Building and deploying to production

```bash
# Build for production with minification
yarn build
```

```bash
# Preview of build 
yarn preview
```

## Environment Variables

May be defined on a `.env` file or direct on OS

| Name                         | Description                   | Default           |
| ---------------------------- | ----------------------------- | ----------------- |
| `VITE_APP_NAME`              | The application name          | `Nova App`        |
| `VITE_GC_KEY`                | Google Cloud API KEY          |                   |
| `VITE_FB_KEY`                | Firebase API KEY              |                   |
| `VITE_FB_DATABASEURL`        | Firebase Database URL         |                   |
| `VITE_FB_AUTHDOMAIN`         | Firebase Auth domain          |                   |
| `VITE_FB_PROJECTID`          | Firebase Project ID           |                   |
| `VITE_FB_STORAGEBUCKET`      | Firebase Storage Bucket       |                   |
| `VITE_FB_MESSAGINGSENDERID`  | Firebase Messaging SenderId   |                   |
| `VITE_FB_APPID`              | Firebase APP ID               |                   |
