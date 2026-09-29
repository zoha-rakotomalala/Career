# Google SWE III (L4): Technical Loop Study Plan

**Role:** Software Engineer III, YouTube Knowledge, Paris
**Source of truth:** Recruiter prep email (Libby Williams, Randstad/Google): friend's copy, same process.

---

## THE LOOP (confirmed from the email)

**Round 1 (Hiring team):**
- 1 × Coding / DSA (45 min)
- 1 × Googleyness & Leadership (45 min)

**Round 2:**
- 2 × Coding / DSA (45 min each)

**Total: 3 coding interviews + 1 behavioral.** No dedicated system-design round (normal for L4). This is a *pure DSA + behavioral* loop. That narrows your prep enormously: focus 75% on coding, 25% on behavioral.

**Hard rule from Google:** No AI during interviews = instant DQ. My prep help is fine; live use is not. Practice as if unassisted.

---

## LANGUAGE CHOICE

Use **Java**: it's what you write daily at Amazon, so you'll produce clean, bug-free, compilable code under pressure. That is exactly Google's bar ("real code, works in a compiler, no pseudo-code"). Python is more concise but only pick it if you're genuinely fluent in it for algorithms. **Fluency beats conciseness.** Tell the recruiter your language on the call so it's on record.

---

## WHAT THEY TEST (from the email, decoded)

| Area | Priority | What it really means |
|---|---|---|
| Arrays / Strings / HashMaps | 🔴 Must | Highest frequency. Two pointers, sliding window, frequency maps. |
| Trees (binary, BST, traversal) | 🔴 Must | Email emphasizes. DFS/BFS, insert/delete, LCA, level-order. |
| Graphs (BFS/DFS, Dijkstra, A*) | 🔴 Must | Google LOVES graphs. Email explicitly names Dijkstra + A*. |
| Heaps / Priority Queues | 🔴 Must | Top-K, merge-K, scheduling. |
| Recursion / Backtracking | 🟠 High | Permutations, combinations, subsets. |
| Binary Search | 🟠 High | On arrays AND on answer space. |
| Big-O analysis | 🔴 Must | Every problem. State time+space every time. |
| Tries | 🟠 High | Email names trie-trees. Prefix problems. |
| Dynamic Programming | 🟡 Medium | Google asks medium DP. Know the patterns, not every problem. |
| Balanced BST (red-black/AVL) | 🟢 Understand | Email mentions: you must *explain* how one works, NOT implement from scratch under pressure. |
| NP-complete (TSP, knapsack) | 🟢 Recognize | Know what NP-complete means, recognize the classics "in disguise." Discussion, not optimal solving. |

**Reassurance:** You will NOT be asked to implement a red-black tree from scratch or solve TSP optimally. You need to *recognize and discuss* those. The actual coding is arrays/strings/trees/graphs/heaps: learnable, pattern-based.

---

## STUDY PLAN (phased)

### Phase 0: Setup (this week)
- [ ] Book the recruiter call; confirm coding language (Java).
- [ ] **Ask the recruiter for the loop timeline** (critical: see calendar conflict below).
- [ ] Create a LeetCode account. Get the **NeetCode 150** list open.
- [ ] Skim the email's resources: Interview Prep Guide, "Prepare for your Google Interview: Coding" video.

### Phase 1: Foundations (pattern learning)
Work **NeetCode 150 by category**, in this order. Don't grind randomly: learn the *pattern*, then do 5-8 problems in it.
1. Arrays & Hashing
2. Two Pointers + Sliding Window
3. Stack
4. Binary Search
5. Linked List
6. Trees (this is big: spend extra time)
7. Tries
8. Heap / Priority Queue
9. Backtracking
10. Graphs (big: BFS/DFS/Dijkstra/topological sort)
11. 1-D + 2-D Dynamic Programming
12. Intervals + Greedy

### Phase 2: Volume + timing
- Do **Google-tagged** LeetCode problems (filter by company = Google, last 6-12 months).
- Mix Medium (80%) + a few Hard (20%). L4 is mostly Mediums.
- **45-minute timer on every problem.** Simulate pressure. Talk out loud (record yourself).

### Phase 3: Mocks
- Do 4-6 full mock interviews (pramp.com, interviewing.io, or a friend).
- Practice the FULL ritual: clarify → confirm assumptions → brute force → optimize → code → test with edge cases → state Big-O.

### Throughout: Behavioral (see below)
- 20 min/day writing STAR stories. Don't cram this at the end.

---

## THE INTERVIEW RITUAL (drill this until automatic)
1. **Clarify** the problem. Ask about input size, types, constraints, edge cases.
2. **State assumptions** out loud and confirm with interviewer.
3. **Brute force first**, state its Big-O.
4. **Optimize**: explain the improvement before coding.
5. **Code cleanly**: real, compilable, good names, no pseudo-code.
6. **Test**: walk through with a normal case + edge cases (empty, null, single, duplicates, overflow).
7. **State final Big-O** (time + space).
8. **Think out loud the entire time.** Silence = they can't score you. Receptive to hints = good signal.

---

## GOOGLEYNESS & LEADERSHIP (45 min: don't neglect this)

The email's tip is gold: you can anticipate ~90%. Write the **top 20 common questions, 3 detailed, data-driven answers each**, in **STAR format** (Situation, Task, Action, Result).

**Your raw material (map these to questions):**
- **Leadership without a title:** Led team adoption of GenAI/MCP tooling → rolled out to **40+ engineers**, saved measurable hours.
- **Navigating ambiguity:** Owning the FGS (FeesGatewayService) migration: parity guarantees, shadow testing before cutover, no playbook.
- **Big technical impact:** DARU cross-region migration (Dublin → new region) + Redshift descale, **~15% footprint cut, ~€135K/year**.
- **Helping a team succeed:** Production on-call, **15+ incidents** handled, raised pipeline health **85% → 92%**.
- **Growth outside comfort zone:** Pivoting toward ML/data (Nomis classifier, recall 0.29 → 0.55; Dataiku cert).
- **Mobilizing others / communication:** The networking KSS you designed and led.

**Themes Google scores:** communication, decision-making, mobilizing others, navigating ambiguity, teamwork, self-driven growth. Every story should end in a **measurable result**.

---

## RESOURCES
- **Primary:** NeetCode 150 (neetcode.io) + LeetCode (Google company tag).
- **Book:** Cracking the Coding Interview (Gayle McDowell): for concepts + behavioral.
- **From Google's email:** Interview Prep Guide, Tech Dev Guide, Google Testing Blog, the coding-interview videos.
- **Mocks:** pramp.com (free peer mocks), interviewing.io.
- **Big-O refresher:** bigocheatsheet.com.

---

## ⚠️ CALENDAR REALITY (read this)
Your live calendar is stacked:
- **Vacation:** Jul 29 - Aug 16.
- **Air France PSY0 crunch:** Aug 17 - Sept 3 (PSY0 tests Sept 4-5). Mental-arithmetic reps are the priority there.
- Plus FGS pilot deadline was Jul 31 (work).

A Google loop typically lands **4-8 weeks** after the recruiter screen. That could collide head-on with Air France PSY0 prep. **On the recruiter call, ask for the timeline and, if needed, request scheduling the loop for later September** to avoid cannibalizing both. You can pace a Google loop; you cannot re-take PSY0 on demand. Decide consciously which gets the crunch window: don't let them silently overlap.
