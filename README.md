#Re-isaac-media

A modern photography portfolio redesign featuring glassmorphism, soft blur effects, and a clean, immersive layout. Enhanced responsiveness and refined visuals create a smooth, cinematic experience that highlights content with depth and elegance.

## Deployment notes

This is a static site. Modal and gallery deep links use query strings (for example, `?modal=booking`) so a direct visit or refresh serves the site entry point without requiring host-specific SPA rewrites. Legacy pretty URLs have static entry pages for GitHub Pages and redirects in `vercel.json` for Vercel. Keep new modal links on the query-string pattern.

The live custom domain currently responds through GitHub Pages (the live response includes GitHub Pages headers, and `CNAME` names the custom domain). GitHub Pages does not apply `vercel.json`, so static route entry pages are provided for legacy pretty URLs such as `/booking` and `/gallery`. Keep these pages, their destinations, and the optional Vercel redirects in sync with the modal routes in `js/scripts.js`.

`vercel.json` keeps the same redirects for deployments hosted on Vercel. Before releasing, confirm the production source in the GitHub Pages settings and test each legacy route on the live domain.
