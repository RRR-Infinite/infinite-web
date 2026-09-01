# RRR Infinite

Static one-page site for RRR Infinite Turf — a floodlit football and cricket turf on
Water Canal Road, Korattur, Chennai. Plain HTML, CSS and JavaScript — no framework,
no build step.

## Files

- `index.html` — the whole page.
- `styles.css` — all styling, dark theme driven by CSS variables (`--accent` is the neon mint).
- `script.js` — footer year, gallery lightbox, video play/pause, active nav tab.
- `images/` — logo, gallery placeholders, video poster (SVG placeholders, swap for photos).
- `media/` — drop `intro.mp4` here for the video band; until then the poster is shown.
- `CNAME` — custom domain for GitHub Pages (`rrr-infinite-turf.com`).

## Page layout

Top to bottom:

1. **Sticky header** — logo + name on the left, pill nav tabs on the right
   (`About us`, `Services`, `Hours`, `Location`, `Gallery`, `Contact`). The tab for the
   section you are scrolled to is highlighted; sections carry `scroll-margin-top` so
   anchor jumps clear the header.
2. **Hero** (`#top`) — logo, "RRR Infinite", tagline and the "Book a slot" CTA.
   Every booking link is a `tel:` call to +91 98402 20196.
3. **Video band** — full-width autoplaying muted loop. Native controls are off; a single
   custom play/pause button (and clicking the video) toggles playback.
4. **About us** (`#about`) — short intro plus a `.facts` list (sports, surface, hours).
5. **Services** (`#services`) — groups laid out in the two-column `.facility-layout` grid
   (one column under 40rem), each holding an `<h3 class="facility-group">` and a grid of
   cards. Coaching & classes and Amenities are `.facility-wide` (full width); the two
   `.facility-col` groups, Practice and Events, share a row. Each card is an icon + name,
   a one-line note and a call link.
6. **Opening hours** (`#hours`) — day/time rows (open 24 hours, every day).
7. **Location** (`#location`) — address, Google Maps directions link and an embedded map.
8. **Gallery** (`#gallery`) — mosaic of tiles; `tile-wide`, `tile-tall` and `tile-xwide`
   make some images span extra columns/rows. Clicking an image opens the lightbox (click
   anywhere or press Escape to close).
9. **Contact** (`#contact`) — card grid: the call and WhatsApp cards stack in the first
   column, Visit (map) and Instagram sit beside them full height, with the call-to-book
   button below the grid.
10. **Footer** — copyright with the year filled in at runtime.

Responsive rules: the gallery drops to two columns under 52rem (shorter rows under 26rem),
the contact grid collapses to one column under 40rem, and under 400px the section scroll
offset grows so a two-row header still clears the headings.

## Still to replace

Address, phone, hours and amenities come from the Google Maps listing. Placeholders that
need real values: the Instagram handle, `og:image`, the services copy, every file under
`images/` (SVG stand-ins) and `media/intro.mp4`.

## Custom domain

Served from GitHub Pages at `rrr-infinite-turf.com` (see `CNAME`). DNS at the registrar:

- `A` `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME` `www` → `rrr-infinite.github.io`

Then enable Settings → Pages → Enforce HTTPS once the certificate is issued.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
