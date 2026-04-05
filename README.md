# svakili.github.io

First version of a personal Astro site with a minimal home page and a public Books section.

## Requirements

- Node `22.12.0` or newer
- npm

If your local machine is on an older Node release, upgrade first before running Astro commands.

## Local development

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

## Deploy

Push `main` to the GitHub repository named `svakili.github.io`. The included GitHub Actions workflow builds the Astro site and deploys `dist/` to GitHub Pages.

For a future custom domain such as `soheylvakili.com`, add the domain in the repository Pages settings and then commit the generated `CNAME` file only when you are ready to switch.
