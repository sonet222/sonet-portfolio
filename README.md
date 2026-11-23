# Sonet — Personal Developer Portfolio

A responsive, framework-free portfolio for **Md Shifat Hasan Sonet**.
The delivered website uses HTML, CSS, vanilla JavaScript, and a JSON knowledge base.
No React, Tailwind, or other UI framework is imported by the site.

## Run the downloaded ZIP

Extract the archive, open a terminal in the extracted folder, and run:

```sh
python3 -m http.server 8000
```

Visit `http://localhost:8000`. Any static HTTP server works.
Do not open `index.html` using a `file://` URL: browsers restrict fetching the chatbot JSON.
No dependency installation or build step is needed for the downloaded source.
Google Fonts require internet; system sans-serif fallbacks work offline.

## Files

```text
index.html              Semantic page, forms, assistant, dialogs
style.css               Visual tokens, layouts, breakpoints, reduced motion
script.js               Icons, navigation, filters, dialogs, forms, chatbot
chatbot-data.json       Editable rule-based knowledge base
assets/
  sonet-portrait.jpg    User-supplied portrait
  project-energy.svg   Original illustrative concept thumbnail
  project-files.svg    Original illustrative concept thumbnail
  project-data.svg     Original illustrative concept thumbnail
  favicon.svg          Site icon
  sonet-cv.pdf          User-supplied CV PDF
  sonet-cv.html         Original printable summary (not used by the download button)
DEVELOPMENT_REPORT.md   Assignment development report
README.md               This guide
```

The Figma Make workspace also retains its original Vite tooling and unused React
scaffold files for host compatibility. `index.html` loads only the vanilla entry
`script.js` and `style.css`. `pnpm build` is the existing workspace build command.
Those workspace-only dependencies are not needed by the ZIP.

## Personalize

- **Photo:** replace `assets/sonet-portrait.jpg`; keep its filename or update both
  portrait references in `index.html`. Adjust `.portrait-frame > img` object position.
- **CV:** the Download CV link downloads the uploaded PDF as
  `Md-Shifat-Hasan-Sonet-CV.pdf`. Replace `assets/sonet-cv.pdf` in the standalone
  folder, or `public/assets/sonet-cv.pdf` in the Figma Make workspace, to update it.
- **Biography, coursework, skills, contacts:** edit the semantic HTML.
  Add grades, semesters, dates, and certifications only when confirmed.
- **Project details:** edit `projectData` in `script.js` and the cards in HTML.
  Repository and demo controls are explicitly disabled until real URLs exist.
  Replace them with accessible anchors to those URLs when published.
  No GitHub username was supplied, so no profile or repository was invented.
- **Knowledge base:** update `topics` in `chatbot-data.json`. Each topic has an ID,
  lowercase keyword tokens, and an answer. Keywords use exact word matches;
  the highest match count wins, ties use file order, and unmatched messages get
  the fallback. This is English keyword retrieval, not semantic or generative AI.
- **Colors and fonts:** edit `:root` tokens in `style.css`.
- **Source download:** the workspace serves the archive from
  `public/sonet-portfolio-source.zip`. For a standalone deployment, add your own
  archive as `sonet-portfolio-source.zip` beside `index.html`. The provided ZIP
  includes this downloadable archive too, without recursive nesting.

## Contact form

Uses native HTML validation plus trimmed-name/message validation in JavaScript.
Submission opens the visitor’s configured email client with a prefilled draft.
It does **not** send, store, or guarantee delivery of messages. If no email
handler is configured, use the displayed address directly.
No backend or third-party service is connected.

## Assistant and privacy

“Sonet AI” is visibly described as a **rule-based portfolio assistant**. It loads
the separate JSON file with `fetch`. Conversations exist only in page memory.
Messages are inserted with `textContent`, not HTML. No secrets or model keys are
present. To upgrade later, replace `getAssistantReply` with a call to your own
secure API, add server-side rate limiting and validation, disclose its provider
and data handling, and keep credentials in server-side environment variables.
Do not put private API keys in this static site.

## Deploy the extracted static folder

### Netlify

1. Sign in and choose **Add new project → Deploy manually**.
2. Drag the extracted folder containing `index.html` into the deployment area.
3. For a Git-based deployment, set no build command and use `.` as publish folder.
4. Verify the JSON and images on the published URL.

### Vercel

1. Push the extracted static files to a repository.
2. Import it in Vercel and choose **Other** as the framework preset.
3. Leave the build command empty and set the output directory to `.`.
4. Deploy. No environment variables or server functions are required.

### GitHub Pages

1. Put the extracted files in a repository, keeping `index.html` at its root.
2. Open **Settings → Pages → Deploy from a branch**.
3. Select the branch and `/(root)`, then save.
4. Open the provided Pages URL once deployment finishes.

All site links are relative and support a repository subpath. If publishing the
full Figma Vite workspace rather than the standalone ZIP, build with `pnpm build`
and deploy `dist`; configure Vite's `base` for a GitHub repository subpath.

## Manual review checklist

- Check narrow and wide viewports, portrait crop, card wrapping, and chat height.
- Use keyboard navigation, menu, Enter-to-send, Escape-to-close, and dialog focus.
- Try all project filters and details. Confirm concepts are not labeled complete.
- Ask the assistant all seven requested question types, unknown input, and HTML.
- Submit invalid, whitespace-only, and valid form inputs; verify draft wording.
- Test CV and ZIP downloads and your real social/contact links.
- Enable reduced motion and disable network access to check font fallbacks.
- Run an accessibility audit and test on real Android and iOS devices before launch.

These are instructions, not claims that every manual test has been performed.
