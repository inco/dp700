# DP-700 Weekly Practice Tasks & Commitments

> **Purpose:** Hands-on practice tasks aligned with each week's learning modules. Complete these to reinforce concepts through active practice.

---

## Week 0 — Setup & Preparation

### Daily Commitment: 30-45 minutes
### Practice Tasks:
1. **Environment Setup** (Day 1-2)
   - [ ] Sign up for [Microsoft Fabric free trial](https://learn.microsoft.com/fabric/get-started/fabric-trial)
   - [ ] Install [Power BI Desktop](https://powerbi.microsoft.com/desktop/)
   - [ ] Install [VS Code](https://code.visualstudio.com/) with Python extension
   - [ ] Set up [Git](https://git-scm.com/) and create a GitHub repo for notes/labs
   - [ ] Install [Anki](https://apps.ankiweb.net/) for flashcards

2. **Baseline Knowledge Check** (Day 3)
   - [ ] Take the free [DP-700 Practice Assessment](https://learn.microsoft.com/credentials/certifications/fabric-data-engineer-associate/practice/assessment?assessment-type=practice&assessmentId=87) (no login required for preview)
   - [ ] Document weak areas for focused study
   - [ ] Create initial flashcards (10-15 cards) on Fabric architecture basics

3. **Study Plan Review** (Day 3)
   - [ ] Review DP-700 study guide objectives
   - [ ] Set up study tracker (spreadsheet or todo list)
   - [ ] Schedule study blocks in calendar for 8 weeks

**Weekly Goal:** Functional dev environment + baseline assessment score documented

---

## Week 1 — Ingest Data (Dataflows, Pipelines, Lakehouses)

### Daily Commitment: 45-60 minutes (Mon-Fri) + 2-3 hours (Sat lab)
### Practice Tasks:

**Module Practice (Mon-Fri, 45 min/day):**
- [ ] **Day 1:** Complete "Get started with lakehouses" module + create 5 flashcards on lakehouse concepts
- [ ] **Day 2:** Complete "Use Apache Spark" module + write a simple PySpark script to read CSV
- [ ] **Day 3:** Complete "Work with Delta Lake tables" module + create a Delta table from Parquet
- [ ] **Day 4:** Complete "Ingest data with Dataflows Gen2" module + build a simple dataflow
- [ ] **Day 5:** Review quiz - answer 10 practice questions on ingestion patterns

**Saturday Hands-On Lab (2-3 hours):**
- [ ] **Lab 1.1:** Create a lakehouse and ingest sample data
  - Download [AdventureWorks sample dataset](https://learn.microsoft.com/sql/samples/adventureworks-install-configure)
  - Create lakehouse in Fabric workspace
  - Ingest CSV files using Dataflow Gen2
  - Create Delta tables from ingested data

- [ ] **Lab 1.2:** Build incremental load pipeline
  - Add timestamp column to track data freshness
  - Configure incremental refresh using watermark
  - Test with new data batch

- [ ] **Lab 1.3:** Implement mirroring (if available)
  - Set up mirroring from Azure SQL Database or Snowflake
  - Compare performance with traditional ingestion
  - Document differences between mirroring and shortcuts

**Sunday Review (30 min):**
- [ ] Update Anki deck with 15-20 new cards from Week 1
- [ ] Write a 1-paragraph summary of key learnings
- [ ] Review mistakes and flag topics for re-study

**Weekly Goal:** Successfully ingest data using 3 different methods (Dataflow Gen2, pipeline, mirroring)

---

## Week 2 — Lakehouse Architecture & Organization

### Daily Commitment: 45-60 minutes (Mon-Fri) + 2-3 hours (Sat lab)
### Practice Tasks:

**Module Practice (Mon-Fri, 45 min/day):**
- [ ] **Day 1:** Complete "Medallion architecture" module + diagram bronze/silver/gold layers
- [ ] **Day 2:** Complete "Ingest data with Spark notebooks" module + write ingestion notebook
- [ ] **Day 3:** Complete "Organize lakehouse" module + design folder structure for e-commerce scenario
- [ ] **Day 4:** Complete "Use shortcuts" module + create OneLake shortcuts
- [ ] **Day 5:** Review quiz - answer 10 practice questions on lakehouse design patterns

**Saturday Hands-On Lab (2-3 hours):**
- [ ] **Lab 2.1:** Implement medallion architecture
  - Create bronze/silver/gold folder structure
  - Ingest raw CSV to bronze layer
  - Transform and move to silver (cleaned data)
  - Aggregate to gold layer (business-ready)

- [ ] **Lab 2.2:** OneLake shortcuts
  - Create shortcuts to external ADLS Gen2 storage
  - Create shortcuts to another lakehouse
  - Test data access through shortcuts
  - Compare accelerated vs non-accelerated shortcuts

- [ ] **Lab 2.3:** Workspace organization
  - Create separate workspaces for dev/test/prod
  - Organize lakehouses by domain (sales, marketing, operations)
  - Configure workspace settings and permissions

**Sunday Review (30 min):**
- [ ] Add 15-20 new flashcards on medallion architecture and shortcuts
- [ ] Document medallion architecture pattern in your own words
- [ ] Create architecture diagram of your lab solution

**Weekly Goal:** Functional medallion architecture lakehouse with shortcuts configured

---

## Week 3 — Data Transformation & Processing

### Daily Commitment: 45-60 minutes (Mon-Fri) + 2-3 hours (Sat lab)
### Practice Tasks:

**Module Practice (Mon-Fri, 45 min/day):**
- [ ] **Day 1:** Complete "Transform data with Spark" module + write transformation notebook
- [ ] **Day 2:** Complete "SQL Database in Fabric" module + execute T-SQL queries
- [ ] **Day 3:** Complete "Optimize Power BI performance" module + identify optimization opportunities
- [ ] **Day 4:** Practice PySpark transformations (groupBy, filter, join, window functions)
- [ ] **Day 5:** Review quiz - answer 10 practice questions on transformations and SQL

**Saturday Hands-On Lab (2-3 hours):**
- [ ] **Lab 3.1:** Multi-language transformation comparison
  - Same transformation in PySpark, SQL, Power Query (M), and KQL
  - Measure execution time for each
  - Document when to use each language

- [ ] **Lab 3.2:** Data quality patterns
  - Handle duplicate records (deduplication logic)
  - Handle missing values (imputation strategies)
  - Handle late-arriving data (slowly changing dimensions)
  - Implement data validation rules

- [ ] **Lab 3.3:** Denormalization and aggregation
  - Start with normalized schema (3NF)
  - Denormalize into star schema
  - Create aggregated tables for common queries
  - Test query performance improvements

**Sunday Review (30 min):**
- [ ] Add 15-20 flashcards on transformation patterns
- [ ] Document data quality patterns you implemented
- [ ] Compare performance results from multi-language lab

**Weekly Goal:** Transform data using 4 languages + handle data quality issues

---

## Week 4 — Real-Time Intelligence & Streaming

### Daily Commitment: 45-60 minutes (Mon-Fri) + 3 hours (Sat lab)
### Practice Tasks:

**Module Practice (Mon-Fri, 45 min/day):**
- [ ] **Day 1:** Complete "Get started with Real-Time Intelligence" module + create KQL database
- [ ] **Day 2:** Complete "Use real-time eventstreams" module + set up eventstream
- [ ] **Day 3:** Complete "Query data from Kusto database" module + write 5 KQL queries
- [ ] **Day 4:** Complete "Use real-time dashboards" module + build a dashboard
- [ ] **Day 5:** Complete "Analyze events with KQL" module + practice windowing functions

**Saturday Hands-On Lab (3 hours):**
- [ ] **Lab 4.1:** Eventstream setup
  - Create sample event source (IoT sensor simulation or sample stream)
  - Configure eventstream to capture events
  - Route events to Eventhouse
  - Monitor streaming metrics

- [ ] **Lab 4.2:** KQL queries and windowing
  - Write KQL queries for time-series analysis
  - Implement tumbling window aggregations
  - Implement hopping window aggregations
  - Implement sliding window aggregations
  - Create KQL functions for reusable logic

- [ ] **Lab 4.3:** Spark structured streaming
  - Read stream from Event Hub or Kafka
  - Apply transformations in Spark
  - Write to Delta Lake with checkpointing
  - Compare with KQL approach

- [ ] **Lab 4.4:** Storage decisions
  - Test native storage in Eventhouse
  - Test mirrored storage
  - Test shortcuts for real-time data
  - Document trade-offs (latency, cost, features)

**Sunday Review (30 min):**
- [ ] Add 20 flashcards on KQL syntax and streaming concepts
- [ ] Write comparison: when to use KQL vs Spark streaming
- [ ] Document windowing patterns with examples

**Weekly Goal:** Working eventstream → Eventhouse pipeline with KQL analysis

---

## Week 5 — Data Warehouse & Modeling

### Daily Commitment: 45-60 minutes (Mon-Fri) + 3 hours (Sat lab)
### Practice Tasks:

**Module Practice (Mon-Fri, 45 min/day):**
- [ ] **Day 1:** Complete "Get started with data warehouses" module + create warehouse
- [ ] **Day 2:** Complete "Load data into warehouse" module + test COPY INTO
- [ ] **Day 3:** Complete "Query a data warehouse" module + write 10 T-SQL queries
- [ ] **Day 4:** Complete "Monitor warehouse" module + set up monitoring
- [ ] **Day 5:** Complete "Secure warehouse" module + configure security

**Saturday Hands-On Lab (3 hours):**
- [ ] **Lab 5.1:** Dimensional model design
  - Design star schema for retail sales scenario
  - Create dimension tables (Customer, Product, Date, Store)
  - Create fact table (SalesOrder)
  - Implement surrogate keys

- [ ] **Lab 5.2:** Data loading patterns
  - Full load for dimension tables
  - Incremental load for fact tables
  - Implement slowly changing dimension (SCD Type 2)
  - Test MERGE statements for upserts

- [ ] **Lab 5.3:** Query optimization
  - Write baseline queries and capture execution plans
  - Add clustered columnstore indexes
  - Implement partitioning on fact table
  - Add statistics and update them
  - Re-run queries and compare performance

- [ ] **Lab 5.4:** Security implementation
  - Row-level security (filter by region/customer)
  - Column-level security (mask sensitive columns)
  - Object-level security (grant/deny on tables)
  - Dynamic data masking for PII

**Sunday Review (30 min):**
- [ ] Add 20 flashcards on warehouse concepts, indexing, partitioning
- [ ] Document SCD Type 2 pattern with examples
- [ ] Create performance comparison table (before/after optimization)

**Weekly Goal:** Functional star schema warehouse with security and optimizations

---

## Week 6 — Administration, Security & Lifecycle Management

### Daily Commitment: 45-60 minutes (Mon-Fri) + 3 hours (Sat lab)
### Practice Tasks:

**Module Practice (Mon-Fri, 45 min/day):**
- [ ] **Day 1:** Complete "Administer Fabric" module + configure workspace
- [ ] **Day 2:** Complete "Implement security" module + set up RBAC
- [ ] **Day 3:** Complete "Version control and deployment" module + connect to Git
- [ ] **Day 4:** Complete "Monitor Fabric" module + create alerts
- [ ] **Day 5:** Review quiz - answer 15 practice questions on security scenarios

**Saturday Hands-On Lab (3 hours):**
- [ ] **Lab 6.1:** Workspace configuration
  - Configure Spark workspace settings (pool size, runtime version)
  - Configure domain workspace settings
  - Configure OneLake workspace settings (data retention, cache)
  - Configure data workflow workspace settings

- [ ] **Lab 6.2:** Multi-level security implementation
  - Workspace-level access controls (Admin, Member, Contributor, Viewer)
  - Item-level access controls (specific lakehouse/warehouse permissions)
  - Row-level security in semantic model
  - Column-level security in warehouse
  - Folder/file-level security in OneLake
  - Dynamic data masking for sensitive columns
  - Apply sensitivity labels to items

- [ ] **Lab 6.3:** Governance features
  - Endorse items (promote/certify lakehouses, datasets)
  - Implement workspace logging
  - Configure data lineage tracking
  - Test data discovery through catalog

- [ ] **Lab 6.4:** Version control and CI/CD
  - Connect workspace to Azure DevOps or GitHub
  - Create database project for warehouse
  - Implement version control for notebooks
  - Create deployment pipeline (dev → test → prod)
  - Deploy changes through pipeline

**Sunday Review (30 min):**
- [ ] Add 25 flashcards on security, RBAC roles, deployment concepts
- [ ] Document the 7 levels of access control with examples
- [ ] Create CI/CD workflow diagram

**Weekly Goal:** Production-grade workspace with security, version control, and deployment pipeline

---

## Week 7 — Governance, Monitoring & Troubleshooting

### Daily Commitment: 60-90 minutes (Mon-Fri) + 3-4 hours (Sat lab)
### Practice Tasks:

**Daily Practice (Mon-Fri, 60-90 min/day):**
- [ ] **Day 1:** Error scenario practice - pipelines (5 scenarios)
- [ ] **Day 2:** Error scenario practice - dataflows & notebooks (5 scenarios each)
- [ ] **Day 3:** Error scenario practice - eventstreams & eventhouses (5 scenarios each)
- [ ] **Day 4:** Error scenario practice - T-SQL & shortcuts (5 scenarios each)
- [ ] **Day 5:** Performance tuning scenarios (3 lakehouse + 3 warehouse optimizations)

**Saturday Hands-On Lab (3-4 hours):**
- [ ] **Lab 7.1:** Monitoring dashboard creation
  - Monitor data ingestion (pipeline runs, dataflow refreshes)
  - Monitor data transformation (notebook execution, query performance)
  - Monitor semantic model refresh (success rate, duration)
  - Set up email/Teams alerts for failures
  - Create Power BI monitoring dashboard

- [ ] **Lab 7.2:** Error identification and resolution drillset
  Create and fix these intentional errors:
  - **Pipeline errors:** Connection failure, timeout, data type mismatch, missing dependencies
  - **Dataflow errors:** Power Query formula errors, schema drift, source unavailable
  - **Notebook errors:** Package import failure, memory errors, partition skew, driver OOM
  - **Eventstream errors:** Event Hub connection issues, deserialization errors, throughput limits
  - **Eventhouse errors:** Ingestion failures, query timeout, invalid KQL syntax
  - **T-SQL errors:** Syntax errors, permission denied, deadlocks, temp space exhaustion
  - **Shortcut errors:** Invalid path, authentication failure, cross-region latency

- [ ] **Lab 7.3:** Performance optimization challenges
  - **Lakehouse optimization:** V-Order, optimize, bin-compaction, Z-order, statistics
  - **Pipeline optimization:** Parallelism, batch size, copy activity settings
  - **Warehouse optimization:** Materialized views, result set caching, partitioning
  - **Eventstream optimization:** Partition count, throughput units, batching
  - **Spark optimization:** Executor memory, shuffle partitions, broadcast joins
  - **Query optimization:** Index usage, query hints, execution plan analysis

**Sunday Review (1 hour):**
- [ ] Add 30 flashcards on error messages, troubleshooting steps, optimization techniques
- [ ] Create troubleshooting decision tree for each error type
- [ ] Document performance optimization checklist

**Weekly Goal:** Resolve 30+ error scenarios + optimize 10+ performance issues

---

## Week 8 — Final Review & Exam Preparation

### Daily Commitment: 60-90 minutes + practice exams
### Practice Tasks:

**Monday - Full Practice Exam #1 (2 hours):**
- [ ] Take timed practice exam (use MeasureUp, Whizlabs, or Microsoft Practice Assessment)
- [ ] Score: ______ / Passing: 700
- [ ] Identify top 3 weak areas
- [ ] Create remediation plan for weak areas

**Tuesday - Targeted Review (90 min):**
- [ ] Deep dive into weakest area #1
- [ ] Re-read relevant modules
- [ ] Complete 5 practice scenarios in this area
- [ ] Add 10 flashcards

**Wednesday - Targeted Review (90 min):**
- [ ] Deep dive into weakest area #2
- [ ] Watch supplementary videos on this topic
- [ ] Complete 5 practice scenarios in this area
- [ ] Add 10 flashcards

**Thursday - Full Practice Exam #2 (2 hours):**
- [ ] Take second timed practice exam
- [ ] Score: ______ / Passing: 700
- [ ] Compare with Exam #1 - improvement in weak areas?
- [ ] Identify any new weak spots

**Friday - Targeted Review (90 min):**
- [ ] Deep dive into weakest area #3
- [ ] Complete hands-on lab in this area
- [ ] Review all flagged flashcards
- [ ] Add 10 flashcards

**Saturday - Full Practice Exam #3 (2 hours + review):**
- [ ] Take third timed practice exam
- [ ] Score: ______ / Passing: 700
- [ ] Review ALL incorrect answers
- [ ] Ensure you understand why you got them wrong
- [ ] Final flashcard review session (50 cards)

**Sunday - Light Review (1 hour max):**
- [ ] Review the official [Exam Sandbox](https://aka.ms/examdemo)
- [ ] Read through your summary notes (don't cram new content)
- [ ] Review your architecture diagrams
- [ ] Relax and get good sleep before exam

**Exam Day:**
- [ ] Arrive 15 minutes early (online or in-person)
- [ ] Read each question carefully - watch for "NOT", "EXCEPT", "LEAST"
- [ ] Flag questions you're unsure about for review
- [ ] Manage time - don't spend >2 minutes on any question first pass
- [ ] Review flagged questions if time permits

**Weekly Goal:** 3 practice exams with scores consistently above 750

---

## Practice Exam Resources (Legitimate Sources)

### Free Resources:
- [ ] [Microsoft Practice Assessment for DP-700](https://learn.microsoft.com/credentials/certifications/fabric-data-engineer-associate/practice/assessment?assessment-type=practice&assessmentId=87) - Free official practice questions
- [ ] Module knowledge checks within each Microsoft Learn module
- [ ] [Microsoft Q&A](https://learn.microsoft.com/answers/tags/427/fabric) - Community questions

### Paid Practice Tests (Legal):
- [ ] [MeasureUp DP-700 Practice Test](https://www.measureup.com/microsoft-practice-test-dp-700-implementing-data-engineering-solutions-using-microsoft-fabric.html) - Official Microsoft practice test partner (~$99)
- [ ] [Whizlabs DP-700 Practice Tests](https://www.whizlabs.com/) - If available (~$30-50)
- [ ] [Udemy Practice Tests](https://www.udemy.com/) - Search for "DP-700" practice tests (verify reviews)

### Study Groups & Communities:
- [ ] [Microsoft Tech Community - Fabric](https://techcommunity.microsoft.com/t5/microsoft-fabric-blog/bg-p/FabricBlog)
- [ ] [Reddit r/MicrosoftFabric](https://www.reddit.com/r/MicrosoftFabric/)
- [ ] LinkedIn study groups (search "DP-700 study group")
- [ ] YouTube exam preparation videos (John Savill, Adam Marczak, etc.)

---

## Weekly Commitment Summary

| Week | Module Study | Hands-On Labs | Practice Questions | Review/Flashcards | Total Hours |
|------|--------------|---------------|--------------------|--------------------|-------------|
| W0   | 2 hrs        | 2 hrs         | 0                  | 1 hr               | 5 hrs       |
| W1   | 4 hrs        | 3 hrs         | 1 hr               | 1 hr               | 9 hrs       |
| W2   | 4 hrs        | 3 hrs         | 1 hr               | 1 hr               | 9 hrs       |
| W3   | 4 hrs        | 3 hrs         | 1 hr               | 1 hr               | 9 hrs       |
| W4   | 4 hrs        | 3 hrs         | 1 hr               | 1 hr               | 9 hrs       |
| W5   | 4 hrs        | 3 hrs         | 1 hr               | 1 hr               | 9 hrs       |
| W6   | 4 hrs        | 3 hrs         | 1 hr               | 1 hr               | 9 hrs       |
| W7   | 5 hrs        | 4 hrs         | 2 hrs              | 1 hr               | 12 hrs      |
| W8   | 2 hrs        | 0 hrs         | 6 hrs (exams)      | 2 hrs              | 10 hrs      |
| **TOTAL** | **33 hrs** | **24 hrs** | **14 hrs** | **10 hrs** | **81 hrs** |

**Average: ~10 hours per week over 8 weeks**

---

## Daily Routine Template

### Weekday (45-60 min):
- **10 minutes:** Anki flashcard review (morning)
- **30-40 minutes:** Microsoft Learn module (evening)
- **10 minutes:** Create 3-5 new flashcards from today's learning

### Saturday (2-4 hours):
- **2-3 hours:** Hands-on lab session
- **30 minutes:** Document lab results and create flashcards
- **30 minutes:** Week in review - update study tracker

### Sunday (30-60 min):
- **30 minutes:** Light review - flashcards and notes
- **30 minutes:** Plan next week's schedule

---

## Progress Tracking Template

Create a simple tracker (spreadsheet or markdown file):

```
| Week | Modules Complete | Lab Complete | Practice Score | Flashcards Added | Notes |
|------|------------------|--------------|----------------|------------------|-------|
| W0   | ✅ Setup         | ✅           | N/A            | 15               |       |
| W1   | 4/4 ✅           | ✅           | 70%            | 20               |       |
| W2   | 4/4 ✅           | ✅           | 75%            | 20               |       |
| W3   | 3/3 ✅           | ✅           | 80%            | 20               |       |
| W4   | 5/5 ✅           | ✅           | 82%            | 25               |       |
| W5   | 6/6 ✅           | ✅           | 85%            | 25               |       |
| W6   | 4/4 ✅           | ✅           | 88%            | 30               |       |
| W7   | Review ✅        | ✅           | 90%            | 35               |       |
| W8   | Review ✅        | N/A          | Exam 1: 820    | 10               |       |
```

---

## Success Criteria Checklist

By the end of Week 8, you should have:

- [ ] Completed all 26 Microsoft Learn modules with hands-on exercises
- [ ] Completed 12+ hands-on labs documented in your repo
- [ ] Built and reviewed 200+ Anki flashcards
- [ ] Scored 750+ on at least 2 practice exams
- [ ] Implemented end-to-end solutions covering all exam objectives
- [ ] Resolved 30+ error scenarios across all Fabric components
- [ ] Optimized 10+ performance issues
- [ ] Created architecture diagrams for lakehouse, warehouse, and streaming solutions
- [ ] Configured security at all 7 levels (workspace, item, row, column, object, folder/file, dynamic masking)
- [ ] Implemented CI/CD deployment pipeline

**If you can check all these boxes, you're ready for the exam! 🎯**

---

Good luck with your DP-700 journey! Remember: consistent daily practice beats marathon cramming sessions. 🚀
