# Portfolio Content Completion Checklist

This checklist tracks the remaining content, evidence, and deployment tasks required before publishing the portfolio.

---

## Required Before First Deployment

### Resume

* [x] Replace the visible placeholder copy in the resume section.
  The resume section now presents the PDF as an available download.

* [x] Update the resume CTA in `src/pages/index.astro`.
  Replace the current GitHub link with the existing PDF:

  ```text
  /cv/Edgar_Rico_Resume.pdf
  ```

* [x] Use a clear CTA label, such as:

  ```text
  Descargar CV general
  ```

* [x] Confirm that the generated build includes:

  ```text
  dist/cv/Edgar_Rico_Resume.pdf
  ```

---

### Contact Information

* [x] Replace the placeholder copy in `src/components/ContactSection.astro`.
  The contact section now lists available channels without promising future placeholders.

* [x] Add real contact channels:

  * [x] Professional email
  * [x] LinkedIn
  * [x] GitHub
  * [x] Resume download
  * [ ] Optional: location (skipped for first deployment)
  * [x] Optional: availability for trainee, internship, or junior roles

---

### Project Links

* [ ] Add repository and demo links where available.

The schema already supports these fields in `src/content.config.ts`:

```ts
repositoryUrl
demoUrl
```

Review and complete:

* [ ] `src/content/projects/coffeerank-tj.md`
* [ ] `src/content/projects/qa-saucedemo.md`
* [ ] `src/content/projects/cima.md`

Use only links that are public, functional, and appropriate for recruiters.

---

### Project Screenshots and Evidence

* [ ] Add visual evidence for featured projects.

Store optimized project images inside:

```text
src/assets/images/projects/
```

Suggested evidence:

#### CoffeeRank TJ

* [ ] Homepage or exploration view
* [ ] Authentication flow
* [ ] Map or cafeteria discovery interface
* [ ] Reviews or profile interface
* [ ] Database diagram or architecture artifact

#### SauceDemo QA Automation

* [ ] Test execution report
* [ ] Example automated test
* [ ] Page Object Model structure
* [ ] Defect evidence or result summary

#### CIMA

* [ ] Use-case diagram
* [ ] Traceability matrix excerpt
* [ ] Requirements artifact
* [ ] Relevant workflow or functional diagram

---

### Project Content Quality

* [ ] Strengthen each case study before linking recruiters to its detail page.

#### CoffeeRank TJ

Update `src/content/projects/coffeerank-tj.md` with:

* [ ] Problem or opportunity addressed
* [ ] Target users
* [ ] Current project state
* [ ] Implemented features
* [ ] Architecture or technical decisions
* [ ] Concrete deliverables
* [ ] Personal contribution
* [ ] Validation or testing approach
* [ ] Next steps

#### SauceDemo QA Automation

Update `src/content/projects/qa-saucedemo.md` with:

* [ ] Testing objective
* [ ] Covered flows
* [ ] Automation strategy
* [ ] Tools used
* [ ] Results
* [ ] Defects found
* [ ] Evidence images
* [ ] Repository link

#### CIMA

Update `src/content/projects/cima.md` with:

* [ ] Domain and problem context
* [ ] Target users
* [ ] Project scope
* [ ] Requirements artifacts
* [ ] Use cases
* [ ] Traceability work
* [ ] Personal contribution
* [ ] Resulting deliverables

---

### Education

* [ ] Replace generic education copy in `src/pages/index.astro`.

Add:

* [ ] Institution
* [ ] Degree
* [ ] Location
* [ ] Current semester or expected graduation date
* [ ] Relevant coursework
* [ ] Optional: current grade average
* [ ] Optional: academic recognitions

---

### SEO and Sharing Metadata

* [ ] Complete metadata in `src/layouts/BaseLayout.astro`.

Add:

* [ ] Canonical URL
* [ ] Open Graph title
* [ ] Open Graph description
* [ ] Open Graph image
* [ ] Twitter card metadata
* [ ] Favicon
* [ ] Real deployment site URL
* [ ] Page-specific metadata for project detail pages

Confirm that these files exist:

```text
public/favicon.svg
public/og-image.png
```

---

### Public GitHub Surface

* [ ] Update `README.md`.

Remove or revise:

```text
Currently under development.
```

Recruiters may reach the repository through your portfolio, so the README should present the project as a professional portfolio rather than an unfinished experiment.

Add:

* [ ] Project description
* [ ] Technology stack
* [ ] Local setup instructions
* [ ] Build command
* [ ] Portfolio URL after deployment
* [ ] Main sections
* [ ] Screenshot after the UI is stable

---

## Recommended Improvements

### Standardize Case Studies

* [ ] Use a consistent structure for every featured project:

```text
Problem
Role and contribution boundaries
Users
Requirements
Technical decisions
Artifacts and screenshots
Testing or validation
Result
Lessons learned
Next steps
Repository and demo links
```

---

### Strengthen SauceDemo QA Evidence

* [ ] Add measurable QA evidence:

  * [ ] Number of test cases
  * [ ] Covered flows
  * [ ] Positive scenarios
  * [ ] Negative scenarios
  * [ ] Blocked scenarios
  * [ ] Defects found
  * [ ] Example execution report
  * [ ] Repository link

This project can become one of the strongest pieces of evidence because it demonstrates software quality practices, traceability, automation, and analysis.

---

### Add External Links to Project Detail Pages

* [ ] Update:

```text
src/pages/proyectos/[slug].astro
```

The detail pages should display repository and demo links when they are available.

Suggested labels:

```text
Ver repositorio
Ver demostración
Consultar evidencia
```

---

### Make Social Links Easy to Find

* [ ] Add consistent access to:

  * [ ] LinkedIn
  * [ ] GitHub
  * [ ] Email
  * [ ] Resume

Place them strategically in:

* [ ] Header
* [ ] Contact section
* [ ] Footer

Avoid repeating every link excessively; the main goal is to make them easy to find.

---

### Improve Professional Positioning

* [ ] Clarify:

  * [ ] Target roles
  * [ ] Preferred areas of work
  * [ ] Region or time zone
  * [ ] Interest in internships, trainee roles, and junior opportunities
  * [ ] Optional: remote, hybrid, or on-site availability

---

### Improve Image Accessibility

* [ ] Add descriptive `alt` text for every project screenshot.
* [ ] Keep decorative images silent when appropriate.
* [ ] Optimize file size before deployment.

---

## Optional Later Enhancements

### Structured Data

* [ ] Add JSON-LD structured data for:

  * [ ] `Person`
  * [ ] `WebSite`
  * [ ] Featured project or case-study pages

---

### Proof Index

* [ ] Add a compact artifact index for each project:

```text
Repository
Demo
Screenshots
Test report
Requirements document
Database diagram
Traceability matrix
```

Only expose documents that are suitable for a public portfolio.

---

### Language Strategy

* [ ] Define whether the first deployment will be:

  * [ ] Spanish only
  * [ ] English only
  * [ ] Spanish with an English version later
  * [ ] Fully bilingual

For international opportunities, an English version can be added after the Spanish MVP is stable.

---

### Deployment Metadata

* [ ] Deploy the site to Vercel.
* [ ] Add the production URL to SEO metadata.
* [ ] Replace the GitHub README URL in `package.json`:

```json
"homepage": "https://your-production-domain.com"
```

* [ ] Confirm that all internal links work in production.
* [ ] Confirm that the resume downloads correctly from:

```text
/cv/Edgar_Rico_Resume.pdf
```

---

## Final Deployment Verification

Before publishing the portfolio URL publicly:

* [ ] Run:

```bash
npm run build
```

* [ ] Run:

```bash
npm run preview
```

* [ ] Verify desktop layout.
* [ ] Verify mobile layout.
* [ ] Test keyboard navigation.
* [ ] Confirm visible focus states.
* [ ] Test every external link.
* [ ] Test the resume download.
* [ ] Check project detail pages.
* [ ] Verify images and alt text.
* [ ] Confirm SEO metadata.
* [ ] Review spelling and consistency.
* [ ] Confirm that no secrets, private documents, or local configuration files are included in the repository.
