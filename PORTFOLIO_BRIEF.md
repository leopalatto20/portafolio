# Portfolio brief

Status: confirmed by the owner in the Lavish review, including the subsequently requested CV-download feature. Shape complete.

## Job and audience

Recruiters and managers should quickly understand Leonardo Pérez Palatto's work and suitability for cybersecurity or software engineering roles, then explore a project or contact him. Other interested visitors can explore the same material. Visitor mode: Experience; actual work leads the opening viewport.

## Outcome and proof

The primary outcome is a hiring conversation through email. A downloadable CV supports evaluation; LinkedIn and GitHub are secondary contact/profile links. Use the five projects, two work experiences, education, and skills in `information.txt`. Preserve dates, collaborators, ongoing status, and the distinction between challenge wins and overall hackathon wins. Rewrite supplied descriptions for clarity in both languages.

## Selected direction

**The work program** — technical conference programs and proceedings translated into a project index. The user selected this direction in the visual picker, with comp-first retained.

Selected direction comp: `.impeccable/mocks/decision/work-program.png`. This is the direction reference for planning; the later build's composition round and approval remain part of the comp-first workflow.

The visual system is ivory program stock, navy ink, chartreuse selection rules, condensed editorial project names, and precise date/domain annotations. A wide, open BarbAttack project entry is the focal moment. The signature interaction is expanding a project row into a readable explanation without leaving the page. The same grammar carries experience entries, education, grouped tools, and the final contact section.

## Scope and boundaries

- One portfolio page in English and Spanish, with five expandable project entries.
- Named target: existing `src/pages/index.astro`, plus its Spanish counterpart during implementation.
- Language URLs: English at `/`, Spanish at `/es/`; a visible EN/ES switch keeps the visitor at the same section and preserves open projects where possible. English is the initial language.
- Public contact channels: email, LinkedIn, GitHub. Phone is outside the chosen public contact set.
- Include a CV-download action in the opening navigation and contact section, labeled “Download CV” / “Descargar CV.” Both actions download the owner-supplied temporary PDF at `/cv/CV_LeonardoPerez.pdf`, using the filename `CV_LeonardoPerez.pdf`. The asset lives at `public/cv/CV_LeonardoPerez.pdf`; replace its contents at the same path when the owner supplies the updated version.
- Collaborators and supplied descriptions can appear publicly with clearer wording and structure.
- Individual case-study pages, a contact backend, and a blog are outside this initial scope.
- Product source, factual claims, existing stack, and raw `information.txt` remain intact.

## Sequence, states, and content ranges

1. Name, career focus, Work / Experience / Contact anchors, EN/ES, an email contact action, and a secondary CV-download action using the supplied PDF.
2. Selected work: BarbAttack open initially; BarBienestar, BarbOfraud, Beholder, Identify follow in reverse chronological order. Each row exposes name, date, short summary, domain, and an expand/close control.
3. Each open project presents problem, mechanism, Leonardo's stated work, and documented result or current status. Use roughly 30–50 words in summaries and 100–200 words in expanded entries, scaling down when the source provides less detail. Several projects may stay open for comparison.
4. Work experience: Lacoste IT Intern, then Tecnológico de Monterrey Programming Advisor; real responsibilities, dates, and business context.
5. Education and technical knowledge: degree focus, coursework, grouped supplied tools, native Spanish and C1 English.
6. Contact: email first, followed by CV download, LinkedIn, and GitHub; the closing section makes starting a conversation explicit.

Expanded/closed states use visible labels and keyboard-operable disclosures. Direct project anchors open the corresponding entry. Each locale carries complete content. The CV action uses localized text and the supplied PDF's clear filename. Missing screenshots or unavailable demo/repository URLs produce no invented links; explanatory diagrams can carry the mechanism until real assets are supplied. Core reading, navigation, disclosure, and file download remain usable without JavaScript.

## Interaction and layout

On desktop, project rows align into an agenda with a date rail, a prominent project title, its summary, domain, and disclosure control. Opening a row adds its details beneath it. On mobile, that row becomes a stacked entry with the disclosure visible; mechanisms stack into a readable sequence rather than shrinking a desktop diagram.

Use one clear focal project, quiet surrounding rows, and calm intervals between dense passages. Expansion is the main transition; avoid scroll hijacking or delayed content reveals. Respect reduced motion. Preserve visible focus, semantic headings, sufficient contrast, readable body text, touch targets, and full-name wrapping. Spanish copy gets natural room rather than smaller type.

## Delivery and remaining material

Use the existing Astro / React / Tailwind project and Vercel adapter. Shared localized content and reusable project, experience, navigation, and contact structures should keep both languages aligned. Astro's [routing guide](https://docs.astro.build/en/guides/routing/) and [internationalization guide](https://docs.astro.build/en/guides/internationalization/) are the implementation references. Any dev server starts with `astro dev --background`, per `AGENTS.md`.

The owner supplied `CV_LeonardoPerez.pdf` and approved it as a temporary download until its update. Public download asset: `public/cv/CV_LeonardoPerez.pdf`. Preserve the PDF unchanged and keep `information.txt` as the source for portfolio copy. Project-specific screenshots, repositories, and demos can be added when supplied. Initial diagrams must be labeled explanations of the supplied mechanisms, not actual product screenshots. The selected comp supplies the direction; remaining composition and raster-asset choices belong to the subsequent build workflow.

The owner confirmed the brief, then explicitly added CV download. That addition is incorporated here. Implementation begins with a separate build request.
