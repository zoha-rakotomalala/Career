---
company: ESA
reference: Req. 20679
date_drafted: 2026-07-01
submitted: ~2026-07-05
outcome: rejected
source: /Users/zoharak/.kiro/crew/workspace/esa-application (working files at the time)
note: these are the drafting files, including the pre-submission checklist. The final pasted text may differ slightly.
---
# ESA form answers

# ESA Application: Q09 (highlight aspects of your CV)

## Paste-ready answer (concise, ~130 words)

Two aspects I would highlight.

First, my data and machine-learning background sits closer to this role than my job
title suggests. Before software engineering I spent two years as a data analyst
(Dashlane, Spark.do) and my first engineering role was at Dataiku, an enterprise ML/AI
platform company. I have built supervised ML models on real datasets, including a
decision-tree classifier on a ~208K-record auto-lending dataset that improved recall
on the target class from 0.29 to 0.55 while holding ~84% accuracy. This gives me
genuine grounding in the data-preparation, validation and modelling practices this
role calls for.

Second, I volunteered at the Paris 2024 and Milan-Cortina 2026 Olympic Games
[TODO: role, e.g. "in spectator services / accreditation / language support"].
Both were large-scale, high-pressure, highly multinational operations that sharpened
my ability to coordinate calmly across languages and cultures toward a shared mission,
which is the kind of collaborative environment ESA embodies.

---
## ⚠️ Before submitting: confirm these
- **Your actual Olympic roles**: what did you do at Paris 2024 and Milan-Cortina 2026?
  (e.g. spectator services, accreditation, transport, language/interpreting, venue ops).
  Replace the [TODO] with one honest phrase. Do NOT leave it generic.
- Milan-Cortina 2026 was Feb 2026: confirm you actually volunteered there (not just Paris).
- Keep it to the data + Olympics pair; resist adding more (dilutes the two strong points).


# ESA Application: Q10-Q15 (technical screening)

RULE: these yes/no answers get probed in interview. Answer to what you can DEFEND,
not what sounds good. Under-claiming loses a point; over-claiming loses the offer.

====================================================================
## Q10: Possible starting date (≤200 chars)
[TODO: confirm your Amazon notice period: France is typically 3 months for cadres.]

Paste-ready (adjust the month):
"Subject to my current notice period (approx. 3 months), I could start around
[November 2026]. I am flexible and happy to align with ESA's onboarding timeline."

====================================================================
## Q11: Experience developing ML/AI models on real-world datasets?
ANSWER: **Yes** (genuine, defensible: the Nomis project is the anchor)

11.a (≤2000 chars):
"Yes. In a graduate data-science course I led a supervised machine-learning project on a
real auto-lending dataset from Nomis Solutions / e-Car (~208,000 quoted loans, 2002),
building a decision-tree classifier in Python to predict whether a quoted loan would be
funded or lost. The data was genuinely messy and imbalanced (~22% funded), with mixed
categorical and numerical features (FICO score, loan amount, term, loan type, cost of
funds, partner channel, risk tier). I engineered features (e.g. a rate-difference signal),
deliberately excluded the incumbent risk-band variable to test raw predictive power,
controlled overfitting through tree pruning and depth limits, and evaluated on a held-out
test set using confusion matrices and accuracy / sensitivity / specificity / F1. My model
raised recall on the funded class from 0.29 (the incumbent baseline) to 0.55 while holding
~84% accuracy, and I translated the tree into interpretable business rules for customer
segmentation and pricing.

Earlier, as a data analyst at Dashlane, I built a predictive model for user retention on
real customer data to guide the sales team. I also hold the Dataiku Core Designer
certification and work hands-on with LLM and agentic tooling today. To be transparent, my
experience is with classical ML rather than deep learning (PyTorch/TensorFlow), which is
exactly the area I want to grow into through this programme."

====================================================================
## Q12: Experience preparing data for AI/ML (cleaning, validation, labelling, feature engineering, quality)?
(no yes/no: direct description, ≤2000 chars)

Paste-ready:
"Data preparation and quality have been a consistent thread in my work. In my Nomis /
e-Car ML project I prepared a real, imbalanced ~208K-record lending dataset for modelling:
cleaning and validating mixed categorical/numerical fields, handling the class imbalance,
engineering features such as a rate-difference signal, and making deliberate feature-
selection choices (excluding the incumbent risk-band variable) before training and
held-out validation. As a data analyst at Dashlane and Spark.do, I cleaned and validated
operational data in SQL Server, Amazon Redshift and PostgreSQL: handling missing and
inconsistent values, cross-checking data models against Salesforce and back-office sources
to improve matching quality, and building validated reporting pipelines (Metabase,
Airtable APIs) that cut report preparation time by 50%. At Dataiku I built a feature that
indexed primary/foreign keys across tables via JDBC into Elasticsearch, producing clean,
queryable metadata over raw relational data. At Amazon I work daily with production data
pipelines and authored a post-mortem after a data/compliance incident, root-causing across
interconnected systems, which reinforced rigorous validation and quality-check discipline
at system boundaries."

====================================================================
## Q13: Experience moving AI/ML MODELS from prototype into operational use?
ANSWER: **No** (this is the honest answer: hold the line)

Reasoning: You have moved SOFTWARE and cloud infrastructure to production extensively,
but not machine-learning MODELS specifically. Saying Yes here contradicts your own
motivation letter and would collapse under one interview question. Answer No. The
programme is explicitly designed to develop exactly this: that's your story, not a gap
to hide.
(There is no 13.a to fill if you answer No. If the form forces a comment, use:
"Not yet for ML models specifically: though I have deep experience deploying and
operating production software and cloud services (AWS CDK, CI/CD, oncall), which is the
transferable foundation I want to extend to the ML model lifecycle.")

====================================================================
## Q14: Experience with MLOps practices/tools (versioning, monitoring, deployment pipelines, catalogues, reproducibility)?
ANSWER: **Yes**: but scope it honestly to SOFTWARE, not ML-specific tooling

14.a (≤2000 chars):
"I have strong experience with these practices for production software, though not yet
for ML models specifically. Day to day I work with: deployment pipelines and CI/CD
(building and shipping infrastructure-as-code with AWS CDK); production monitoring and
alerting (Amazon CloudWatch), with oncall responsibility for reliability and incident
response; reproducible builds and dependency/version management through Amazon's internal
build system; and infrastructure lifecycle work including cross-region migration and
decommissioning of cloud resources. I have not yet used ML-specific tooling such as model
registries, model catalogues or experiment-tracking systems (e.g. MLflow): but the
underlying disciplines (versioning, monitoring, reproducible pipelines) are ones I apply
daily and would carry directly into an ML/MLOps context."

====================================================================
## Q15: Experience with large-scale data platforms / lakes / warehouses / cloud / HPC / distributed processing?
ANSWER: **Yes**

15.a (≤2000 chars):
"Cloud: extensive AWS: CDK (infrastructure-as-code), Lambda, S3, DynamoDB, CloudWatch,
across multiple regions, including a cross-region service migration and a Redshift
descale. Data warehouse: Amazon Redshift (used for analysis at Dashlane and operated/
descaled at Amazon). Search/indexing: Elasticsearch. Query/analytics: SQL Server,
PostgreSQL, Amazon Athena, Tableau, Metabase. I have not worked with HPC schedulers
(SLURM/PBS) or distributed frameworks such as Spark/Hadoop, and I would be glad to pick
these up."

====================================================================
## ⚠️ CONFIRM BEFORE SUBMITTING
1. Q10: your real notice period + resulting start month.
2. Q11: is the Dashlane retention-model description accurate? (model type, that it ran on
   real data). Adjust if I mis-stated it.
3. Q13: I set this to NO on purpose. If you disagree, tell me: but Yes here is the single
   riskiest claim in the whole application.
4. Q14: I set Yes-but-scoped. If you'd rather answer No to stay conservative, say so.
5. CONSISTENCY: Q11/Q12/Q15 all lean on your Dashlane data-analyst work: which I CUT
   from the CV for space. Strongly recommend restoring a one-line Dashlane entry so the
   form and CV agree.
