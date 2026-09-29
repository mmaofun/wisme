# Local verification

Verified on 29 September 2026 using installed Google Chrome, controlled with Playwright in a temporary profile. The in-app browser attachment failed with `Tab not found in browser 2`, so the installed browser was used. Local URL: `http://127.0.0.1:4174`.

## Passed

- All 50 pages load with one main heading and non-empty page content.
- All 50 pages checked at 360, 768, 1024 and 1440 CSS pixels: 200 page/viewport checks, with no horizontal overflow.
- Generated links, breadcrumbs, fragment targets, image references, titles and descriptions validate.
- AI/data category filters, deep-linked category selection, empty results and reset work.
- Program outlines expand using native disclosure controls.
- Program enquiry links preserve the selected program and enquiry type.
- Corporate, education solution, Academy and general enquiry types preselect correctly.
- Required-field errors and malformed email validation work, with focus on the first invalid field.
- Enquiry summary, edit action, clipboard copy and actual clipboard contents verified.
- Reviewing/copying an enquiry produces no network request, cookie, local storage or session storage entry.
- Mobile menu opens and closes with Escape; focus returns to the menu control.
- Desktop menu button is hidden.
- Program enquiry panel appears after introductory facts on mobile.
- Program content and navigation remain available without JavaScript; form action remains disabled safely.
- Root and simulated `/wisme-education/` hosting paths render content and styles.
- Deep unknown URLs return a styled 404 page with HTTP 404 status.
- No unexpected browser console or page errors were observed.

## Visual review

Reviewed the homepage, Academy, program catalogue, program detail, corporate training, education solutions, contact, pricing, article and policy layouts against the selected design, including mobile views. The final interior revision follows the approved homepage: compact split headers, navy bands, softly rounded panels, horizontal catalogue filters and matching teal controls.

Images remain compact. Hero art is decorative and separate from HTML copy. All four production image assets together are approximately 101 KB, and Inter is hosted locally.

## Limits

This is a local Chromium verification, not a public GitHub Pages deployment check. A custom domain, DNS, HTTPS certificate, production contact delivery, Safari/Firefox, physical-phone keyboard behaviour and a full assistive-technology audit have not been verified. No certified WCAG-conformance claim is made.

The native browser clipboard API has a manual-selection fallback. The successful clipboard path was exercised locally; provider-backed form delivery is intentionally outside this build.
