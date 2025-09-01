# Jejerish Store — Static Demo (HTML/CSS/JS)

A simple, responsive online store front-end. Uses `localStorage` for cart logic. Prices are in TZS.

## Run locally
1. Download and unzip the project.
2. Open `index.html` in your browser.
   - If product images don't load due to CORS when opening from file, use a simple server:
     - Python: `python -m http.server 8000` then visit `http://localhost:8000`
     - Node: `npx serve`

## Deploy free (2 options)
- **GitHub Pages**
  1. Create a new repo, upload these files.
  2. In repository settings → Pages → set source to `main` branch `/root`.
  3. Your site will be live at `https://<yourname>.github.io/<repo>/`.

- **Netlify**
  1. Drag-and-drop the folder on https://app.netlify.com/drop
  2. It will deploy and give you a live URL instantly.

## Customize
- Edit `data/products.json` to change products, names, and prices.
- Edit `assets/*.svg` to update images.
- Modify colors and layout in `styles.css`.

## Notes
- This is front-end only. To accept real payments, add a backend (Node/PHP/Python) and integrate payments (e.g., Stripe, PayPal, mobile money APIs).
