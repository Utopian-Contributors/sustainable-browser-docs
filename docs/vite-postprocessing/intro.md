# Introduction

The Vite Postprocessing tool is a build optimization utility that automatically creates optimized builds and import maps for your Vite projects.

## What is Vite Postprocessing?

Vite Postprocessing is a postbuild script that analyzes your Vite build output and:

- **Creates optimized builds** by externalizing common libraries
- **Generates import maps** for supported libraries
- **Reduces bundle size** by removing duplicated dependencies
- **Improves load performance** by leveraging the [Sustainable Browser](https://chromewebstore.google.com/detail/sustainable-browser/cdpbgdconlejjfnpifkpalpcfohmiolf) extension

## How It Works

The tool runs automatically after your Vite build completes:

1. **Analyzes your build** - Scans the compiled JavaScript for common libraries
2. **Identifies externalizable libraries** - Detects libraries that can be served from CDNs
3. **Generates import maps** - Creates an import map pointing to CDN URLs that are saved inside the [Sustainable Browser](https://chromewebstore.google.com/detail/sustainable-browser/cdpbgdconlejjfnpifkpalpcfohmiolf) extension
4. **Generates build swapping** - Generates an entry point that automatically falls back to the regular build if the extension is not detected.

## Key Benefits

* 🎯 **Automatic Optimization**
No manual configuration needed - the tool automatically identifies which libraries can be externalized.

* 📦 **Smaller Bundle Sizes**
By externalizing popular libraries, your main bundle becomes significantly smaller.

* 🚀 **Faster Load Times**
Users can benefit from browser caching and CDN performance for common libraries.

* 🔧 **Zero Configuration**
Works out of the box with sensible defaults - just add it to your postbuild script.

* 🔄 **Build Swapping**
The tool creates an alternative optimized build that you can easily swap in for production.

## Supported Libraries

The tool can automatically externalize and create import maps for popular libraries including:

- React & React DOM
- Framer-motion
- Lucide React
- Tailwind-merge
- And many more popular npm packages in the future

## When to Use This Tool

### Ideal For:

- ✅ Production builds where bundle size matters
- ✅ Applications using popular, stable libraries
- ✅ Projects where users may already have the [Sustainable Browser](https://chromewebstore.google.com/detail/sustainable-browser/cdpbgdconlejjfnpifkpalpcfohmiolf) extension installed

### Not Recommended For:

- ⚠️ Development builds (adds unnecessary complexity)
- ⚠️ Projects requiring very specific library versions

## How It Compares

### Traditional Vite Build
- Bundles all dependencies
- Larger file sizes

### Vite Postprocessing
- Externalizes common libraries
- Smaller main bundle
- Leverages the [Sustainable Browser](https://chromewebstore.google.com/detail/sustainable-browser/cdpbgdconlejjfnpifkpalpcfohmiolf) extension
- Better for production

## Next Steps

Ready to get started? Check out the [Installation Guide](./installation.md) to add Vite Postprocessing to your project.
