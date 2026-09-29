# Career data

Private source of truth for job applications.

- `resume.json`: structured CV following the [JSON Resume schema](https://jsonresume.org/schema). Everything factual lives here: roles, dates, highlights, education, skills, languages, certificates, projects.
- `notes.md`: what the schema can't hold: target roles and constraints, STAR achievement stories, positioning, things to leave out, style rules, application log.
- `applications/<yyyy-mm>-<company>/`: one folder per application (`job.md` with role, deadline, angle and gaps; the tailored CV PDF; the cover letter PDF). PDFs are tracked here only.
- `cover-letters/`: Markdown source of every letter sent, plus `TEMPLATE.md`. The `.md` is the version of record; the PDF in `applications/` is the rendering.
- `interview-prep.md`: coding gap plan, behavioural anchors, system-design examples, standard answers.
- `render/`: turns `resume.json` into HTML and PDF.

## Render

```bash
cd render
npm install
npm run build      # validate + HTML + PDF -> render/out/resume.pdf
npm run validate   # schema check only
```

PDF printing uses the Chrome or Chromium already on the machine (set `CHROME_PATH` to override). Node 20 or newer. The rendered file is the full record, several pages long; the one-page CVs sent to employers are hand-tailored and live in `applications/`.

Contracts, payslips and performance reviews are deliberately not in this repo.
