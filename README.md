# Wisme Education

A complete, 50-page static website for professional education, corporate training and education solutions. The visual system follows the approved Executive mockup: navy, teal, white, Inter, restrained imagery and consistent navigation. The inner-page templates extend the same approved visual system with compact split headers, navy sections, softly rounded program and service panels, and consistent calls to action.

## Run locally

Requires Node.js 20 or later. There are no npm dependencies to install.

```sh
npm run build
npm run check
npm run dev
```

Open http://127.0.0.1:4174. The server binds only to this computer. Use `PORT=4180 npm run dev` if the default port is occupied. `Start Wisme.command` is a macOS convenience launcher.

The local server also supports `/wisme-education/` to exercise GitHub repository-subpath links. Unknown paths return the custom 404 page with an HTTP 404 response.

## Site contents

| Area | Pages |
|---|---:|
| Core pages, including 404 | 11 |
| Individual program pages | 8 |
| Policy pages and policy index | 9 |
| Corporate training specialisms | 6 |
| Education solution services | 5 |
| Subject-area pages | 4 |
| Original practical guides | 4 |
| How we work, learning approach and individual pathways | 3 |
| **Total** | **50** |

All essential content and links are rendered in HTML. JavaScript enhances mobile navigation, program filtering and enquiry preparation. The site has no backend, database, account system, checkout, analytics, advertising scripts or external font requests.

## Edit content

- `data/content.js`: business identity, individual programs, fees, categories, enquiry types, FAQs and core learning descriptions.
- `data/expanded.js`: corporate training services, education services, subject pages and the four practical guides.
- `data/legal.js`: initial policy wording, requiring review against actual business arrangements before public launch.
- `scripts/templates.mjs`: shared header, footer, metadata and reusable page sections.
- `scripts/build.mjs` and `scripts/expanded-pages.mjs`: page composition and long-form page content.
- `css/styles.css`: the shared homepage design system, navigation, typography and base interactions.
- `css/pages.css`: inner-page layouts extending the approved theme across Programs, Academy, corporate services, pricing, articles, contact and policies.
- `js/main.js` and `js/forms.js`: browser interactions.

Run `npm run build` after changing source content. Root HTML files and nested HTML pages are generated output; direct changes to those files will be overwritten by a rebuild. `data/page-manifest.json` is also generated.

### Business details

Unset business details are `null` and omitted from public HTML. Edit public contact details in the `business` object in `data/content.js`, then rebuild. The email, telephone and office address appear on the Contact page and in every footer. Australian telephone links use the international +61 format. A configured email address also enables an **Open email draft** action after enquiry review. Do not place credentials or private information in any content file.

### Pricing

Program fees are `null` until supplied. To display a fee, set the program's numeric `price`, set `business.pricingApproved` to `true` and provide an accurate `business.gstLabel`. The build refuses approved prices without a GST label. Corporate training and education projects remain custom quotations.

### Adding programs or guides

Add a program object to `programs` with a unique slug, title, category, audience, overview, outcomes and modules. The build generates its detail page, listing and enquiry option. Adjust the page-count assertion in `scripts/check.mjs` when intentionally changing the inventory.

Add an original guide to `guides` in `data/expanded.js`, with a unique slug and substantive sections. It will appear in Insights and receive its own page. Avoid unsupported research, client, instructor or accreditation claims. The initial four guides are original general guidance, not case studies or claims of delivered work.

### Images and branding

The wordmark is accessible text. The four local WebP assets are generated illustrative artwork/photography, not representations of Wisme premises, staff or clients. The homepage book image is capped at 335px high on large screens and 170px on small screens. Other photos occupy small panels; internal headers do not use large images.

Replace files in `assets/images/` while retaining their intended role and dimensions. Optimise replacement images before publishing. Fonts are self-hosted; the Inter licence is included in `assets/fonts/OFL.txt`.

## Enquiry behaviour

Visitors can prepare an individual-program, corporate-training, education-project, Academy-interest, partnership or general enquiry. Relevant links preselect the enquiry type; program links also preselect the program.

**Review enquiry** validates required fields and displays an editable summary. **Copy enquiry** copies the exact summary to the clipboard. If clipboard access is unavailable, the summary is selected and the interface explains how to copy it. With a genuine business email configured, **Open email draft** opens a mail application; the user sends it there.

No entered information is transmitted by the website or written to cookies, local storage or session storage. There are no pretend submission confirmations, watermarks or preview badges. An external form provider is a separate future integration and must have its own privacy review and verified delivery test.

## GitHub and GitHub Pages

The website is prepared for GitHub Pages, not Cloudflare. The source can be uploaded to a repository without publishing the site.

1. Upload this folder's contents to the intended GitHub repository, using `main` as the default branch.
2. The included workflow builds, checks and stages the site on pushes to `main` and on manual dispatch.
3. Successful `main` builds are configured to publish through GitHub Pages.
4. Select **GitHub Actions** in the repository's **Settings → Pages**. The repository is public, as approved for free GitHub Pages hosting.
5. Set the `SITE_URL` repository variable to the final URL if using a custom domain. Otherwise the workflow builds canonical URLs for the repository's normal GitHub Pages address.
6. Run the workflow. The `deploy` job publishes the `dist/` artifact and exposes the actual deployment URL.

The workflow stages only HTML, CSS, browser JavaScript, assets, robots and sitemap files. Build scripts, private configuration files and documentation are excluded from the hosting artifact. There are no server functions.

GitHub Pages availability for a private repository depends on the account plan. Choose repository visibility deliberately; uploading source and publishing a public website are separate actions.

### Custom domain and HTTPS

Add the domain in the repository's Pages settings and configure DNS using GitHub's current instructions for your chosen apex or `www` hostname. Verify domain ownership and enable **Enforce HTTPS** when GitHub has provisioned the certificate. The custom domain is configured in GitHub's settings for an Actions deployment.

Use the same complete base URL for `SITE_URL`, for example the actual `https://www…` domain you own. Never insert a placeholder domain. Rebuild after a domain change. The configured base URL is `https://mmaofun.github.io/wisme`. Update it when the custom domain is supplied. Without a supplied URL, local output omits canonical/absolute social URLs rather than publishing a fake address.

Internal links are page-relative. The generated 404 page includes a base URL so its navigation and assets continue to work when the missing URL is deeply nested.

### Indexing

`business.indexable` starts as `false`; this controls page robots metadata and `robots.txt`. It does not restrict access or make a hosted website private. Set it to `true` after the business information, contact route and policy review are complete, then rebuild. The 404 page always remains `noindex`.

### Redirects

GitHub Pages does not support server-side redirect rules. If a page URL changes, retain a small HTML redirect at the old path or maintain the original URL. Redirects should be tested after deployment, including existing inbound links.

## Before public launch

Confirm the legal entity and ABN/ACN where applicable; the public contact address; privacy and complaints contacts; and any publicly displayed location or telephone details. Confirm actual program availability, duration, delivery format, prerequisites, materials, instructor information and any completion documentation.

Confirm fees, applicable GST, payment arrangements, cancellation conditions, refund handling and licensing terms. The policy pages are initial website content, not evidence of legal compliance or a substitute for advice about the actual business arrangements. No governing state, statutory exemption, refund deadline or accreditation has been invented.

Set the final URL, review the four original guides, inspect the website on a real phone and verify the actual contact route. Then enable public deployment and indexing as appropriate.

## Verification

```sh
npm run build
npm run check
npm run stage
```

See `TESTING.md` for the local browser checks performed and their limits. `npm run check` validates all generated links, metadata, headings and referenced assets. `npm run stage` prepares the static hosting artifact in `dist/`.

## References

- [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub Pages HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
- [ACCC consumer guarantees](https://www.accc.gov.au/consumers/buying-products-and-services/consumer-rights-and-guarantees)
- [OAIC explanation of privacy policies](https://www.oaic.gov.au/privacy/your-privacy-rights/your-personal-information/what-is-a-privacy-policy)
