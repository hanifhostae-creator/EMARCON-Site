# EMARCON Contracting L.L.C — Website (Front-end)

Static multi-page website (HTML / CSS / vanilla JS). No build step — upload the folder to any host (e.g. Hostinger `public_html`).

## Pages
| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About Us (mission, policies, DHA certificate) |
| `services.html` | Services overview + FAQ |
| `general-building-contracting.html`, `steel-structure-contracting.html`, `interior-fit-out.html`, `facility-maintenance.html` | Service details |
| `projects.html` | Projects portfolio with filter + lightbox |
| `group.html`, `electro-mechanical.html`, `manufacturing.html`, `trading.html`, `facility-management.html` | Group of companies |
| `contact.html` | Contact |
| `404.html` | Not found |

## Editing
- **Contact details (phones, emails, address, WhatsApp, social links):** edit the `SITE` object at the top of `assets/js/main.js`. Header, footer and menus are generated from it on every page.
- **Styles / colours:** `assets/css/style.css` (tokens in `:root`).
- **Images:** `assets/img/` (WebP).
- Forms currently validate and confirm on the page only; they will be connected to the admin panel / backend later.
