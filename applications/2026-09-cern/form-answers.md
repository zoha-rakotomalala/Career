---
company: CERN
reference: EP-CMS-TDQ-2026-153-GRAP
date_drafted: 2026-09-21
source: recovered from chat history dashboard_chat-58-1790014931
---

# CERN application form answers

## Q1. What is your motivation for applying for this job? (max. 1440 char.)

My background is a bit unusual. I started in maths and physics, two years of prépa (MPSI/MP), then went to business school, missed the technical side, and taught myself software engineering until Amazon hired me as a software development engineer. Physics is where I started, and CERN is honestly the place where I would most want my engineering work to be useful.

The day-to-day of the role is close to what I already do. I build and operate backend services in production: configuration and control paths, monitoring and alerting, and I'm on-call for what I ship. This year I moved our fee computation onto a new centralized engine, and we validated it by running the new implementation in shadow against the legacy system at production scale before switching over. From what I understand, that is close to how the Phase-2 DAQ system will be tested and scaled up between now and 2028, and it's the part of the job I'm most confident about.

To be transparent about the gap: my C++ comes from coursework, and bringing it up to a modern professional level would be my first priority. I've closed this kind of gap before: I learned software engineering itself that way. Practically: I'm a French national, fluent in English, and available for a January 2027 start in Geneva.

Characters: 1274 / 1440

## Q2. Describe one or two of the largest software projects with significant Python and/or C++ components that you have worked on in the last two years. What was your role in these projects? If CI/CD was used, please provide details of the tools and processes involved. If possible, include links to repositories or documentation. (max. 1440 char.)

I want to be upfront: my two largest recent projects are primarily Java, with Python used for tooling and automation around them. I have not shipped a C++ project in the last two years: my C++ dates from coursework and I am actively bringing it back to modern standard.

(1) Regional-exit migration (2026): I owned a workstream moving four production pricing services off a legacy AWS region and deprecating a legacy data-warehouse cluster. I designed the target architecture, built reusable cross-region networking infrastructure-as-code, and delivered a month ahead of target, cutting infrastructure run-rate ~$48K/year. Python served for migration and verification scripting.

(2) Fee-computation re-platform (2026): I migrated fee calculation onto a new centralized fee engine, validating parity by shadow-running the new implementation against the legacy system at production scale and diffing outputs before cutover.

CI/CD on both: trunk-based development with mandatory code review, per-service continuous-deployment pipelines with automated unit/integration test and coverage gates, staged environments (beta → gamma → prod) and automatic rollback on alarm breach. These repositories are internal to Amazon; a public example of a CI setup I built is my personal project: https://github.com/zoha-rakotomalala/Mithra (GitHub Actions, full test suite on every push).

Characters: 1372 / 1440

## Q3. How would you rate your experience in developing web applications and user interfaces on a scale of 1 to 10? If you have worked with JavaScript and/or TypeScript, please briefly describe the project(s). If you have used high-level frameworks, please provide some details. If possible, include links to repositories or documentation. (max. 1440 char.)

I would rate myself 7/10: I have shipped real user-facing interfaces in production, but backend systems are my center of gravity.

TypeScript/React Native: my personal project Palette, an iOS/Android app searching paintings across 14 museum APIs, with an offline-first architecture (Supabase auth and Postgres, Zustand and MMKV storage, an offline operation queue with conflict resolution) and a full test suite in CI on GitHub Actions. Repository: https://github.com/zoha-rakotomalala/Mithra, site: https://zoha-rakotomalala.github.io/Mithra/

Angular: at Dataiku I built a 1,900-line feature end to end: indexing primary/foreign keys via JDBC, generating relation graphs with Graphviz, and an Angular component to open and navigate the graph in a modal (demo: https://youtu.be/55iVW6ja0eQ).

At Amazon I redesigned a core customer-facing UI element to scale across marketplaces and languages, and I have shipped REST-based interfaces between services throughout. I am comfortable picking up whichever framework the TCDS control interfaces use.

Characters: 1045 / 1440

## Q4. If you have worked on system software or hardware-facing software components, please provide a brief description of the project, the hardware involved, the challenges encountered, and how you addressed them. (max. 1440 char.)

I have not yet worked against custom electronics or hardware-facing components, and I prefer to say that plainly rather than stretch a cloud analogy. The closest I have come is system-level operations work: running production services on Linux, debugging latency and failure modes down through the networking layer, and building the cross-region network infrastructure my team's services run on. My prépa curriculum (MPSI engineering sciences) gave me the physics-side foundations. I expect the hardware interaction model (registers, links, timing) to be the steepest part of my learning curve, and it is one of the reasons this role attracts me rather than a reason to avoid it.

Characters: 679 / 1440

## Q5. Are you familiar with hardware description languages?

No. I have not used VHDL or Verilog. I understand their role in the FPGA platforms the TCDS runs on, and I would welcome the exposure, but I will not claim familiarity I do not have.

(If the field is a yes/no dropdown: answer No.)

Characters: 182

---

Footer: Q1 is the rephrased version the user accepted after rejecting the first draft as "not natural at all". Q2 to Q5 were never revised in the session; they are the original drafts. Em-dashes in the recovered text were replaced as follows: Q1 (2: one comma, one colon), Q2 (1: colon), Q3 (2: one comma, one colon), Q4 (1: parentheses), Q5 (1: comma). Q3 rating of 7/10 was the agent's suggestion; the user did not change it in the session.
