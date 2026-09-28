# Career data

Private source of truth for job applications.

- `resume.json`: structured CV following the [JSON Resume schema](https://jsonresume.org/schema). Everything factual lives here: roles, dates, highlights, education, skills, languages, certificates, projects.
- `notes.md`: what the schema can't hold: target roles and constraints, STAR achievement stories, positioning, things to leave out, style rules, application log.
- `applications/<yyyy-mm>-<company>/`: one folder per application (tailored CV PDF, cover letter, job description when saved). PDFs are tracked here only.

Render `resume.json` to HTML/PDF with any JSON Resume theme, e.g. `npx resumed render resume.json --theme jsonresume-theme-even`.

Contracts, payslips and performance reviews are deliberately not in this repo.
