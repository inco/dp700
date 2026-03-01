# DP-700 — Continuous Learning Study Plan ✅

> Purpose: a focused, practical, and continuous-learning–optimized study plan to prepare for Microsoft DP-700 (Fabric Data Engineer) while building long-term retention. Use this plan as a template — adapt time blocks to your schedule and replace resources with ones you prefer.

---

## Quick overview 🔍
- Target exam: DP-700 (Microsoft Fabric Data Engineer)
- Suggested duration: 8 weeks (intensive) or 12+ weeks (spread out)
- Daily commitment: 30–90 minutes on weekdays + 1–3 hours on one weekend day
- Study focus: conceptual understanding, hands-on labs, active recall, spaced repetition, practice exams

---

## Core skill areas to cover (high level) 🧭
1. Lakehouse architecture and storage (Delta, Gen2 lake, table formats)
2. Data ingestion and integration (pipelines, dataflows, connectors, mirroring, continuous OneLake integration)
3. Data processing (Spark/Notebooks, SQL, Power Query/M, KQL, transformations, data quality)
4. Modeling & warehousing (tables, partitioning, schemas, denormalization, best practices)
5. Data governance & security (catalogs, access control, lineage, compliance, item endorsement, workspace logging)
6. Monitoring, performance tuning, and troubleshooting (including semantic model refresh monitoring)
7. Design considerations and patterns for production
8. Workspace configuration & lifecycle management (Spark, domain, OneLake, and data workflow workspace settings; version control, database projects, and deployment pipelines)
9. Error identification and resolution (pipelines, dataflows, notebooks, eventstreams, eventhouses, shortcuts, T-SQL)
10. Streaming data decisions (native vs mirrored storage, accelerated vs non-accelerated shortcuts)

### Direct Microsoft Learn module links for each skill area:
- **Ingest data with Microsoft Fabric:** [Learning Path](https://learn.microsoft.com/en-us/training/paths/ingest-data-with-microsoft-fabric/)
- **Implement a Lakehouse with Microsoft Fabric:** [Learning Path](https://learn.microsoft.com/en-us/training/paths/implement-lakehouse-microsoft-fabric/)
- **Implement Real-Time Intelligence with Microsoft Fabric:** [Learning Path](https://learn.microsoft.com/en-us/training/paths/explore-real-time-analytics-microsoft-fabric/)
- **Implement a Data Warehouse with Microsoft Fabric:** [Learning Path](https://learn.microsoft.com/en-us/training/paths/work-with-data-warehouses-using-microsoft-fabric/)
- **Manage a Microsoft Fabric environment:** [Learning Path](https://learn.microsoft.com/en-us/training/paths/manage-microsoft-fabric-environment/)

Browse all training: [Microsoft Learn Training Library](https://learn.microsoft.com/en-us/training/browse/)

> Note: Use the official Microsoft Learn pages with the terms "DP-700" or "Fabric Data Engineer" to confirm current exam objectives and module lists.

---

## Study strategies (continuous learning principles) 💡
- Active recall: convert notes into questions (use Anki/flashcards) and review daily.
- Spaced repetition: revisit difficult topics at increasing intervals (1 day → 3 days → 1 week → 1 month).
- Deliberate practice: focus on specific skill gaps using targeted labs and mini-projects.
- Interleaving: mix different topics in a study session (e.g., 30m Spark + 30m governance) to increase transfer.
- Teach & document: explain concepts in your own words and keep a public/private GitHub repo of notes and scripts.

---

## 8-Week Plan (weekday + weekend template) 📅
- Week structure: Mon–Fri short sessions; Sat longer hands-on lab; Sun = rest / light review

> For each week, use the mapped Microsoft Learn modules for hands-on and conceptual study. See links above for direct access to self-paced modules.

Week 0 — Setup (1–3 days)
- Install tooling: Fabric trial tenant (or Azure trial), local dev tools, Anki, VS Code, git
- Create a study tracker (spreadsheet or issue board) and a notes repo
- Collect core resources (Microsoft Learn modules, docs, top labs, practice tests)

Weeks 1–2 — Fundamentals & Storage
- Concepts: lakehouse, Delta tables, storage formats, data partitioning
- Labs: create a basic lakehouse, ingest sample CSV/Parquet, query with SQL
- Practice: 20–30 flashcards/day, 2 short quizzes/week

Weeks 3–4 — Ingestion & Processing
- Concepts: data pipelines, connectors, incremental loads, streaming basics (Eventstreams, Eventhouse)
- Labs: build a pipeline, write a Spark notebook transformation, test incremental load; implement a Spark structured streaming demo and a KQL streaming/windowing query
- Practice: 2 timed SQL/KQL problems/day; update flashcards

Weeks 5–6 — Modeling, Performance & Security
- Concepts: logical/physical modeling, indexes, partitioning, access control, Unity Catalog
- Labs: model a dataset for analytics, apply RBAC, test query performance tweaks; implement dynamic data masking and sensitivity labels; configure OneLake security settings
- Practice: 1 practice exam at the end of Week 6; review weak domains

Week 7 — Governance & Monitoring
- Concepts: lineage, data quality checks, policies, auditing and monitoring
- Labs: implement lineage tracking, create alerts or basic monitoring dashboards
- Practice: targeted drills on governance scenarios; rework failed practice questions

Week 8 — Final review & Exam prep
- Take 2–3 full practice exams (timed)
- Focused review on weakest 2–3 domains
- Light review one day before exam (no cramming)

---

## Module-by-module schedule (8-week detailed) ✅
Use the official Microsoft Learn learning paths (linked below) as the canonical module list. Each week assigns a set of modules for focused study + a lab/practice task.

Week 0 — Setup (1–3 days)
- Tasks: sign up for Fabric trial or Azure trial, install vscode/Anki/git, create study repo
- Read: DP-700 study guide and DP-700T00 course syllabus
- Links: [DP-700 Study Guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-700), [DP-700T00 syllabus](https://learn.microsoft.com/en-us/training/courses/dp-700t00#course-syllabus)

Week 1 — Ingest (Learning Path)
- Complete: "Ingest data with Microsoft Fabric" learning path (4 modules)
  1. [Get started with lakehouses in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/get-started-lakehouses/)
  2. [Use Apache Spark in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/use-apache-spark-work-files-lakehouse/)
  3. [Work with Delta Lake tables in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/work-delta-lake-tables-fabric/)
  4. [Ingest data with Dataflows Gen2 in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/use-dataflow-gen-2-fabric/)
- Lab: build sample ingestion pipeline using Dataflow Gen2 and pipelines; add incremental load scenario; implement mirroring and continuous OneLake integration
- Focus: Power Query (M), full vs incremental loads, mirroring, OneLake continuous integration
- Learning Path: https://learn.microsoft.com/en-us/training/paths/ingest-data-with-microsoft-fabric/

Week 2 — Lakehouse (Part 1)
- Complete first 4 modules of "Implement a Lakehouse with Microsoft Fabric" learning path (7 modules total)
  1. [Organize a Fabric lakehouse using medallion architecture design](https://learn.microsoft.com/en-us/training/modules/describe-medallion-architecture/)
  2. [Ingest data with Spark and Microsoft Fabric notebooks](https://learn.microsoft.com/en-us/training/modules/ingest-data-with-spark-fabric-notebooks/)
  3. [Organize a lakehouse with folders and workspaces](https://learn.microsoft.com/en-us/training/modules/organize-fabric-lakehouse/)
  4. [Use shortcuts to access external data in OneLake](https://learn.microsoft.com/en-us/training/modules/work-onelake-shortcuts/)
- Lab: create a lakehouse, land raw files (CSV/Parquet), and create Delta tables
- Learning Path: https://learn.microsoft.com/en-us/training/paths/implement-lakehouse-microsoft-fabric/

Week 3 — Lakehouse (Part 2) + Processing
- Complete remaining modules from "Implement a Lakehouse with Microsoft Fabric" learning path
  5. [Transform data with Spark in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/transform-data-spark-fabric/)
  6. [Get started with SQL Database in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/get-started-fabric-database/)
  7. [Use tools to optimize Power BI performance](https://learn.microsoft.com/en-us/training/modules/use-tools-optimize-power-bi-performance/)
- Lab: Spark notebook transformations (PySpark, SQL, Power Query/M); test partitioning and performance tweaks; practice denormalization, grouping/aggregation; handle duplicate, missing, and late-arriving data
- Learning Path: https://learn.microsoft.com/en-us/training/paths/implement-lakehouse-microsoft-fabric/

Week 4 — Real-Time Intelligence
- Complete: "Implement Real-Time Intelligence with Microsoft Fabric" learning path (5 modules)
  1. [Get started with Real-Time Intelligence in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/get-started-kusto-fabric/)
  2. [Use real-time eventstreams in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/use-real-time-eventstreams-fabric/)
  3. [Query data from a Kusto database in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/query-data-from-eventstream-fabric/)
  4. [Use real-time dashboards in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/work-real-time-data-fabric/)
  5. [Analyze events in real time with KQL in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/analyze-data-real-time-kql/)
- Lab: small structured streaming demo; KQL windowing query; Eventstreams → Eventhouse flow
- Learning Path: https://learn.microsoft.com/en-us/training/paths/explore-real-time-analytics-microsoft-fabric/

Week 5 — Data Warehouse & Modeling
- Complete: "Implement a data warehouse with Microsoft Fabric" (6 modules)
  1. [Get started with data warehouses in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/get-started-data-warehouse/)
  2. [Load data into a Microsoft Fabric data warehouse](https://learn.microsoft.com/en-us/training/modules/load-data-into-microsoft-fabric-data-warehouse/)
  3. [Query a data warehouse in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/query-data-warehouse-microsoft-fabric/)
  4. [Monitor a Microsoft Fabric data warehouse](https://learn.microsoft.com/en-us/training/modules/monitor-fabric-data-warehouse/)
  5. [Secure a Microsoft Fabric data warehouse](https://learn.microsoft.com/en-us/training/modules/secure-data-warehouse-microsoft-fabric/)
  6. [Build a semantic model in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/build-semantic-model-fabric/)
- Lab: design a dimensional model, populate fact/dim tables, test query performance
- Learning Path: https://learn.microsoft.com/en-us/training/paths/work-with-data-warehouses-using-microsoft-fabric/

Week 6 — Manage & Security
- Complete: "Manage a Microsoft Fabric environment" (4 modules)
  1. [Administer Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/administer-fabric/)
  2. [Implement security in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/implement-security-fabric/)
  3. [Implement version control and deployment for Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/implement-version-control-deployment-fabric/)
  4. [Monitor Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/monitor-fabric/)
- Lab: configure workspace settings (Spark, domain, OneLake, data workflow), version control, implement database projects and CI/CD; implement row/column/object/folder/file-level access, dynamic data masking, sensitivity labels; endorse items; implement and use workspace logging; configure OneLake security
- Learning Path: https://learn.microsoft.com/en-us/training/paths/manage-microsoft-fabric-environment/

Week 7 — Governance, Monitoring & Troubleshooting
- Tasks: hands-on governance (lineage, catalogs, item endorsement), monitoring dashboards (including semantic model refresh), alerting, and error identification drills
- Lab: simulate and resolve errors for pipelines, dataflows, notebooks, eventstreams, eventhouses, shortcuts, and T-SQL; practice root-cause analysis and fixes; monitor data ingestion, transformation, and semantic model refresh

Week 8 — Final review & Exam prep
- Tasks: 2–3 full practice exams; targeted review of weak topics; light review day before exam
- Milestone: ensure you've used the Exam Sandbox and reviewed renewal/assessment steps

Notes:
- Adjust pacing: if any learning path runs long, spread to Weeks 2–4 accordingly.
- Use weekly lab reflections to create/update flashcards; import to Anki for spaced repetition.

---



## Weekly routine (repeatable for continuous learning) 🔁
- Daily (30–60 min): 10m flashcards, 20–40m focused study (reading + short hands-on)
- Twice a week: 60–90m lab session (code + verification)
- Weekly: 1 practice test or a set of practice problems + retrospective
- Monthly: 1 mini-project (end-to-end pipeline) and public writeup

---

## Hands-on labs & mini-project ideas 🔧
- Build a small lakehouse and population pipeline for a sample e-commerce dataset
- Implement incremental CDC style ingestion with Spark notebooks
- Mirroring lab: set up mirroring from external sources; compare with shortcuts and continuous OneLake integration
- Data quality lab: implement patterns to handle duplicate, missing, and late-arriving data
- Transformation comparison lab: perform the same transformation using Power Query (M), PySpark, SQL, and KQL; understand when to use each
- Denormalization lab: transform normalized schema into denormalized analytical model; practice grouping and aggregation
- Create a governance policy and simulate permission scenarios; endorse items and implement workspace logging
- Workspace configuration lab: configure Spark, domain, OneLake, and data workflow workspace settings
- Optimize a slow analytical query and measure before/after performance
- Orchestration decision drills: compare and implement the same flow as a Dataflow Gen2, a pipeline, and a notebook; add schedule and event-triggered runs with parameters and dynamic expressions
- Streaming & Real-Time lab: ingest via Eventstreams, persist to Eventhouse, process with Spark structured streaming and KQL windowing; choose between native storage, mirrored storage, and shortcuts; test accelerated vs non-accelerated shortcuts
- Security lab: implement row-level, column-level, object-level, folder/file-level access controls; enable dynamic data masking and apply sensitivity labels; configure OneLake security
- Error identification drillset: create and resolve injected errors for pipelines, dataflows, notebooks, eventstreams, eventhouses, shortcuts, and T-SQL queries; log root causes and fixes
- Monitoring & alerting lab: monitor data ingestion, transformation, and semantic model refresh; create dashboards and alerts for failures and performance issues; measure improvements after tuning

---

## Resources & tools (recommended) 🧰
Microsoft Learn — search the DP-700 / Fabric Data Engineer learning paths
Microsoft Fabric docs & tutorials (official)
Practice exam providers (MeasureUp, Whizlabs) — use for readiness checks
Anki (flashcards) for spaced repetition
GitHub repo to store notes, scripts, and lab playbooks

### Community Study Resources (Legitimate) 📚
- **Shabnam Watson's DP-700 Exam Prep Resources** (GitHub)
  - Repository: [DP-700 Study Materials](https://github.com/ShbWatson/Exam-DP-700-Implementing-Data-Engineering-Solutions-Using-Microsoft-Fabric)
  - 📝 [Study Notes PDF](https://github.com/ShbWatson/Exam-DP-700-Implementing-Data-Engineering-Solutions-Using-Microsoft-Fabric/blob/main/DP700%20Exam%20Prep%20Study%20Notes.pdf) - Comprehensive notes from someone who passed
  - 📊 [Skills Measured Excel](https://github.com/ShbWatson/Exam-DP-700-Implementing-Data-Engineering-Solutions-Using-Microsoft-Fabric/blob/main/DP700_SkillsMeasured.xlsx) - Progress tracking spreadsheet with exam objectives
  - 📈 [Exam Prep Power BI](https://github.com/ShbWatson/Exam-DP-700-Implementing-Data-Engineering-Solutions-Using-Microsoft-Fabric/blob/main/DP700-ExamPrep.pbix) - Visual dashboard of study progress
  - 🎥 [YouTube: Tips for Passing DP-700](https://www.youtube.com/watch?v=om0kJ2fbmko) - Real exam experience and preparation tips
  - **How to use:** Download Excel file and Power BI file; update Excel with your progress; use Power BI to visualize completion; review study notes before exam

### YouTube Channels & Videos 📺
- [Shabnam Watson - DP-700 Tips & Tricks](https://www.youtube.com/watch?v=om0kJ2fbmko)
- John Savill's Technical Training (Azure/Fabric content)
- Adam Marczak - Azure for Everyone
- Microsoft Fabric Community Blog videos
- Guy in a Cube (Power BI + Fabric content)

### Microsoft Learn links (essential) 🔗
- [DP-700 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-700)
- [DP-700T00 course syllabus](https://learn.microsoft.com/en-us/training/courses/dp-700t00#course-syllabus)
- [Ingest data with Microsoft Fabric](https://learn.microsoft.com/en-us/training/paths/ingest-data-with-microsoft-fabric/)
- [Implement a Lakehouse with Microsoft Fabric](https://learn.microsoft.com/en-us/training/paths/implement-lakehouse-microsoft-fabric/)
- [Implement Real-Time Intelligence with Microsoft Fabric](https://learn.microsoft.com/en-us/training/paths/explore-real-time-analytics-microsoft-fabric/)
- [Implement a Data Warehouse with Microsoft Fabric](https://learn.microsoft.com/en-us/training/paths/work-with-data-warehouses-using-microsoft-fabric/)
- [Manage a Microsoft Fabric environment](https://learn.microsoft.com/en-us/training/paths/manage-microsoft-fabric-environment/)
- [Microsoft Certified: Fabric Data Engineer Associate (cert page)](https://learn.microsoft.com/en-us/credentials/certifications/fabric-data-engineer-associate/)
- [Microsoft Fabric docs / Data engineering overview](https://learn.microsoft.com/en-us/fabric/)

Browse all training: [Microsoft Learn Training Library](https://learn.microsoft.com/en-us/training/browse/)

---

## Practice exam strategy ✅
- Start with topic quizzes early, full mock exams in Weeks 6–8
- After each practice test: categorize wrong answers into knowledge/skill/luck
- Make flashcards from mistakes and re-practice those scenarios after 3–7 days

---

## Post-exam — continuous retention plan (90+ days) 🔄
- Week 1–4 after exam: daily 5–10 mins flashcards, weekly 2–4h project work
- Months 2–3: monthly deep-dive on a topic you found weak (e.g., governance or Spark tuning)
- Maintain a rolling 3-month project backlog to apply new features and keep skills current
- Follow release notes for Fabric and set calendar reminders for reading updates

---

## Study checklist (pre-exam) ☑️
- [ ] Completed all Learn modules for target exam objectives
- [ ] 2–3 full practice exams with consistent passing scores
- [ ] 6–8 labs completed and documented in repo
- [ ] Flashcard deck has at least 200 active cards
- [ ] Performance, security, and governance scenarios practiced
- [ ] Used the Microsoft exam sandbox and reviewed certification renewal & free assessment process

---
## Tips & habits for steady progress 💬
## 📚 Companion Files in This Repository

This study plan is supported by additional files to enhance your preparation:
- Keep sessions short and focused; avoid marathon single-topic days
### Practice & Assessment Files
- **[weekly-practice-tasks.md](weekly-practice-tasks.md)** - Detailed daily/weekly practice tasks with specific labs and commitments for each week
- **[practice-questions-by-objective.md](practice-questions-by-objective.md)** - 54 scenario-based practice questions covering all exam objectives with detailed explanations
- **[anki_dp700_cards.csv](anki_dp700_cards.csv)** - Flashcard deck for Anki (import for spaced repetition practice)
- Review mistakes immediately and schedule them for spaced repetition

### Weekly Task Files (Recommended Format)
- **[tasks/README.md](tasks/README.md)** - Index and navigation for all weekly task files (start here!)
- **[tasks/week0.md](tasks/week0.md)** - Setup & Environment configuration (1-3 days)
- **[tasks/week1.md](tasks/week1.md)** - Data Ingestion (4 modules, 3 labs)
- **[tasks/week2.md](tasks/week2.md)** - Lakehouse Architecture (4 modules, 3 labs)
- **[tasks/week3.md](tasks/week3.md)** - Data Transformation (3 modules, 3 labs)
- **[tasks/week4.md](tasks/week4.md)** - Real-Time Intelligence (5 modules, 4 labs)
- **[tasks/week5.md](tasks/week5.md)** - Data Warehouse & Modeling (6 modules, 4 labs)
- **[tasks/week6.md](tasks/week6.md)** - Management & Security (4 modules, 4 labs)
- **[tasks/week7.md](tasks/week7.md)** - Governance & Monitoring (review, 3 labs, error resolution)
- **[tasks/week8.md](tasks/week8.md)** - Final Review & Exam Prep (3 practice exams, light review)

### Exam Simulator & Question Database
- **[EXAM_SIMULATOR_README.md](EXAM_SIMULATOR_README.md)** - Complete guide for the Python exam simulator
- **[EXAM_SIMULATOR_QUICKSTART.md](EXAM_SIMULATOR_QUICKSTART.md)** - 30-second start guide
- **[exam_simulator.py](exam_simulator.py)** - The exam simulator application (run with `python exam_simulator.py`)
- **[questions.md](questions.md)** - Question database in Markdown format (add your practice test questions here!)
- **[AUTO_FORMAT_QUICKSTART.md](AUTO_FORMAT_QUICKSTART.md)** - **RECOMMENDED:** Auto-formatting tool guide
- **[auto_format_questions.py](auto_format_questions.py)** - Automatically format questions while you take exams (no manual copy-paste needed!)
- **[exam_scores.json](exam_scores.json)** - Auto-generated score history and tracking

### Community Resources Integration
- **[using-community-resources.md](using-community-resources.md)** - Complete guide for using Shabnam Watson's study materials (Excel tracker, Power BI dashboard, study notes, YouTube tips)
- Use public study groups / Discord / Slack for accountability
### Labs & Code
- **[labs/week1/security_lab.ipynb](labs/week1/security_lab.ipynb)** - Week 1 security lab notebook
- **[labs/week1/streaming_lab.ipynb](labs/week1/streaming_lab.ipynb)** - Week 1 streaming lab notebook
- Log each study session: goal, time spent, results
### How These Files Work Together
1. **DP-700-Study-Plan.md** (this file) - Your master schedule and module references
2. **weekly-practice-tasks.md** - Day-by-day tasks for each week
3. **practice-questions-by-objective.md** - Self-assessment after each skill area
4. **using-community-resources.md** - Setup guide for Excel tracker and Power BI dashboard
5. **anki_dp700_cards.csv** - Daily flashcard review (import to Anki app)

**Suggested Daily Workflow:**
```
Morning (10 min):  Review Anki flashcards
Evening (45 min):  Complete module from DP-700-Study-Plan.md
                   Follow specific tasks from weekly-practice-tasks.md
                   Update Excel tracker (from community resources)
After topic:       Answer practice questions from practice-questions-by-objective.md
Saturday:          Hands-on labs from weekly-practice-tasks.md
Sunday:            Review week, update Power BI dashboard, create new flashcards
```
---
---

If you'd like, I can:
- Generate an Anki-ready CSV from the key topics to import as flashcards ✅ (file: `anki_dp700_cards.csv`)
- Create a starter GitHub repo README and sample lab notebook for Week 1 ✅ (files: `README.md`, `labs/week1/security_lab.ipynb`, `labs/week1/streaming_lab.ipynb`)

Good luck — build consistently, practice deliberately, and treat the exam as a milestone on an ongoing learning journey! 🚀