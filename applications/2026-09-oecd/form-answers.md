---
company: OECD / Nuclear Energy Agency (NEA) Data Bank
role: Software Engineer (Computer Program Service modernisation)
date_drafted: 2026-09-14
source: recovered from chat history dashboard_chat-37-1788943079
---

# OECD / NEA form answers (final accepted versions)

## Message to the Hiring Team

Question as asked: "Message to the Hiring Team. Let the company know about your interest working there."

I am applying for the Software Engineer position at the NEA Data Bank because it brings together the three things I most want in my work: solid engineering, a scientific context, and a mission that serves the public.

My background is in data and backend systems. As a data analyst I worked daily with relational databases (PostgreSQL, SQL Server, Amazon Redshift), built and maintained data pipelines, and turned raw data into models and decisions for the teams I supported. As a software engineer at Amazon I moved into backend and infrastructure work: I modernized legacy pricing services, re-implemented legacy logic onto a new engine while preserving its behavior, and delivered a regional migration with measurable cost and footprint reductions. This is close to what the Computer Program Service needs: careful modernization of critical code, strong database and SQL work, CI/CD, containers, and software built to last and to be supported for years.

I am also at ease in scientific environments. I completed two years of French classes préparatoires (MPSI then MP) in mathematics, physics, chemistry, and engineering science, so working alongside scientists on nuclear codes and data feels natural to me rather than foreign. I also benefited from my business school experience which allows me to be a good communicator and a great teamplayer.

What draws me most is impact. I want my engineering to serve society, not only commercial metrics, and the NEA's mission of a safe, peaceful, and well-documented use of nuclear energy is exactly that kind of work. I am a native French speaker, fluent in English, and I do my best work in international, multicultural teams.

I would be glad to bring this mix of data, backend engineering, and scientific curiosity to the Data Bank.

Character count: 1783

## API implementation

Question as asked: "If you have experience with API implementation, please describe your experience with examples (max 1440 chars)."

I have both built and consumed APIs.

My most relevant example is at Dataiku where I implemented the backend API for a table-relationship feature: the Angular/TypeScript front end called my endpoint while providing some data, the backend ran an algorithm that built a Graphviz template and generated an SVG in Java, returned the SVG, and the front end then processed and rendered it interactively. Behind that API I also indexed primary and foreign keys via JDBC into an ElasticSearch store.

I also interact with APIs regularly: At Amazon I design and consume internal service APIs daily in backend work on pricing services, including re-platforming fee computation behind a new centralized service interface.

On a personal project (Palette, a React Native app) I integrated multiple external REST museum APIs plus a Supabase backend, normalizing very different responses into a single data model with offline caching.

As a data analyst at Spark.do and Dashlane I used the Metabase and Airtable REST APIs to automate reporting pipelines and interacted daily with APIs from ad platforms such as Meta or Google Ads via dbt.

Across these I have worked with REST request and response design, JSON payloads, authentication, error handling, and integrating third-party APIs behind one consistent interface.

Character count: 1304

## Technologies: React / TypeScript, PostgreSQL, CI/CD Workflows

Question as asked: "Describe your experience with each of the technologies you identified in the previous question, with examples (max 1440 chars)." (Technologies ticked: React / Typescript, PostgreSQL, CI/CD Workflows.)

I've worked with all three, mostly hands-on rather than in theory.

For React and TypeScript, my main project is Palette, a cross-platform React Native app I built in TypeScript, with typed navigation, services and state. Before that, at Dataiku, I wrote the front end in Angular and TypeScript to render and manipulate generated SVG graphs, so TypeScript has been my default for typed front-end work for a while.

PostgreSQL I know from both sides: Palette runs on a PostgreSQL backend (via Supabase) with offline sync and conflict resolution, and as a data analyst at Spark.do I was in PostgreSQL every day, writing queries to build and validate KPIs and to track down bugs in reporting pipelines.

As for CI/CD, at Amazon I ship through automated build, test and deployment pipelines that run tests and static analysis before anything goes out. On Palette I set up GitHub Actions to run the full test suite on every push and pull request, so I catch regressions before they reach me.

Character count: 986

## Containerisation

Question as asked: "Describe your experience with containerisation of applications (Docker, Apptainer, Singularity, etc.), with examples (max 1440 chars)."

Docker is the one I actually use. I reach for it to package applications and to get consistent build and runtime environments across machines, instead of installing everything directly and hoping it matches. At Amazon our services are built and deployed as containerized units through internal pipelines, so container images and their config are part of my normal backend and deployment work. Locally I use Docker to spin up services with their dependencies (databases, caches) in clean, repeatable setups.

I haven't used Apptainer or Singularity yet, but I understand they bring that same isolation and reproducibility to HPC and shared scientific environments, and the Docker ideas I rely on (images, layers, reproducible builds, resource isolation) carry over directly. I'd get up to speed on them quickly in the Data Bank's context.

Character count: 837

## Suitability for an independent ownership role

Question as asked: "This position involves working largely independently to develop a software platform with guidance from a product owner and occasional support from senior technical staff. The successful candidate will be expected to take ownership of design, implementation, testing, documentation and deployment activities, while remaining accountable for technical decisions and seeking clarification when needed. Explain, with examples, why you think you are suitable for this type of role (max 1440 chars)."

Honestly, this is already how I like to work.

In my current role I owned a migration workstream from end to end: I designed the approach, implemented and tested it, deployed it, and stayed accountable for the technical calls along the way, and it landed a month ahead of target. When a production incident came up, I authored the Correction of Error myself, digging into the root cause across systems and driving the fix.

I also build things on my own from scratch. I designed, built, tested, documented and published Barrow, a reusable internal tool, including its automated build-and-release pipeline, and my side project Palette I own completely, from the architecture down to CI and docs.

What keeps that from going sideways is judgment: I'm happy to make and defend technical decisions, but when requirements or trade-offs are unclear I ask the product owner or a senior engineer early rather than guessing, and I document as I go so the work can be supported long after I've moved on.

Character count: 993

---
Footer: No em-dashes were present in the recovered text; nothing replaced. The Message to the Hiring Team is Zoha's own pasted version (final per her edit). The assistant had suggested, but she did not confirm, replacing "which allows me to be a good communicator and a great teamplayer" with "My business-school background also makes me a clear communicator and a strong team player, comfortable working across technical and non-technical audiences." The three technical answers are the last iteration (rewritten in her voice at her request); the API answer is her own tweaked version. Character counts are measured on the recovered text (the session reported one more character per answer, likely a trailing newline).
