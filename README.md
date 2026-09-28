# Career data

Private source of truth for job applications.

- `resume.json` — structured CV following the [JSON Resume schema](https://jsonresume.org/schema). Everything factual lives here: roles, dates, highlights, education, skills, languages, certificates.
- `notes.md` — what the schema can't hold: target roles and constraints, STAR achievement stories, positioning, things to leave out, application log.
- `applications/` — one folder per application (tailored CV, cover letter, job description), created as needed.

Render `resume.json` to HTML/PDF with any JSON Resume theme, e.g. `npx resumed render resume.json --theme jsonresume-theme-even`.
