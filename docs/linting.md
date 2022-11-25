# Linting & formatting

- [Languages](#languages)
- [Scripts](#scripts)
  - [Terminal](#terminal)
- [Configuration](#configuration)
- [FAQ](#faq)

This project uses ESLint and Prettier to catch errors and avoid bikeshedding by enforcing a common code style.

## Languages

- **JavaScript** is linted by ESLint and formatted by Prettier

## Scripts

There are a few different contexts in which the linters run.

### Terminal

```bash
# Lint all files, fixing many violations automatically
yarn lint
```

See `package.json` to update.

## Configuration

This boilerplate ships with opinionated defaults, but you can edit each tools configuration in the following config files:

- [ESLint](https://eslint.org/docs/user-guide/configuring)
  - `.eslintrc`
  - `.eslintignore`
- [Prettier](https://prettier.io/docs/en/configuration.html)
  - `.prettierrc.json`

## FAQ

**So many configuration files! Why not move more of this to `package.json`?**

- Moving all possible configs to `package.json` can make it _really_ packed, so that quickly navigating to a specific config becomes difficult.
- When split out into their own file, many tools provide the option of exporting a config from JS. I do this wherever possible, because dynamic configurations are simply more powerful, able to respond to environment variables and much more.
