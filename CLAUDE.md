# The Wax Biz: rules for AI sessions

https://thewaxbiz.co.uk is a UK supplier directory, guides and free tools for wax melt makers. Plain static HTML on GitHub Pages from `main`; no build step.

## Never break

- **Pushing to `main` is live** in about a minute. Work on a branch and open a pull request; Caroline merges.
- **Real prices only.** Supplier prices in `wax-suppliers-uk.html` come from the supplier's own site on the day you check, with the date shown. The monthly price recheck (on the 1st) keeps an evidence file of source URLs.
- **Safety and legal facts must be exact.** CLP labelling, GPSR and insurance guidance must match current UK law. In GB no UFI is needed and NPIS notification is voluntary; Northern Ireland follows EU CLP, where both are mandatory. Check the source before changing any of it.
- **Affiliate links** use Amazon tag `cazza09-21` with `rel="noopener sponsored"`, and pages with them show the affiliate notice.
- The canonical host is the bare domain `thewaxbiz.co.uk`; `www` redirects to it.

## Working on the site

- Shared styles: `assets/css/site.css` (nav, dropdown, menu, on every page), `guide.css` and `tools.css`. Shared script: `assets/js/site.js` (menu and Tools dropdown). The nav markup is repeated in every page.
- A new page copies an existing tool or guide page's head, nav and footer, links the shared CSS and JS, and loads `assets/js/analytics.js` after `site.js`.
- **The Tools dropdown has five tools.** A new tool needs adding to the dropdown in every page (including `404.html`, with `/`-absolute links), the homepage card and footer, and `sitemap.xml`.
- New public pages go in `sitemap.xml`. Tools that save data use localStorage; say so on the privacy page.
- Test at 390px and 1280px wide. After a merge, confirm the Pages build with `gh api repos/cazzam15/wax-biz/pages/builds/latest`.

## Writing

- Follow `~/home-repo/docs/standards.md`: British English, GBP and the Stop Slop rules.
- Practical and specific, for small UK makers. Contact: hello@thewaxbiz.co.uk.
