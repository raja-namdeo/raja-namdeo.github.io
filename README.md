# Raja Namdeo — portfolio

Static site. No build step and no dependencies. `index.html` is the homepage.

## Files

- `index.html` — homepage
- `styles.css`, `main.js`, `favicon.svg`
- `images/` — portrait and project screenshots
- `writing/` — four articles linked from the homepage

The résumé button points at a Google Drive folder. Job-hunt notes live outside this folder.

## Run locally

```bash
cd portfolio
python3 -m http.server 8765
```

Open http://127.0.0.1:8765

## GitHub Pages

This folder is the `main` branch of https://github.com/raja-namdeo/raja-namdeo.github.io. The live site is https://raja-namdeo.github.io/.

```bash
cd "/home/arav/Documents/Job Hunt/portfolio"
git add .
git commit -m "Update portfolio"
git push
```

## Other hosts

Drag this folder onto [Cloudflare Pages](https://pages.cloudflare.com) or [Netlify Drop](https://app.netlify.com/drop). Both give a URL without a build command. Set the publish directory to this folder, and leave the build command empty.
