---
company: Meta, Fundamental AI Research (FAIR)
role: AI Research Assistant (PhD), 3-year fixed-term
date_drafted: 2026-09-17
source: recovered from chat history dashboard_chat-37-1788943079
---

# Meta FAIR form answers (final drafted versions, no character limit was given)

## 1. Daily AI tooling

Question as asked: "How do you leverage AI tools in your daily engineering workflows? Please provide specific examples of the AI-related tools, libraries, or platforms you use and how you use them."

AI tools are part of how I work every day, mostly as coding and reasoning partners rather than as a novelty.

My main tools are AI coding agents: Claude, Kiro, and Amazon's internal agentic tooling. The clearest example is my current work on backend migrations. Instead of doing each migration by hand, I give an agent an earlier completed migration as context and have it draft the next one, then I review, correct, and validate the result. Running several in parallel this way cut my per-migration effort by about 26 percent. I keep an engineer (me) on the parts agents are weak at: dependency discovery, edge cases, and cross-validation against the real system.

I also use agents for code review, for drafting tests and documentation, and for exploring unfamiliar codebases quickly. I lean on the Model Context Protocol (MCP) to connect agents to the tools and data they need, rather than copy-pasting context by hand. I treat every AI output as a draft to verify, not an answer to trust.

Character count: 992

## 2. AI-native project (Barrow) and responsible design

Question as asked: "Have you worked on projects where AI was central to either the architecture or main functionality (i.e., AI-Native)? If so, how did you approach designing the AI-Native solution responsibly, and what unique challenges did you encounter?"

Yes. I built and published Barrow, a reusable AI agent that drafts and maintains an engineer's career documents from their actual work history (code reviews, tickets, commits). AI is the core of it, not a feature bolted on: the agent reads your real contributions and writes honest, mapped entries. It is packaged for one-command install and backed by an automated build-and-release pipeline.

The main responsibility challenge was honesty. A career-doc agent has every incentive to inflate, and a language model will happily overclaim if you let it. So I designed it to ground every entry in real, verifiable sources rather than generate impressive-sounding prose, and I kept a human in the loop: it drafts, but it never submits or publishes on the person's behalf. The hardest problems were exactly the AI-native ones: keeping outputs grounded, avoiding fabrication, and making the agent say "I don't have evidence for this" instead of inventing it.

Character count: 951

## 3. Evaluating quality and reliability of AI output

Question as asked: "How do you evaluate the quality and reliability of AI technologies and their output? What tools or metrics do you use?"

I evaluate AI output differently depending on whether it is a model or an agent.

For machine-learning models, I use standard metrics tied to the goal. On a loan-default classifier, the right measure was recall, not raw accuracy, because missing a default is the costly error. Feature engineering and threshold tuning took recall from 0.29 to 0.55, and I read precision and recall together to make sure I was not just trading one error for another.

For AI agent output in my engineering work, my main test is grounding and verifiability: does the output hold up against the source (the real codebase, the real data, the real ticket)? I cross-check agent-written code by reading it and running it against an automated test suite in CI, so regressions are caught before merge rather than trusted on faith. In practice my reliability metric is simple: I do not accept AI output I cannot verify, and I design workflows so that verification is cheap and automatic.

Character count: 960

## 4. Staying current

Question as asked: "How do you stay current with advances in AI tooling, and what recent trends or technologies have you incorporated into your work?"

I stay current by building with new tools, not just reading about them. When the Model Context Protocol was still new, I learned it hands-on and presented an internal conference talk on it and its implications for AI systems, before it was widely adopted.

The trend I have leaned into most is agentic engineering: using AI agents as real collaborators in the software lifecycle, with the right context wired in through MCP, rather than one-off prompting. My migration workflow and the Barrow agent both came directly out of that shift. I follow model and framework releases from the main labs, try them on my own side projects first, and adopt what actually improves quality or speed in real work. I would rather understand one tool deeply by using it than track every announcement.

Character count: 783

---
Footer: No em-dashes were present in the recovered text; nothing replaced. These are the drafted versions as delivered in the session; Zoha did not post an edited version of her own, and the conversation moved on to job-search strategy immediately after, so no later iteration exists. Character counts computed from the recovered text.
