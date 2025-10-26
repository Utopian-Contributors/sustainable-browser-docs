# Installation

This guide will walk you through installing and setting up the Vite Postprocessing tool in your project.

## Prerequisites

Before you begin, make sure you have:

- A Vite-based project
- Node.js 16+ installed
- npm or yarn package manager

## Step 1: Install the Package

Install the Vite Postprocessing tool as a development dependency:

```bash
npm install --save-dev vite-postprocessing
```

or with yarn:

```bash
yarn add -D vite-postprocessing
```

## Step 2: Add to package.json

Add the postprocessing script to your `package.json` as a **postbuild** hook:

```json
{
  "name": "your-project",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "postbuild": "vite-postprocessing"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "vite-postprocessing": "^1.0.0"
  }
}
```

:::tip
The `postbuild` script runs automatically after `npm run build` completes. You don't need to run it manually!
:::

## Step 3: Build Your Project

Run your regular build command:

```bash
npm run build
```

or with yarn:

```bash
yarn build
```

The postprocessing will run automatically after the Vite build completes.

## Using Build Swapping

See the [Using Build Swapping](./using-build-swapping.md) guide.

## Configuration

The tool works with zero configuration by default, but you can customize its behavior. See the [Configuration Guide](./configuration.md) for advanced options.
