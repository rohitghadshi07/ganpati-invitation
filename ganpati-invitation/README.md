# Ganpati Invitation — Makhanchor Ganpati

Place the `ganpati-invitation` folder in your Apache `htdocs` (XAMPP/WAMP/LAMP) directory and open:

```
http://localhost/ganpati-invitation/
```

Files created:

- `index.php` — main page
- `config.php` — invitation configuration (host, phone, venue)
- `includes/` — `header.php`, `navbar.php`, `footer.php`
- `assets/css/style.css` — styles
- `assets/js/script.js` — interactive behavior
- `assets/images/` — placeholder folders for `ganpati/` and `gallery/`
- `assets/audio/ganpati.mp3` — optional background music

How to replace images and audio:

- Replace the hero art: `assets/images/ganpati/ganpati-placeholder.png` with your chosen Ganpati illustration (keep the filename or update `index.php`).
- Replace makhanchor motif: `assets/images/ganpati/makhanchor.png`.
- Replace gallery images: `assets/images/gallery/placeholder-1.jpg` ... `placeholder-6.jpg`.
- Add background music at `assets/audio/ganpati.mp3`. Music will NOT autoplay; use the floating `Music` button to toggle.

Notes:
- The Google Maps "Get Directions" button uses a search URL derived from the `venue` in `config.php`.
- Phone and WhatsApp use `phoneDigits` from `config.php`.
- Images should be optimized for web. Gallery images are loaded with `loading="lazy"`.
- The project uses no build tools and is ready for Apache/PHP.
