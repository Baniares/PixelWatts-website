# PixelWatts website

Static public assets for the landing page and `/privacy/`. No build step,
package installation, analytics, remote fonts, or app source is needed.

Preview from this directory:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/` and `/privacy/`. Both pages support English and
Spanish (Mexico), automatic browser-language selection, a manual language menu,
and the day/night switch reused from Fit x Fat. Appearance initially follows
the system; the switch selects Light or Dark. Session storage preserves both
preferences through navigation. Reduced Motion removes decorative transitions.
English routes are `/` and `/privacy/`; Spanish routes are `/es/` and
`/es/privacy/`. Explicit `?lang=en` links override automatic detection.

Publication destination: a dedicated public `PixelWatts-website`
repository, served at `https://pixelwatts.baniares.dev/`. Use GitHub Pages from
the root of `main`, with `.nojekyll`, `CNAME`, and HTTPS enforcement, matching
`Baniares/FitxFat-website`. Configure HTTPS and the custom
domain only after owner approval. Copy only this directory's reviewed public
assets into that repository; do not copy the app checkout or Git history.

The privacy page describes GitHub Pages security logging and the current
PixelWatts implementation. Support communications are used to answer requests
and investigate reported problems; the contact is specific to PixelWatts.

The app currently ships English UI. Spanish here is a website translation.
The landing page uses the app's actual icon rather than an invented app UI.
