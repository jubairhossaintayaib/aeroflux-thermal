# AeroFlux Thermal Ltd

Responsive, static multi-page demonstration website based on the supplied HVAC Premium design. All editable pages, scripts and styles are in this project root.

## Preview

Run `node serve.cjs`, then open http://127.0.0.1:4173/ . No installation is required. The server binds to the local computer only. If npm is available, `npm start` is equivalent.

## Editing

- `index.html` and the other `.html` files: complete generated pages, also usable directly without a build.
- `styles.css`: layout, responsive rules and the supplied four-colour palette.
- `app.js`: navigation, before/after controls, map loading and test form.
- `content.mjs`: service descriptions, original demo reviews, researched FAQs and guides.
- `build.mjs`: common header/footer, section templates and page generation.
- `assets/`: local photographs and Manrope font.

To regenerate all HTML after changing `build.mjs` or `content.mjs`, run `node build.mjs`. This replaces generated HTML, so make lasting content edits in those source files, or edit the HTML directly and do not regenerate it.

## Checks

`node verify.mjs` verifies JavaScript syntax, local links, anchors, assets, unique IDs and one primary heading per page. Desktop/mobile browser checks cover the navigation, FAQ, comparison controls, service form preselection and test submission. See `QA.md` for the recorded checks.

## Demonstration boundaries

- This is a local preview, not a public deployment.
- Form entries are validated locally, not sent, saved or booked. No backend or email provider is connected.
- Phone, email, registered office, company registration details and credentials have not been invented.
- All six reviews are visibly fictional. The requested business figures and 4.9 Google rating are marked as unverified demo content. No review count is invented and no review structured data is emitted.
- The requested Glasgow map link is used. The embedded map loads only after the visitor clicks and shows the city, not an office address.
- Hero engineers are AI-generated illustrative people. Web and reference photographs do not establish actual AeroFlux projects.
- Funding page links to official guidance and does not fabricate a company finance offer.
- All pages carry `noindex,nofollow` until verified for publication.

## Before live use

Supply verified business identity/contact details, service areas and availability, credentials and insurance, genuine reviews and Google Business Profile, approved project photos, service terms, pricing/finance arrangements and a form delivery destination. Replace preview legal notices with actual business policies. Confirm asset rights for public deployment, especially comparison images retained from the reference template. Then remove the noindex tag only when ready for indexing.

See `SOURCES.md` for asset and FAQ references.
