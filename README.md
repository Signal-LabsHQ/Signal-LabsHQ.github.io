# Signal Labs storefront

Serve this directory with `python -m http.server 8765 --bind 127.0.0.1` and open http://127.0.0.1:8765/.

## Publish after approval

1. Open the repository that serves `signal-labshq.github.io` and confirm the source in Settings > Pages. The prior setup notes specify branch publishing from `main` at the repository root. Verify the actual setting before copying files.
2. In a checkout of that publication source, copy `index.html`, `styles.css`, `robots.txt`, `sitemap.xml`, `.nojekyll` and the `assets/store-*` images into the configured publish directory. Review and remove obsolete storefront assets there after checking references.
3. Review the diff and preview. After commercial approval, publish via the configured Pages source and confirm the deployment and all four Garmin links.

## Analytics activation

The page makes no analytics requests. GitHub Pages does not expose visitor logs for product click measurement. A GA4 standard property can measure visits, traffic sources, campaign attribution and product clicks at no hosting cost.

1. Obtain approval for GA4 and review consent and privacy requirements for the audience. Create a web stream for the canonical site and update the privacy notice before enabling tracking.
2. Add the web stream tag behind any required consent controls. Use automatic page views and standard UTM parameters for acquisition reporting. Keep campaign values in the measurement session and avoid sending personal information.
3. Wire the links carrying `data-product` to emit `connect_iq_click` with `product_id` and `product_tier`, taken from the corresponding data attributes. Register those two event parameters as event-scoped custom dimensions. Use these four identifiers: `executive`, `executive-prime`, `horizon`, `horizon-prime`.
4. Verify every product and comparison CTA in DebugView, including an incoming test campaign. Report visits, sources and click counts by product and tier. Connect IQ outbound clicks measure intent. Purchase counts come from Garmin.
