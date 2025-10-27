# Installation

This guide will help you install the extension in Chrome and learn about what it does.

## What is the [Sustainable Browser](https://chromewebstore.google.com/detail/sustainable-browser/cdpbgdconlejjfnpifkpalpcfohmiolf) Extension?

The [Sustainable Browser](https://chromewebstore.google.com/detail/sustainable-browser/cdpbgdconlejjfnpifkpalpcfohmiolf) Extension is a tool that redirects requests from esm.sh CDN to locally bundled JavaScript dependencies. This approach:

- 🌱 Reduces bandwidth usage through serving dependencies locally
- 🚀 Improves page load times for frequently used libraries
- 📦 Uses pre-bundled dependencies (no dynamic caching)

## How It Works

The extension uses Chrome's declarativeNetRequest API to:

1. **Intercept requests** to `esm.sh` URLs
2. **Redirect statically** to the [Sustainable Browser](https://chromewebstore.google.com/detail/sustainable-browser/cdpbgdconlejjfnpifkpalpcfohmiolf) extension
3. **Serve from read-only storage** - dependencies are pre-bundled with the extension

:::info
The extension does NOT dynamically cache URLs or download dependencies at runtime. All dependencies are pre-bundled with the extension package.
:::

## Prerequisites

Before you begin, make sure you have:

- **Google Chrome** or **Chromium-based browser** (Version 88+)

## Installation

Install the extension from the [chrome web store](https://chromewebstore.google.com/detail/sustainable-browser/cdpbgdconlejjfnpifkpalpcfohmiolf)

You should now see the Sustainable Browser Extension in your extensions list!

## Verifying Installation

To verify that the extension is working correctly:

1. **Click the extension icon** in your browser toolbar
2. You should see the extension popup
3. **Visit a test page** that uses esm.sh libraries
4. Check the network activity - you should see redirected requests!

### Test Example

Create a simple HTML file to test:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Extension Test</title>
</head>
<body>
    <h1>Testing Sustainable Browser Extension</h1>
    <div id="root"></div>
    
    <script type="module">
        // This request should be redirected by the extension
        import React from 'https://esm.sh/react@18';
        console.log('React loaded:', React);
        
        document.getElementById('root').textContent = 
            'Extension working! Check the popup for redirect statistics.';
    </script>
</body>
</html>
```

Open this file in Chrome and check the Network tab (the request should show as redirected)

## Understanding the Extension

### Static Redirects

The extension uses **static redirect rules** configured via `declarativeNetRequest`. When a page requests:

```
https://esm.sh/react@18.2.0
```

The extension automatically redirects to:

```
chrome-extension://<extension-id>/dependencies/react@18.2.0_123hash.js
```

### Read-Only Storage

All dependencies are **pre-bundled** with the extension in a read-only storage structure:

```
extension/
└── dependencies/
      ├── react@18.2.0_123hash.js
      ├── framer-motion@18.2.0_123hash.js
      └── vue@3.3.4_123hash.js
```

:::warning
The extension does NOT download or cache new dependencies at runtime. Only the pre-bundled dependencies can be served.
:::

## What's Next?

Now that you have the extension installed and running, you can:

- [Learn how to build for the extension](/docs/vite-postprocessing/using-build-swapping.md)

## Troubleshooting

If you encounter issues during installation:

- **No redirects happening**: 
  - Ensure the extension is enabled on `chrome://extensions/`
  - Check that the website is actually using supported esm.sh URLs
  - Open DevTools Network tab to verify requests are being made
