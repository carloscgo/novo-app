# Languages and technologies

- [Languages and technologies](#languages-and-technologies)
  - [Vite](#vite)
  - [JavaScript](#javascript)
    - [React](#react)
    - [Redux (state management)](#redux-state-management)
    - [TypeScript FAQ](#typescript-faq)
  - [CSS](#css)
    - [SCSS](#scss)

## Vite

Vite is a fast frontend build tool. According to the [README](https://github.com/vitejs/vite/blob/main/README.md), it consists of two major parts:

A dev server that serves your source files over native ES modules, with rich built-in features and astonishingly fast Hot Module Replacement (HMR).
A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

## JavaScript

Our JavaScript is compiled by Babel, using the [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react) as a base configuration.

If you're new to features such as `const`, `let`, and `=>` (arrow functions), take some time to read about the following features in Babel's ES2015 guide:

- [Arrow functions](https://babeljs.io/learn-es2015/#ecmascript-2015-features-arrows-and-lexical-this)
- [Template literals](https://babeljs.io/learn-es2015/#ecmascript-2015-features-template-strings)
- [Destructuring](https://babeljs.io/learn-es2015/#ecmascript-2015-features-destructuring)
- [Spread operator](https://babeljs.io/learn-es2015/#ecmascript-2015-features-default-rest-spread)
- [`let`/`const`](https://babeljs.io/learn-es2015/#ecmascript-2015-features-let-const)
- [`for`...`of`](https://babeljs.io/learn-es2015/#ecmascript-2015-features-iterators-for-of)

### React

Since React is such a huge part of our app, I strongly recommend everyone read through at least the _Essentials_ of [React's guide](https://reactjs.org/docs/getting-started.html).

### Redux (state management)

To wrap your head around our state management, I recommend reading through [those docs](https://redux.js.org/introduction/getting-started), starting at _What is Getting Started with Redux_ and stopping before _Core Concepts_.

### TypeScript FAQ

TypeScript is a superset of JavaScript. It is just one of NPM library, but it provides an original compiler.

When you use TypeScript with React, you can write JSX with TypeScript, called TSX. Then you can develop views written by Type-Safe template.

## CSS

For our styles, we're using SCSS and CSS modules.

### SCSS

SCSS is a superset of CSS, meaning any valid CSS is _also_ valid SCSS. This allows you to easily copy properties from other sources, without having to reformat it. It also means you can stick to writing the CSS you're still comfortable with while you're learning to use more advanced SCSS features.

I specifically recommend reading about:

- [Variables](http://sass-lang.com/guide#topic-2)
- [Nesting](http://sass-lang.com/guide#topic-3)
- [Operators](http://sass-lang.com/guide#topic-8)

Just those features cover at least 90% of use cases.
