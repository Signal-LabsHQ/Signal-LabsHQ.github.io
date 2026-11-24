# Signal Labs storefront

Serve this directory with `python -m http.server 8765 --bind 127.0.0.1` and open http://127.0.0.1:8765/.

## Publish after approval

1. Open the repository that serves `signal-labshq.github.io` and confirm the source in Settings > Pages. The prior setup notes specify branch publishing from `main` at the repository root. Verify the actual setting before copying files.
2. In a checkout of that publication source, copy `index.html`, `styles.css`, `analytics.js`, `robots.txt`, `sitemap.xml`, `.nojekyll` and the `assets/store-*` images into the configured publish directory. Review and remove obsolete storefront assets there after checking references.
3. Review the diff and preview. After commercial approval, publish via the configured Pages source and confirm the deployment and all four Garmin links.

## Analytics

The storefront loads Google Analytics 4 (G-D0320VC58H) only after opt-in. The Google tag measures page views and uses standard UTM campaign attribution. Analytics preferences can be changed in the footer.

For reporting, register event-scoped custom dimensions for `product_name`, `product_tier` and `cta_location`. These are sent with `connect_iq_click`. Disable Enhanced Measurement outbound clicks if the separate automatic `click` event is unwanted, and keep Google signals and advertising personalization disabled in the property.

Check Realtime or DebugView with a test campaign and an opt-in session. Connect IQ clicks measure outbound interest. Garmin supplies purchase counts.
