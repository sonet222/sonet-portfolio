# Development Report
## Md Shifat Hasan Sonet — Personal Developer Portfolio

### 1. Objectives
Create a distinctive, accessible personal identity for a Software Engineering
student at Daffodil International University. Present supplied skills and project
ideas honestly, make contact straightforward, and demonstrate a local,
JSON-driven portfolio assistant without impersonating generative AI.

### 2. Planning and design strategy
The information hierarchy moves from identity to personal philosophy, skills,
projects, education, and contact. The visual direction uses near-black navy,
mint/cyan highlights, restrained violet accents, editorial typography, thin
borders, and generous spacing. Space Grotesk emphasizes headings; DM Sans supports
body copy. These public Google Fonts fall back to system sans-serif fonts.

The actual user-supplied portrait anchors the hero rather than a stock photo.
An offset frame, quiet orbital lines, and compact study/status labels introduce
personality. Project thumbnails are original SVG interface illustrations,
explicitly described as illustrative rather than working product screenshots.
No proficiency percentages, fabricated dates, work history, grades, or
certifications are included.

### 3. Architecture
The deliverable is a static website: `index.html`, `style.css`, `script.js`,
`chatbot-data.json`, and an `assets` folder. It needs an HTTP server but not a
backend, database, framework, or build pipeline. Existing Vite tooling remains
available in the host workspace; the actual page does not load its React entry.
The source ZIP is designed to work independently of that scaffold.

### 4. HTML implementation
Semantic header, navigation, main, section, article, form, and footer elements
structure the document. Labels associate form controls with instructions.
Native dialogs provide focus handling and Escape behavior for project details
and the portrait lightbox. Buttons have accessible names; decorative inline
SVG icons are hidden from assistive technology. A skip link, descriptive photo
alternative text, metadata, and meaningful navigation support accessibility.

### 5. CSS implementation
Custom properties centralize colors and typography. Grid provides the main
layouts; Flexbox supports navigation, labels, and controls. Media queries adapt
the design at desktop, tablet, and phone widths. A mobile menu replaces crowded
navigation. Reduced-motion preferences disable smooth scrolling, reveal motion,
and animated gradients. Hover treatments are restrained and do not hide essential
information. No frontend styling framework is used by the page.

### 6. JavaScript implementation
Small, isolated functions implement SVG icons, mobile navigation, active section
tracking, one-time scroll reveals, project filtering, project details, the
portrait lightbox, contact draft generation, and the assistant.
IntersectionObserver avoids continuous scroll polling. Project states remain
explicit: two concepts and one learning lab. GitHub and live-demo controls are
disabled with explanatory copy because no real links were provided.

The CV download now serves the user's uploaded PDF with the filename
`Md-Shifat-Hasan-Sonet-CV.pdf`. The original printable HTML summary remains in
the source archive but is no longer linked from the Download CV button.

### 7. JSON chatbot
`loadKnowledge()` retrieves and caches `chatbot-data.json`. Topic keyword lists
are matched against normalized message tokens. The topic with most matches
provides the response; unmatched messages receive a scoped fallback.
The interface includes suggestions, a short lookup indicator, timestamped
messages, Enter submission, and mobile layouts.

This implementation is deterministic and limited: it cannot reason over
arbitrary questions or guarantee correct intent matching. “Sonet AI” is a brand
label, accompanied by visible rule-based disclosure. Replies and user messages
are inserted as text to prevent interpreting user input as markup.
An isolated response adapter creates a clear future boundary for a secure
server-based model integration. No keys belong in these frontend files.

### 8. AI tools and example prompts
An AI coding assistant in Figma Make assisted with design direction, copy
editing, HTML/CSS/JavaScript authoring, SVG illustrations, and documentation.
The supplied portrait is a real user upload, not an AI-generated face.
No external generative chatbot API or image-generation service was used.

Examples of task prompts suitable for documenting this process:
- “Create a dark editorial developer portfolio using only vanilla web technologies.”
- “Write a JSON keyword assistant that honestly discloses its rule-based behavior.”
- “Review project copy so concepts are never presented as completed products.”
- “Design reduced-motion and keyboard-accessible alternatives to visual effects.”

These examples describe the development approach; they are not claims that the
student personally submitted these exact prompts.

### 9. Evaluation of suggestions
Suggestions were constrained by the supplied facts, the no-framework requirement,
and the need for functional rather than decorative controls. Invented GitHub
profiles, repository links, completed outcomes, grades, and experience were
excluded. A mailto workflow was chosen instead of an unsupported “message sent”
confirmation. Static SVGs reduce asset size and avoid external thumbnail
dependencies. Final ownership, accuracy, and academic disclosure should be
reviewed by the student before submission.

### 10. Challenges and solutions
- **Existing React scaffold:** bypassed its entry point; kept the delivered page
  independent, without altering host setup scripts.
- **No project repositories supplied:** provided meaningful concept detail views
  and clearly unavailable external actions, not fake URLs.
- **No message-delivery service:** validate and open an email draft, with an
  explicit explanation of delivery limitations.
- **JSON under file URLs:** document a local HTTP server requirement and display
  a helpful retrieval-error message.
- **Student record incomplete:** omit unsupported specifics and keep coursework
  and milestones straightforward to edit.
- **Responsive assistant:** constrain height by dynamic viewport units and give
  message history its own scrolling area.

### 11. Testing process and limitations
Development checks include JavaScript syntax validation, JSON parsing, static
reference review, archive integrity, the repository's `pnpm build` command, and
the host preview console check. Actual command outcomes are reported separately
in the delivery message; these are not student-performed test claims.
Responsive CSS and accessibility behavior are implemented, but this report does
not assert completion of real-device testing, a formal WCAG audit, Lighthouse
scoring, external social-link availability checks, or actual email delivery.
The README includes a reproducible manual test checklist for those next steps.

### 12. Deployment strategy
Serve the extracted folder directly using Netlify, Vercel's static/Other preset,
or GitHub Pages. There are no application secrets or backend services to
configure. Relative assets support subdirectories. The full host workspace can
alternatively build with Vite and publish `dist`; deployment instructions for
both modes are included in the README.

### 13. Learning outcomes and next steps
This project demonstrates semantic page architecture, responsive visual systems,
DOM events, asynchronous JSON retrieval, basic intent classification, accessible
dialogs, and transparent interface copy. Useful future work includes real
published project case studies, a reviewed PDF CV, a real GitHub profile,
cross-device testing, and—only if needed—a secure backend assistant.
The student should reflect on what they actually learned and amend this report
in their own words before academic submission.
