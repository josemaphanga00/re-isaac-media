#Re-isaac-media

A modern photography portfolio redesign featuring glassmorphism, soft blur effects, and a clean, immersive layout. Enhanced responsiveness and refined visuals create a smooth, cinematic experience that highlights content with depth and elegance.

## Deployment notes

This is a static site. Modal and gallery deep links use query strings (for example, `?modal=booking`) so a direct visit or refresh serves the site entry point without requiring host-specific SPA rewrites. Keep new modal links on this pattern unless the deployment host is configured to serve the app for custom paths.

Vercel serves this repository, and its Production Branch is configured as `isaac-media-v2`. Pushing to that branch deploys to production. Use a different branch for preview deployments; only push to `isaac-media-v2` when a production release is intended.
