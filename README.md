# Wedding Invitation Site

Elegant static Hindu wedding invitation website for Hiral & Viveka.

## Features

- Pastel modern hero invitation banner
- Countdown to Haldi (first event)
- Events timeline: Haldi, Sangeet, Pherras
- Accessible, responsive layout
- Enhanced RSVP form (local-only storage)
- Gallery placeholder section
- Smooth scrolling & active nav highlighting

## Structure

- `index.html` – main page
- `style.css` – pastel design system & components
- `script.js` – countdown, RSVP logic, nav, enhancements

## Customization

Replace placeholder couple names, locations, and gallery images.

Search tokens to update:

- `Hiral & Viveka`
- `To be announced`
- `placeholder*.jpg`
- Event date/time if changed

## Deployment

Host the three files on any static host (GitHub Pages, Netlify, Vercel static, S3, etc.).

## Local Preview

Open `index.html` directly, or use a simple server:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000/>

## RSVP Persistence

RSVPs are stored only in the visitor's browser `localStorage` under key `rsvps`. For real collection, integrate a backend form endpoint or a service (e.g., Formspree, Google Forms) – replace the submit handler in `script.js`.

## Accessibility

- Skip link
- Focus styles
- Semantic landmarks & headings
- Color contrast uses muted palette while maintaining readability

## License

Personal use only unless otherwise specified by the site owner.
