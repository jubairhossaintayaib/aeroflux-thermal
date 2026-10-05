# Verification — 4 October 2026

## Automated local checks

- 24 HTML pages; all returned HTTP 200 from the local preview.
- 1,025 local links and 62 asset references checked; no missing files or anchors.
- All pages use `en-GB`, have one primary heading and contain no duplicate element IDs.
- JavaScript syntax checked for page generation, content, interaction and server files.

## Browser checks

- Desktop at 1440 × 1000: hero, rating card, navigation and a service-detail page visually inspected.
- Phone at 390 × 844: homepage, menu, expanded service navigation and installation detail inspected; no horizontal overflow.
- Small phone at 320 × 900 and tablet at 768 × 900: homepage, services, contact, projects, FAQs and a guide checked; no horizontal overflow or broken loaded images.
- Service dropdown opened and navigated to Heating System Repair.
- Mobile menu and nested service menu opened and navigated to HVAC Installation.
- FAQ expanded and displayed its answer.
- Before/after range control changed from 50% to 51% with ArrowRight; second comparison reached 0% with Home and updated its clipping position.
- Google Maps loaded after clicking the map button and displayed the Glasgow region.
- Service enquiry link preselected the correct service.
- Empty form submission was rejected by required-field validation.
- Valid sample form submission displayed the explicit local-test result: not sent, saved or booked.
- Final form fieldset enabled only after JavaScript initialisation.
- No browser warnings or errors observed in the final responsive check.

## Limitations

- No live email, booking, CRM or payment service is connected.
- No public deployment was performed.
- Links to external research and stock-provider sites are documented, not continuously monitored.
- No real-device lab or exhaustive assistive-technology audit was performed.
- Comparison photos are illustrative reference-template assets, not confirmed AeroFlux projects. Business proof, contact details and final public-use asset rights still need supplying.
