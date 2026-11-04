# Iron Edge Website — Project Brief

## The business
**Iron Edge** is a knife and scissors sharpening service based in **Mississauga, Ontario**.
This website should help local customers understand the services and prices, and make it easy for them to book.

## About the owner
The owner is a **beginner** who is learning web development while building this site.
- Explain what you are doing in simple, plain-English terms. Avoid jargon, or explain it when you use it.
- Keep code **well commented** so the owner can read it and learn from it.
- Make small, step-by-step changes rather than big jumps.

## Tech rules
- **Plain HTML, CSS and a little JavaScript only.**
- **No frameworks** (no React, Bootstrap, Tailwind, etc.) and **no build tools** (no npm, bundlers, etc.).
- The site should work by simply opening the `.html` files in a browser.
- Use one shared stylesheet (`css/styles.css`) and one shared script (`js/main.js`) for all pages.
- Name every file in **lowercase**, with hyphens instead of spaces (e.g. `how-it-works.html`, `logo.png`). Web hosts often treat capital and lowercase letters as different, so this avoids broken links and missing images.

## Mobile-first
Most visitors will be on **phones**.
- Write CSS for small screens first, then add `@media (min-width: ...)` rules for tablets and desktops.
- Buttons and links should be big enough to tap easily.
- Phone number should be tap-to-call (`tel:` link).

## Pages
1. **Home** — `index.html`
2. **Services & Pricing** — `services.html`
3. **How It Works** — `how-it-works.html`
4. **About** — `about.html`
5. **Contact & Booking** — `contact.html`

Every page shares the same header (logo + navigation) and footer.

## Style
- Clean and modern look.
- Colours (taken from the logo, `images/logo.png`):
  - **Charcoal** `#1C1C1E` — main dark colour (backgrounds, text)
  - **Steel grey** `#8A8D91` — secondary colour (borders, cards, muted text)
  - **Gold accent** `#D4A537` — used sparingly for buttons, links and highlights.
    Gold is easy to read on dark backgrounds but hard to read on white, so on light
    backgrounds use a darker gold (around `#8C6A1C`) for any gold text.
- Easy-to-read fonts with good contrast and comfortable text size.
  The logo uses a classic carved-style serif, so headings can use a similar serif
  (e.g. "Cinzel" from Google Fonts), with a plain sans-serif for body text.
- Tagline from the logo: **"Stay Sharp"**.
- The logo has a black background, so it looks best on charcoal/dark sections.
- Define colours and fonts once as CSS variables at the top of `styles.css` so they're easy to change.

## Folder structure
```
Iron Edge Website/
├── CLAUDE.md            ← this project brief
├── index.html           ← Home
├── services.html        ← Services & Pricing
├── how-it-works.html    ← How It Works
├── about.html           ← About
├── contact.html         ← Contact & Booking
├── css/
│   └── styles.css       ← all the styling for every page
├── js/
│   └── main.js          ← small scripts (e.g. mobile menu toggle)
└── images/              ← logo, photos, icons
    ├── logo.png         ← original logo (2.2 MB, keep as the master copy)
    └── logo-600.jpg     ← small web version (80 KB), use this on the site
```

## Business details
- Drop-off & collection point: **Pak Halal Meat** (partner business),
  1201 Britannia Rd West, Mississauga, ON L5V 1N2. Iron Edge drop-off hours: Tuesday – Sunday, 10 AM – 8 PM. Shown as "Closed Mondays" everywhere (matches the Google Business Profile). Monday pickups still work (Pak Halal is open 7 days); only the FAQ and drop-off step 3 mention that.
  Sunday drop-offs are ready Monday. Uncollected items are held 2 weeks, then the customer is contacted.
  Wrapping: cloth, cardboard taped over the blade, or a secure box; staff will label items if the customer hasn't.
  Items are wrapped and labelled with name + phone, collected, sharpened, and returned there the next day.
- Payment: cash or e-transfer at pickup.
- Prices on `services.html` are confirmed by the owner (no longer placeholders).
- **On-site sharpening** across the **GTA** for restaurants, offices and larger
  home orders, **Mondays only** (the day drop-offs are closed). Visit fee from $10 based on distance. Minimum order: 5 items (confirmed).
  Booked via `contact.html`; its date drop-down is filled with the next 8 Mondays by `js/main.js`.
- Phone: (289) 952-9023 (`tel:+12899529023`). Email: ironedge905@gmail.com.
- Google Business Profile: https://share.google/omGEiPni1tKLFHIff (used in every footer and under the reviews).
- Instagram: https://www.instagram.com/ironedge905/ (in every footer).
- Reviews on `index.html` are real Google reviews (Moughees R., Hira Z.), quoted word for word.
  Show reviewers as first name + last initial. Moughees R.'s before/after photos of a repaired chef knife
  (`images/before.jpg`, `images/after.jpg`) are shown under the reviews on `index.html`.
- **Still placeholders** (replace when the owner provides them):
  the Facebook page link (not created yet; a commented-out line is ready in every footer), the owner photo on `about.html`.
  All FAQ answers on `how-it-works.html` are confirmed by the owner.
- **Booking form** (`contact.html`) sends to **Formspree** (free plan). The form ID is `xvkkdpdw`
  (`https://formspree.io/f/xvkkdpdw`). `js/main.js` sends it in the background
  and shows a thank-you message on the page.
- Not sharpened: hair-cutting shears (not at the moment; may be offered in the future), hair trimmer/clipper blades, chainsaws.
- Pak Halal Meat is the owner's family butcher shop, where the owner learned the trade. Their story is on `about.html`.
- Promise: if a customer isn't happy, the blade is resharpened for free.
- The header and footer are copied into every page by hand (no build tools). If one changes,
  update it on **every** page.

## Design rules learned from the phone review
- Tap targets should be at least ~44px tall: give small standalone links `display: inline-block` + vertical padding.
- Small grey text: use `--muted-text` on light backgrounds and `--steel-text` on dark ones (plain `--steel` is too faint for small text).
- Links inside `.section-dark` use bright `--gold`; `--gold-dark` is only for light backgrounds.

## SEO rules
- Every page has: a `<title>` of 60 characters or less ("Keyword phrase, Mississauga | Iron Edge"),
  a meta description of about 140–155 characters mentioning Mississauga and/or the GTA, and exactly one `<h1>`.
- Every page's `<head>` has the same favicon links (`images/favicon-32.png`, `favicon-192.png`,
  `apple-touch-icon.png`, made from the logo emblem), a `theme-color`, and the same
  **LocalBusiness JSON-LD** block. If a business detail changes (hours, phone, address, links),
  update it in the visible page text AND in the JSON-LD on all 5 pages.
- The JSON-LD `url`, `image` and `logo` use the live address. If the site gets its own domain,
  update them on all 5 pages, and consider canonical + Open Graph tags.

## Hosting
- Hosted free on **Netlify** (chosen over Vercel because Vercel's free Hobby plan is non-commercial only).
- Live address: **https://iron-edge905.netlify.app/**
- Netlify is connected to the GitHub repo `meatpakhalal-hue/iron-edge-website` (branch `main`):
  **every `git push` to `main` updates the live site automatically.** No build command; publish directory is the repo root.
- Netlify's "Visitor access" must stay public (no Netlify-login protection), or customers see a sign-in page.
