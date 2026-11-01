# Raja Namdeo — portfolio

Static site. No build step and no dependencies. `index.html` is the homepage.

## Files

- `index.html` — homepage
- `styles.css`, `main.js`, `favicon.svg`
- `images/` — portrait and project screenshots
- `writing/` — six articles linked from the homepage

The résumé button points at a Google Drive folder. Job-hunt notes live outside this folder.

## Run locally

```bash
cd portfolio
python3 -m http.server 8765
```

Open http://127.0.0.1:8765

## Put it on GitHub Pages

1. On the GitHub account you want on the résumé, create a repository named `raja-namdeo.github.io`.
2. From this folder, with `index.html` at the repository root (not inside another `portfolio/` directory):

```bash
cd "/home/arav/Documents/Job Hunt/portfolio"
git init
git add .
git commit -m "Publish portfolio site"
git branch -M main
git remote add origin git@github.com:raja-namdeo/raja-namdeo.github.io.git
git push -u origin main
```

3. On GitHub: Settings → Pages → Deploy from branch `main`, folder `/ (root)`.
4. The site is https://raja-namdeo.github.io/ after the first deploy finishes.

If the repository name is not `raja-namdeo.github.io`, Pages serves it at `https://<user>.github.io/<repo>/`. In that case the writing links still work because they are relative.

## Other hosts

Drag this folder onto [Cloudflare Pages](https://pages.cloudflare.com) or [Netlify Drop](https://app.netlify.com/drop). Both give a URL without a build command. Set the publish directory to this folder, and leave the build command empty.
