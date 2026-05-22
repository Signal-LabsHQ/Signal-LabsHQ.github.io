# Signal Labs landing page

Free static landing page for Signal Labs, ready for GitHub Pages.

## Files

- `index.html` — page structure and copy
- `styles.css` — visual styling
- `assets/` — place screenshots here
- `.nojekyll` — tells GitHub Pages to serve this as plain static files

## Replace the Connect IQ URL

Search for:

```text
PLACEHOLDER_CONNECT_IQ_SIGNAL_EXECUTIVE_URL
```

Replace it with the Signal Executive Connect IQ listing URL.

## Replace screenshots

Add final images to `/assets` using these exact filenames:

```text
assets/signal-executive-hero.png
assets/signal-executive.png
assets/se-prime.png
assets/signal-horizon.png
assets/sh-prime.png
assets/signal-now.png
```

The page still looks acceptable if images are missing because the layout uses styled placeholders.

## Support email

Current email:

```text
signal.labs@etik.com
```

To change it later, search for `signal.labs@etik.com` in `index.html`.

## Publish on GitHub Pages

1. Create a GitHub repository named exactly:

```text
<your-github-username>.github.io
```

Example:

```text
signallabshq.github.io
```

2. Upload these files to the root of the repository:

```text
index.html
styles.css
.nojekyll
assets/
README.md
```

3. Go to repository `Settings` → `Pages`.
4. Set source to `Deploy from a branch`.
5. Select the `main` branch and `/root` folder.
6. Save.

Your page should publish at:

```text
https://<your-github-username>.github.io
```

GitHub says publishing can take a few minutes after changes are pushed.

## Later custom domain

If Signal Labs validates commercially, you can later buy a domain and point it to the same GitHub Pages site without rebuilding the page.

## Notes

- No JavaScript
- No forms
- No cookies
- No external fonts
- No paid dependencies
- No analytics
