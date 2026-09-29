# Google Recruiter Screen: Prep Doc

**Role:** Software Engineer III, YouTube Knowledge: Paris (Google L4 / mid-level)
**Recruiter:** Michał Lasota, Staffing Specialist, Randstad Sourceright (Supporting Google)
**Call type:** Introductory recruiter screen: NO coding, NO algorithms. Motivations + logistics only.

---

## 0. Reality check (read this when you spiral)

- Google "SWE III" = **L4 = mid-level**. The posting literally says "Mid" and asks for **2 years experience**. You clear the minimum bar comfortably.
- Google L4 ≈ Amazon L5 (SDE II). Vs your Amazon L4, this is **at-level or a step up**, not a downlevel.
- The recruiter read your resume and *chose to call you*. That is data. Your panic is not.
- This call = "are you real, are you motivated, do logistics work." That is all. The technical loop is weeks away and gets its own prep.

---

## 1. Your 2-minute background pitch (script)

> "I'm a software engineer at Amazon, based in Paris, on the Cross-Marketplace Pricing team within Xenos: we own how Amazon computes net proceeds and fees across marketplaces, which is high-throughput, correctness-critical backend work.
>
> Most of my impact has been on large-scale backend systems and migrations. My signature project was a cross-region migration of our pricing and tax-accessor services from Dublin to a new region, where I also drove a Redshift descale that cut our data footprint by around 15% and saved roughly €135K a year. I currently own the migration of our fees pipeline onto a new gateway service: that's Java backend work with a strong focus on parity guarantees and shadow testing before cutover.
>
> Beyond feature work, I do production on-call, I've handled 15+ incidents, and I raised our pipeline health from around 85% to 92%. I also led our team's adoption of GenAI and MCP-based tooling: I rolled that out to 40+ engineers and it's saved measurable engineering hours.
>
> On the ML side, I've built a supervised classifier on ~200K real loan records where I lifted recall on the target class from 0.29 to 0.55, and I'm certified on Dataiku. So I'm a backend/infra engineer who's genuinely moving toward ML and data-scale problems: which is exactly why the YouTube Knowledge team caught my attention."

**Delivery notes:** ~90-120 seconds spoken. Lead with what you *build*, land one metric per project, end by tying yourself to *this* team. Don't recite your whole resume: leave hooks for him to ask.

---

## 2. Core answers to have ready

**Why Google / why this team (YouTube Knowledge)?**
- Working on understanding and organizing YouTube's corpus at massive scale: Search, Recommendations, GenAI features. It sits exactly at the intersection of my backend/infra strength and where I want to grow (ML, LLMs, data at scale).
- I've spent years on correctness-critical backend systems; I want to apply that rigor to data-and-ML-heavy products with global reach.

**Why leave Amazon?** (stay positive: never trash Amazon)
- Strong foundation at Amazon in backend, migrations, and operational excellence. Looking for the next step where I go deeper into ML/data-scale problems, and YouTube Knowledge is a direct fit.

**Comp expectations?** (if asked: don't over-commit)
- "I'd like to understand the full package, but the posted range looks aligned with my expectations." (Posted: €82-84.5K base + 15% bonus + equity + benefits.)

**Notice period / start date?**
- [CONFIRM: French CDI cadre notice is typically 3 months. State your real notice.] Frame as flexible.

**Hybrid 3 days/week in Paris: OK?**
- Yes, Paris-based, hybrid is fine.

**Timeline / other processes?**
- Be honest that you have other things in flight if pressed, but you don't need to volunteer Air France/ESA. Keep focus on genuine interest here.

---

## 3. Questions to ASK Michał (pick 3-4)

1. "What does the full interview process and timeline look like from here?"
2. "What languages and tech does YouTube Knowledge actually use day-to-day?" *(tells you how much C++/Python prep matters)*
3. "What would the first 6-12 months on the team look like?"
4. "How does Google's SWE III level map to my experience: how is level calibrated?"
5. "What does success look like on this team at this level?"
6. "Is there flexibility on start date given my notice period?"
7. "What's the team's split between infra work and ML/data work?"

---

## 4. Logistics checklist (before the call)

- [ ] Book slot via "Google chat with Michał" link (or reply with availability).
- [ ] Quiet room, headset, stable connection, water.
- [ ] Have your resume open in front of you.
- [ ] Re-read the job posting once (YouTube Knowledge: Kapla, semantic content understanding, Knowledge Platform, GenAI).
- [ ] Confirm your real notice period.
- [ ] Have 3-4 questions from §3 written down.

---

## 5. Don'ts

- Don't trash-talk Amazon.
- Don't overclaim ML depth: you're a backend engineer moving toward ML. That honest framing is your strength (same lesson as the ESA application).
- Don't negotiate hard on the recruiter screen: this is rapport + fit, not the offer stage.
- Don't spiral about the technical loop on this call. Wrong step.

---

## 6. The technical loop (LATER: not this call)

When the loop is scheduled, prep separately:
- **DS&A** in Python (Google interviews are language-agnostic but Python is cleanest for coding rounds).
- Google-style coding: 2 problems / 45 min, focus on data structures, complexity, clean code, communication.
- System design (lighter at L4 but possible).
- "Googleyness" + behavioral round.
- The C++/Python line in the posting is a *preference*: confirm on the call how much it matters day-to-day.
