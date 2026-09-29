# ML Refresh Study Plan (ESA interview prep: or just for the joy of it)

**Built:** 2026-07-16 · **Owner:** Zoha
**Context:** ESA application ✅ submitted ~2026-07-05. This preps the interview *if* invited; no interview = still a real skill gain.
**Vacation:** 29 Jul → 16 Aug 2026.

---

## The honest framing (read this first)

Your gap is **NOT ML theory**: you did genuine supervised ML on the Nomis project (decision-tree classifier, 208K loan records, recall 0.29→0.55, feature engineering, overfitting control). Don't re-learn that.

Your gap is the **~30% ML-serving / lifecycle** layer you don't touch daily. The winning pitch:
> *"I own the platform/MLOps 70% for real: cloud migrations, IaC, CI/CD, oncall, prod reliability. Here's how the software lifecycle I run maps onto the ML lifecycle I'm growing into."*

Overclaiming ML depth would sink trust. Bridging from what you own is the strength.

---

## Modules (each ~2-4h, do in order)

### Module 1: Model serving fundamentals
- **vLLM** (docs.vllm.ai): what it is, and *why* it beats naive HuggingFace inference. Concepts only: **KV-cache**, **continuous batching**, **PagedAttention**. You don't need to run it: you need to explain what problem it solves (throughput/latency/memory for LLM inference).
- **TGI** (Text Generation Inference) as the alternative; **Triton Inference Server** as the general-purpose one.
- Bridge: this is just "a service that hosts a model behind an API": you've deployed services your whole career. Same reliability/latency/scaling concerns.

### Module 2: Orchestration / RAG
- **LangChain** (python.langchain.com) and **LlamaIndex**: what they're *for* (chains, tools/agents, RAG pipelines) and: importantly: **when they're overkill** (a lot of "just call the API directly" cases). You already build MCP/agentic tooling → you know this intuitively; learn the vocabulary.
- **RAG** (retrieval-augmented generation): embed → vector store → retrieve → augment prompt. Map to: it's a cache/lookup layer in front of an inference call.

### Module 3: Model lifecycle vocab
- The chain: **train → evaluate → register → serve → monitor → detect drift → retrain.**
- Map each stage onto the CI/CD lifecycle you own cold. That mapping IS your interview answer.
- **Data/model versioning:** why models need it (reproducibility), analog to code versioning.

### Module 4: MLOps tooling landscape (names + what they do)
- **MLflow** (mlflow.org): experiment tracking + model registry. The one to actually skim hands-on if you have time.
- **SageMaker** (Model Registry, Pipelines, Endpoints): AWS-native, and you already know AWS.
- **Kubeflow / Airflow**: pipeline orchestration (Airflow you may already know).
- **Feature stores** (Feast, SageMaker Feature Store): what a feature store is and why.
- **Monitoring:** model drift, data drift, concept drift: how it differs from software monitoring you already do.

### Module 5: Interview-readiness (only if invited)
- Prepare 2-3 crisp stories: (1) Nomis ML project (your genuine ML work), (2) a platform/MLOps win (DARU migration, CI/CD, oncall reliability), (3) the honest "user→builder" growth narrative.
- Be ready for: "walk me through deploying a model to production": answer via the lifecycle map + your real deployment experience, flagging honestly where ML-specific steps (registry, drift monitoring) are new to you.

---

## Schedule

### 🟢 Before vacation (now → 28 Jul)
- [ ] Module 1 (serving) + Module 2 (orchestration). These are the two you're least fluent in.

### 🏖️ Vacation (29 Jul → 16 Aug)
- Off. Optional light reading if you feel like it: no obligation.

### 🟢 After vacation (17 Aug onward, low intensity: no deadline)
- [ ] Module 3 (lifecycle vocab) + Module 4 (MLOps tooling).
- [ ] Module 5 only if/when an interview invite lands.

> No hard deadline: ESA interview timing is unknown. Front-load Modules 1-2 while it's fresh, coast the rest. If an invite arrives, tighten Module 5.

---

## Reality check
This is a genuine skill investment regardless of ESA outcome: the serving/MLOps layer is exactly where your current role is heading anyway (GenAI/MCP work you already champion). Learning is always cool. ✅
