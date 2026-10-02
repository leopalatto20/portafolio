---
name: "Leonardo Pérez Palatto — The work program"
description: "A flat, ruled program of practical software, network, and cybersecurity work."
colors: {"paper":"#f1f0e8","ink":"#192340","accent":"#bcd749","soft-rule":"rgba(241,240,232,.35)"}
typography: {"display":{"fontFamily":"Program Display, sans-serif","fontSize":"76px","fontWeight":700,"lineHeight":1.08,"letterSpacing":"0"},"headline":{"fontFamily":"Program Display, sans-serif","fontSize":"54px","fontWeight":700,"lineHeight":1.15},"title":{"fontFamily":"Program Display, sans-serif","fontSize":"39px","fontWeight":700,"lineHeight":1.1},"body":{"fontFamily":"Barlow, sans-serif","fontSize":"18px","fontWeight":400,"lineHeight":1.45},"label":{"fontFamily":"Program Mono, monospace","fontSize":"13px","fontWeight":400,"lineHeight":1.45}}
rounded: {"square":"0px"}
spacing: {"mobile-outer":"24px","mobile-panel":"20px","mobile-inset":"12px","content-gap":"40px"}
components: {"contact-link":{"textColor":"{colors.ink}","rounded":"{rounded.square}","padding":"5px 17px"},"project-row":{"textColor":"{colors.ink}","typography":"{typography.title}","padding":"10px 2.65%"},"project-open":{"backgroundColor":"{colors.ink}","textColor":"{colors.paper}","rounded":"{rounded.square}"},"text-link":{"textColor":"{colors.ink}","typography":"{typography.body}"},"knowledge-row":{"textColor":"{colors.ink}","padding":"15px 0"}}
---

# Design System: Leonardo Pérez Palatto

## Overview

**Creative North Star: "The work program"**

The work program treats a personal portfolio as a readable agenda: condensed project names, precise dates, quiet rules and one clearly open entry. Ivory stock and navy ink give the page a printed material character; chartreuse marks selection, ongoing work and direct actions.

The world is dense enough to compare work quickly and spacious enough to read responsibilities. English and Spanish share the same structure, with content allowed to wrap. The approved first viewport is a visual guide, while the implementation adapts to the available local fonts and narrower screens.

**Key Characteristics:**
- Flat ruled entries rather than floating cards.
- Locally served condensed display, humanist body and precise mono annotations.
- Navy open surfaces with restrained chartreuse state marks.
- Native disclosures and a readable stacked mobile flow.

## Colors

### Primary

**Chartreuse selection** uses the accent token for open-entry top rules, ongoing status, active language, focus and contact underlines.

### Neutral

**Ivory program stock** is the paper token, used for the fallback page ground and inverse lettering. **Navy ink** is the ink token, used for body text, hairline dividers and fallback open-panel grounds. **Soft inverse rule** separates reading sections inside dark entries. The line custom property aliases navy ink.

The painted grounds are raster materials, not solid token swatches. Sampling the opaque shipping tiles found dominant paper pixels at `#eeece7` (600 × 260 tile) and dominant navy pixels at `#15223a` (580 × 720 tile). The mechanism plate has a distinct blue-navy ground, predominantly `#142a44` (2172 × 302). These are observed asset samples, not alternate CSS primitives; retain the repeating paper/navy assets when reproducing the built surface. Each shipping plate embeds its origin/provenance.

**The Selection Rule.** Use chartreuse to identify state, focus and actionable underlines; keep sustained reading in navy on ivory or ivory on navy.

## Typography

**Display Font:** locally served Barlow Condensed Bold under the CSS family Program Display, with sans-serif fallback.
**Body Font:** locally served Barlow Regular and SemiBold, with sans-serif fallback.
**Label/Mono Font:** locally served IBM Plex Mono Regular under Program Mono, with monospace fallback.

Condensed display carries project and section names; Barlow carries summaries and sustained reading; mono carries dates, domains and small structural annotations. The stylesheet contains earlier unused Mouse Memoirs and Black-face experiments; they do not define the current system.

### Hierarchy

- **Display:** the frontmatter display role serves the opening; desktop lettering is horizontally compressed (scaleX .83), with an expanded text box. At 901–1100px the opening becomes 66px. At 900px and below it becomes clamp(46px, 7vw, 66px), line-height 1.02, with no compression.
- **Featured title:** 130px/.83 on wide desktop, compressed horizontally (.83); 8.3vw with .8 compression at 901–1450px; clamp(66px, 12vw, 100px)/.98 without compression on mobile. This is the open project signature, not a general heading size.
- **Headline:** the section role becomes 44px on mobile.
- **Title:** quiet project titles become 35px on intermediate desktop and 42px on mobile; education subheads use 36px desktop and 33px mobile.
- **Body:** base reading uses the body role; expanded project prose uses 18px/1.55 with a 65ch maximum, becoming 17px/1.65 on mobile.
- **Label:** dates and domains use the label role, with smaller responsive values (10–12px in dense desktop columns, 12px on mobile). Section index annotations use uppercase and tracking.

**The Readable Program Rule.** Preserve chronology and the project hierarchy when columns become stacked entries; let bilingual text wrap.

## Layout

Wide layouts use fluid margins rather than a fixed maximum-width shell: ordinary sections and the masthead sit at 4%; full project/contact panels at 1.3672%, with 2.65% internal horizontal padding. Quiet project summaries align five columns: date, name, summary, domain and disclosure. The featured entry expands a date rail and a four-stage explanation; deeper context uses three reading columns. Education and contact use two columns.

Intermediate desktop adjustments apply at 1450px and 1100px; the 1100px masthead wraps navigation to its own line. At 900px and below the outer reading margin is 24px, dark panels inset 12px, and panel content pads 20px. Project metadata becomes a two-column header with the disclosure at upper right, followed by full-width title, summary and domain. The mechanism raster is hidden and its HTML steps become a numbered vertical list. Experience, project context, education and contact all stack. Navigation wraps visibly, with mobile links at least 44px high.

## Elevation & Depth

No box shadows are used. Material grain comes from opaque repeating raster tiles. Navy inversion and chartreuse top rules establish the open entry and closing contact panel; fine borders provide hierarchy within and between entries. The diagram's blue-navy plate supplies a local tonal layer inside the featured project.

**The Flat Stock Rule.** Separate information with rules and ink inversion rather than shadows.

## Shapes

Square corners and straight rules define the system. Dividers are generally 1px; selected panel top rules are 5px and action/language underlines 3px. The mechanism's circular nodes belong to its explanatory artwork, so flat program geometry does not prohibit circular diagrams. Control SVGs use a consistent 1.5 stroke, round caps and joins.

## Components

### Navigation and contact link

The name is a condensed text identity above a mono professional annotation. Navigation is plain Barlow links; Contact adds a square navy outline and inline SVG arrow. Active language receives a chartreuse underline. Hover underlines use chartreuse. Keyboard focus uses a 3px chartreuse outline with 5px offset.

### Dated project disclosure

Native details/summary supplies multiple independently open projects. Quiet entries remain on paper with date number, title, short description and domain separated by vertical rules. Open entries invert to ivory on the navy tile and receive a chartreuse top rule. Plus/minus SVGs accompany localized Expand/Close labels. Summary hover underlines the title; summary focus pulls the outline inside by 5px. The first project is open by default.

### Featured mechanism and deeper context

On desktop, the four-node raster carries the artwork while HTML names and descriptions sit below its nodes. On mobile those same steps are numbered, separated by soft inverse rules and fully selectable. A nested native disclosure reveals problem, contribution and result. Its chevron rotates in 180ms using `--ease-out`. Pointer activation expands and collapses both disclosures with measured height and opacity transitions in `--duration-disclosure` (200ms), using `--ease-out` (`cubic-bezier(0.23,1,0.32,1)`). Rapid activation reverses from the current frame; content remains mounted through exit, then returns to natural height. Reduced motion keeps an opacity fade and removes height motion. Keyboard activation is immediate, and disclosures retain native behavior without JavaScript. No staged entrance is required.

### Text actions and contact panel

Email actions use a 3px chartreuse underline and inline arrow; CV and profile links remain plain text. The closing contact panel repeats navy material, ivory text and a chartreuse top rule. Email wraps safely on narrow screens; the social/download links wrap below it.

### Knowledge rows

A definition list organizes knowledge into ruled category/tool pairs (17px), with 15px vertical padding on desktop. On mobile each row becomes one column, uses 16px padding, and permits multi-line slash-separated tool lists. There are no standalone tag pills or input fields in the built portfolio.

## Do's and Don'ts

### Do:
- **Do** reuse the local Barlow Condensed, Barlow and IBM Plex Mono faces for their established roles.
- **Do** retain navy open states and chartreuse selection rules across disclosures and contact surfaces.
- **Do** allow English and Spanish copy to determine entry height.
- **Do** retain native details/summary semantics, visible focus and reduced-motion behavior.
- **Do** keep mechanism labels as selectable HTML text and stack them on mobile.

### Don't:
- **Don't** replace the ruled program with rounded, elevated cards.
- **Don't** use chartreuse for long passages of reading text.
- **Don't** force the desktop date rail or four-node illustration into a narrow column.
- **Don't** treat the approved composition as a mandatory pixel grid.
