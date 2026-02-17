# me-learning-react

## Setup

```
npm create vite@latest

npm install --save-dev eslint prettier

npm install --save-dev eslint-config-prettier eslint-plugin-prettier

npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks

npm install --save-dev husky # runs scripts before commit
```

## Conventions

1. Name your `function` components in PascalCase. Use function components instead of class components.
2. Use `handle` prefix for event handlers.
3. Use `on` prefix for callbacks.

### Info

- React is a library. Angular and Vue are frameworks.

- JSX: JavaScript XML.
  It is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.
  Use https://babeljs.io/repl to see how JSX is transpiled to JavaScript.

- Only 1 element can be returned from a component.
  If you need to return multiple elements, wrap them in a `<></>`, `Fragment`or `div`.

- `{}` is used to embed JavaScript expressions in JSX.

- `{condition && Component}` is a common pattern to render Component if condition is met.

- `className` is used instead of `class` in JSX.

- `onClick` is used instead of `onclick` in JSX.

- Props are the inputs to a component. `children` is a special property that allows you to pass elements to a component.

- State is the internal state of a component. When changed via the updater function, it triggers re-rendering.

- `import { ReactNode } from "react";`:
  `react` is a module that exports `ReactNode` type.

- `import type { MouseEvent } from "react";`
  This is used to import type information only for static analysis.

- `import React from "react";`
  Imports the default export from the module.

### Dev Tools

- Install React Developer Tools extension for Chrome.
- Install React/Redux/React-Native extension for VS Code.
