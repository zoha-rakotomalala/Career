# Career notes (companion to resume.json)

Things that don't fit the schema but matter when tailoring an application.
Lines marked `TODO` need my own answer. Everything else is verified against reviews, CVs or past applications.

## Target
- Roles / titles I'm after: Software Development Engineer (backend, distributed systems, AWS), Applied AI Engineer (agents, MCP, developer tooling), scientific software developer. Open to hybrid science-and-tech roles (CERN, OECD, French diplomatic science network).
- Industries I prefer / avoid: prefer science, research institutions, public interest, AI labs, developer tools. Avoid: more fee-pricing plumbing; roles where the work is pure maintenance.
- Location / remote / relocation: based in Paris. Will relocate for the right role (Geneva, Tokyo, London considered in 2026). Remote or hybrid welcome.
- Salary range and currency: TODO. Current base in EUR; check latest payslip before quoting.
- Start availability: TODO. French CDI, notice period applies (check contract: `Employment/` folder, kept outside this repo).
- Visa / work authorisation: French national. EU/EEA and Switzerland without sponsorship. UK, US, Japan need sponsorship or a specific scheme (VIA for Japan, age-eligible until 28).

## Achievement stories (STAR: situation, task, action, result)
Use these for cover letters and interview prep. One per heading.

### Story 1: Regional-exit migration workstream (Amazon, 2026)
- Situation: 2026 program to exit a legacy AWS region for the cross-marketplace pricing services.
- Task: Own a migration workstream: 4 backend services plus one legacy data-warehouse cluster.
- Action: Re-platformed fee computation onto a centralized fee engine; built reusable cross-region networking CDK constructs so later migrations became configuration changes; used AI coding agents with earlier migrations as context to run migrations in parallel.
- Result (with numbers): region footprint cut 82%; infrastructure run-rate down about $48K/year; delivered one month ahead of target; per-migration effort down about 26%.
- Skills it demonstrates: AWS/CDK, migration planning, ownership, AI-assisted engineering, delivery under a deadline.

### Story 2: Correction of Error after the Spain Omnibus launch (Amazon, 2024-2025)
- Situation: Legal-compliance incident on the Omnibus directive feature during the Spain launch.
- Task: Author the Correction of Error (post-mortem) and lead mitigation.
- Action: Root-cause analysis across interconnected systems; wrote the COE; drove mitigation items to resolution.
- Result (with numbers): incident closed with all action items resolved; feature expansion continued to Ireland.
- Skills it demonstrates: incident analysis, writing, cross-system debugging, follow-through.

### Story 3: GenAI and MCP enablement (Amazon, 2025-2026)
- Situation: Team and org adopting AI coding agents unevenly.
- Task: Make agent workflows usable for other engineers.
- Action: Internal conference talk on Model Context Protocol; recurring hands-on sessions; live demos; reusable migration-by-example templates; published an internal AI agent (career-doc drafting, human-in-the-loop).
- Result (with numbers): 40+ engineers reached; about 27 hours of engineering effort saved; templates reused by other teams.
- Skills it demonstrates: teaching, developer empathy, MCP/agent design, communication.

### Story 4: Price Tracker marketplace expansions and on-call (Amazon, 2024-2025)
- Situation: Price Tracker feature needed to reach new marketplaces; production systems needed on-call coverage.
- Task: Coordinate configuration and deployment across marketplaces; hold on-call.
- Action: Enabled 8 marketplace expansions (JP, CA, AE, IN, MX, ES, IE, IT); resolved 15+ production incidents.
- Result (with numbers): 8 marketplaces live; 15+ incidents resolved, none self-caused; pipeline health 92% against an 85% target.
- Skills it demonstrates: operational excellence, reliability, coordination.

### Story 5: Foreign-key relation graph feature (Dataiku, 2023)
- Situation: Users could not see how database tables related to each other inside the product.
- Task: Build the feature end to end as an intern.
- Action: Indexed keys via JDBC into ElasticSearch, generated the graph in Java with Graphviz, built the Angular component with expand/collapse, zoom/pan, clustering, state persistence.
- Result (with numbers): about 1900 lines shipped; video demo at https://youtu.be/55iVW6ja0eQ
- Skills it demonstrates: fullstack delivery, autonomy, UI work.

### Story 6: Palette (personal project, 2025-)
- Situation: I wanted one place to search paintings across museum collections.
- Task: Build and ship a cross-platform app alone.
- Action: React Native/TypeScript; 14 museum APIs; offline-first with cloud sync (Supabase, Zustand, MMKV, operation queue with conflict resolution); CI test suite; built with AI coding agents end to end.
- Result (with numbers): live at https://zoha-rakotomalala.github.io/Mithra/ ; 14 APIs integrated.
- Skills it demonstrates: product ownership, mobile, sync architecture, AI-assisted development.

## Positioning
- How I describe myself in one sentence: Studied business, taught myself software engineering, and haven't looked back. Business-school graduate (EDHEC, Berkeley Haas, SKKU) who moved from data-analyst internships into SDE at Amazon, and uses AI coding agents daily.
- Strengths recruiters should notice first: delivery with numbers (82%, $48K/yr, 26%, 8 marketplaces, 92% pipeline health); AWS and CDK; AI agents and MCP in real production work; communicator (talks, sessions, mentoring); strong behavioural interviews.
- Gaps / weak spots and how I frame them:
  - No CS degree: frame as deliberate self-teaching (prépa MPSI/MP maths base, every CS course available at Berkeley, Franche-Comté audit) plus 2+ years shipping at Amazon.
  - Independent coding under time pressure and edge-case coverage (Google Stage 1 feedback, Sept 2026): trainable; daily LeetCode with no-hint mode and explicit edge-case enumeration.
  - Modern C++ is coursework-level and rusty: say so plainly when required (CERN).
  - No research track (no PhD, no papers, no PyTorch/JAX): do not apply to research roles as if I had one; strongest real ML credential is the loan-default decision tree (recall 0.29 to 0.55).
  - No startup founding or public devrel track record: talks are internal; say so.
- Career changes or breaks and how I explain them: business school to engineering was a choice, not a fallback. I took every data/CS course available, did a distance CS audit alongside the master, went from analyst internships to a software engineering internship at Dataiku, then to Amazon. No breaks.

## Do not include
- The 30M EUR revenue claim (aspirational draft only) and the 2B USD Badging project (cancelled). Never.
- Colleague names in body text; role-only attributions.
- The disclosure-mandate reference implementation (private, not yet public). Keep off CVs until I decide to publish.
- Employment contracts, payslips, performance reviews. They stay in `~/Career/Employment` and `~/Career/Reviews`, never in this repo.
- The HR novation matter. Personal.
- Em-dashes. They read as AI-generated. Use colons, commas or a new sentence.

## Style preferences
- Tone (formal / conversational): plain and natural, form-box voice. Short sentences. No literary metaphors. First person where the format allows.
- CV length limit: one page, always. Verify the PDF page count before sending.
- Language(s) to write applications in: English by default; French for French institutions (MEAE, French public sector). Keep English tech terms in French CVs.
- File naming: `Zoha_Rakotomalala_CV_<Company>_<Month>_<Year>.pdf`. French institutions may impose their own (e.g. `RAKOTOMALALA Zoha CV.pdf`).
- Skills section: reuse the three rows from the general CV (Cloud & DevOps, Programming, Languages), add an AI Engineering row for AI roles. Do not invent rows.
- Education: keep "Haas School of Business, University of California, Berkeley" for GETT.

## Application log
| Date | Company | Role | Status | Notes |
|------|---------|------|--------|-------|
| 2026-08-24 | Google (YouTube Knowledge, Paris) | Software Engineer | Rejected 2026-09-03 (Stage 1) | Feedback: independent coding, solution edge cases. Re-apply eligible ~2027-08 (12-month cooldown). |
| 2026-08 | OpenAI | Codex Core Agent | Rejected 2026-09-03 | No feedback. |
| 2026-08 | OpenAI (London) | Engineer | Rejected 2026-09-03 | No feedback. |
| 2026-09 | Disney | Software Engineer | CV ready (TODO: submitted?) | `applications/2026-09-disney/` |
| 2026-09 | OECD | Software Engineer | CV ready (TODO: submitted?) | `applications/2026-09-oecd/` |
| 2026-09-17 | Meta FAIR | PhD Research Assistant (3-year) | CV ready (TODO: submitted?) | Structural stretch: requires PhD enrollment and research signal. |
| 2026-09-19 | MEAE, Ambassade de France au Japon (VIA) | Chargée de mission scientifique, Tokyo, Jan 2027 | Docs ready (TODO: submitted on mon-vie-via?) | French CV + LM. Business France ID V255667263. Start collides with CERN. |
| 2026-09-21 | CERN (EP-CMS-TDQ-2026-153-GRAP) | CMS Software Developer, Geneva, 24 months | Docs ready, deadline 2026-10-11 (TODO: submit) | Modern C++ required; gap stated honestly. Target start 2027-01-01. |
| 2026-09-24 | OpenAI | Applied AI Engineer, Codex for startups | CV ready (TODO: submitted?) | Devrel-heavy. Different profile from the two rejected roles. |
