# Using Build Swapping

Build swapping allows you to control when and how to use the optimized build and when to fall back to the original build.

## What is Build Swapping?

By default, Vite Postprocessing automatically updates your `index.html` to use the optimized build when the [Sustainable Browser](https://chromewebstore.google.com/detail/sustainable-browser/cdpbgdconlejjfnpifkpalpcfohmiolf) extension is detected.

## Understanding the Output

After running the postprocessing tool, you have two builds:

```
dist/
├── assets/
│   └── index-abc123.js          # Original build (self-contained)
├── mini/
│   ├── index-abc123.js          # Original build (self-contained)
└── index.html                    # Updated to use optimized build
```

### Original Build

The original build is a standard Vite output:

- ✅ Self-contained (all dependencies bundled)
- ✅ Works in all browsers
- ✅ No external dependencies
- ⚠️ Larger file size

**Use when:**
- No [Sustainable Browser](https://chromewebstore.google.com/detail/sustainable-browser/cdpbgdconlejjfnpifkpalpcfohmiolf) extension is installed

### Optimized Build

The optimized build uses externalized dependencies:

- ✅ Smaller file size
- ✅ Better caching potential
- ✅ Faster for returning users
- ⚠️ Requires import map support
- ⚠️ Needs CDN access

**Use when:**
- [Sustainable Browser](https://chromewebstore.google.com/detail/sustainable-browser/cdpbgdconlejjfnpifkpalpcfohmiolf) extension is installed
- Performance is critical