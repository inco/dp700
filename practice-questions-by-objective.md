# DP-700 Practice Questions by Exam Objective

> **Source:** Created based on official DP-700 exam objectives (January 26, 2026 update)  
> **Purpose:** Legitimate practice scenarios aligned with Microsoft exam skills measured  
> **Note:** These are scenario-based practice questions, NOT actual exam questions

---

## ⚠️ Important Notice About Exam Preparation

**✅ USE THESE LEGITIMATE RESOURCES:**
- [Official Microsoft Practice Assessment (FREE)](https://learn.microsoft.com/credentials/certifications/fabric-data-engineer-associate/practice/assessment?assessment-type=practice&assessmentId=87)
- Microsoft Learn module knowledge checks
- MeasureUp official practice tests (paid)
- Whizlabs practice tests (paid)
- Community-created scenario questions (like this file)

**❌ DO NOT USE:**
- Brain dump sites (illegal, violates Microsoft terms)
- Actual exam questions shared online
- Any site claiming to have "real exam questions"

Using brain dumps can result in **exam invalidation** and **permanent certification ban**.

---

## Skill Area 1: Implement and Manage an Analytics Solution (30-35%)

### 1.1 Configure Microsoft Fabric Workspace Settings

**Question 1:**  
You need to configure a Fabric workspace for a data engineering team that will run large-scale Spark jobs. The jobs require Apache Spark 3.4 with Delta Lake optimizations and custom library installations.

Which workspace settings should you configure?

A) Configure Spark workspace settings: Set Spark version to 3.4, enable automatic library installation, configure default pool size  
B) Configure domain workspace settings only  
C) Configure OneLake workspace settings: Enable caching and set retention policy  
D) No configuration needed - workspaces use optimal defaults

**Answer:** A  
**Explanation:** Spark workspace settings control the Spark runtime environment, including version, libraries, and pool configuration. This is essential for large-scale jobs with specific requirements.

---

**Question 2:**  
Your organization has multiple business units, each requiring isolated data domains within Microsoft Fabric. You need to ensure that each domain can manage its own workspace settings, data governance policies, and capacity allocation.

What should you configure?

A) Create separate Fabric capacities for each business unit  
B) Configure domain workspace settings to establish domain boundaries and governance  
C) Use workspace-level access controls only  
D) Implement row-level security in each semantic model

**Answer:** B  
**Explanation:** Domain workspace settings enable organizations to create logical boundaries for different business units, each with their own governance policies and capacity management.

---

**Question 3:**  
You are configuring a workspace for data pipeline orchestration. The pipelines will use dynamic parameters, scheduled triggers, and event-based triggers. Some pipelines need to chain multiple activities with conditional logic.

Which workspace setting should you prioritize?

A) Spark workspace settings  
B) OneLake workspace settings  
C) Data workflow workspace settings  
D) Domain workspace settings

**Answer:** C  
**Explanation:** Data workflow workspace settings configure the orchestration environment for pipelines, dataflows, and workflow automation including triggers and activity chaining.

---

**Question 4:**  
Your lakehouse contains 50 TB of data. Users report slow performance when accessing frequently used datasets. You want to improve read performance while optimizing storage costs.

What OneLake workspace setting should you configure?

A) Enable OneLake caching for frequently accessed data  
B) Increase Spark pool size  
C) Configure data retention policy to 30 days  
D) Enable automatic table optimization

**Answer:** A  
**Explanation:** OneLake caching improves read performance for frequently accessed data by maintaining a cache layer, reducing latency for common queries.

---

### 1.2 Implement Lifecycle Management in Fabric

**Question 5:**  
You are developing notebooks and pipelines in a development workspace. You need to track changes, enable rollback capabilities, and manage deployments to test and production environments.

What should you implement first?

A) Create deployment pipeline with dev → test → prod stages  
B) Configure version control integration with Azure DevOps or GitHub  
C) Create database projects for all warehouses  
D) Export items manually and store in blob storage

**Answer:** B  
**Explanation:** Version control should be configured first to track all changes. Deployment pipelines depend on version-controlled items. This follows the proper lifecycle management sequence.

---

**Question 6:**  
Your team manages a Fabric data warehouse with 50+ tables, views, and stored procedures. You need to implement CI/CD practices including automated testing, version control, and structured deployments.

What should you create?

A) Lakehouse with notebooks  
B) Database project with .sqlproj file  
C) Dataflow Gen2 for each table  
D) Power BI dataset

**Answer:** B  
**Explanation:** Database projects enable version control and CI/CD for warehouse objects (tables, views, procedures). They support automated builds and deployments through standard DevOps practices.

---

**Question 7:**  
You have configured Git integration for your Fabric workspace. A notebook was modified and committed to the main branch. You now need to promote this change to the test environment, then to production, with approval gates between environments.

What should you use?

A) Manually export and import the notebook  
B) Create and configure a deployment pipeline  
C) Use Power BI service deployment  
D) Copy workspace settings

**Answer:** B  
**Explanation:** Deployment pipelines in Fabric provide structured promotion across dev → test → prod environments with approval gates and automated deployment of workspace items.

---

### 1.3 Configure Security and Governance

**Question 8:**  
You need to implement the following security requirements:
- Sales team can only see data for their region
- Social Security Numbers must be masked for non-admin users
- Finance workspace is read-only for analysts
- PII columns have sensitivity labels

Which security features should you implement? (Select all that apply)

A) Row-level security for regional filtering  
B) Dynamic data masking for SSN columns  
C) Workspace-level access control (Viewer role for analysts)  
D) Sensitivity labels on PII columns  
E) Object-level security

**Answer:** A, B, C, D  
**Explanation:** This scenario requires multiple security layers: RLS (row filtering), DDM (column masking), workspace access control, and sensitivity labels for compliance.

---

**Question 9:**  
You have a data warehouse with customer information including address, phone, and credit card numbers. Analysts need to query customer data for analytics but should NOT see actual credit card numbers.

What should you implement?

A) Row-level security  
B) Column-level security (remove access to credit card column)  
C) Dynamic data masking on credit card column  
D) Object-level security (deny access to customer table)

**Answer:** C  
**Explanation:** Dynamic data masking allows analysts to query the table while masking sensitive column values (e.g., showing XXXX-XXXX-XXXX-1234 instead of full number).

---

**Question 10:**  
Your organization requires that all certified datasets and lakehouses are clearly identified so users can trust them for business decisions. You need to mark specific items as verified and production-ready.

What feature should you use?

A) Apply sensitivity labels  
B) Endorse items (promote or certify)  
C) Configure workspace logging  
D) Implement item-level access controls

**Answer:** B  
**Explanation:** Item endorsement allows you to promote or certify Fabric items, signaling trust and production-readiness to users browsing the catalog.

---

**Question 11:**  
You need to audit all user activities in a workspace including item access, modifications, and sharing events for compliance reporting.

What should you configure?

A) Enable workspace logging  
B) Configure Azure Monitor  
C) Set up Power BI audit logs only  
D) Create custom event tracking in notebooks

**Answer:** A  
**Explanation:** Workspace logging in Fabric captures detailed activity logs for auditing and compliance, including access patterns and modifications.

---

**Question 12:**  
You have a lakehouse with the following folder structure:
```
/sales/
  /region1/
  /region2/
/finance/
/hr/
```

Regional sales managers should only access their specific region folder. How do you implement this?

A) Row-level security in semantic model  
B) Folder/file-level access controls in OneLake  
C) Workspace-level access controls  
D) Dynamic data masking

**Answer:** B  
**Explanation:** OneLake supports folder/file-level security, allowing fine-grained access control to specific directories within a lakehouse.

---

### 1.4 Orchestrate Processes

**Question 13:**  
You need to transform data using Power Query for data cleansing and reshaping. The transformation involves merging multiple CSV files, removing duplicates, and applying business rules.

Which orchestration option should you choose?

A) Dataflow Gen2  
B) Data pipeline with Copy activity  
C) Spark notebook  
D) KQL query

**Answer:** A  
**Explanation:** Dataflow Gen2 is optimized for Power Query (M) transformations with visual interface for data cleansing, merging, and reshaping.

---

**Question 14:**  
You need to copy data from 20 different Azure SQL Database tables to a lakehouse, apply minimal transformations (schema mapping only), and run this process every night at 2 AM.

Which orchestration approach should you choose?

A) Notebook with PySpark  
B) Data pipeline with scheduled trigger  
C) Dataflow Gen2  
D) Manual export/import

**Answer:** B  
**Explanation:** Pipelines are ideal for scheduled bulk copy operations with minimal transformation, offering better performance for large-scale data movement than other options.

---

**Question 15:**  
You need to implement complex data transformation logic including:
- Custom Python libraries for ML feature engineering
- Delta Lake merge operations with complex conditions
- Partition optimization
- Error handling and retry logic

Which orchestration option is most appropriate?

A) Dataflow Gen2  
B) Pipeline with Copy activity  
C) Spark notebook  
D) T-SQL stored procedure

**Answer:** C  
**Explanation:** Notebooks provide full programmatic control with custom libraries, complex Delta operations, and sophisticated error handling that visual tools cannot support.

---

**Question 16:**  
You need to run a data pipeline that:
- Triggers when a new file arrives in OneLake
- Passes the filename as a parameter
- Executes different logic based on file type (.csv vs .parquet)

What should you configure?

A) Schedule trigger with fixed time  
B) Event-based trigger with dynamic expressions and conditional activities  
C) Manual trigger only  
D) Tumbling window trigger

**Answer:** B  
**Explanation:** Event-based triggers can respond to file events, pass dynamic parameters, and pipelines can use conditional activities (If/Switch) based on parameters.

---

**Question 17:**  
A pipeline needs to process data for the last 24 hours every hour, with each run processing a different non-overlapping time window.

What trigger type should you use?

A) Schedule trigger (every hour)  
B) Tumbling window trigger (1-hour window)  
C) Event-based trigger  
D) Storage event trigger

**Answer:** B  
**Explanation:** Tumbling window triggers process data in fixed, non-overlapping windows with built-in window parameters (WindowStart, WindowEnd), ideal for time-series processing.

---

**Question 18:**  
You have a pipeline that needs to run a notebook with different parameters based on the source system. The pipeline has 5 source systems, and each requires different Spark configuration and transformation logic.

How should you implement this?

A) Create 5 separate pipelines  
B) Use pipeline parameters and dynamic expressions to pass values to notebook activity  
C) Hardcode values in the notebook  
D) Use only schedule triggers

**Answer:** B  
**Explanation:** Pipeline parameters and dynamic expressions enable a single pipeline to handle multiple scenarios by passing runtime values to notebook activities.

---

## Skill Area 2: Ingest and Transform Data (30-35%)

### 2.1 Design and Implement Loading Patterns

**Question 19:**  
You are ingesting customer data from an operational database. The table has a LastModified timestamp column. The initial load contains 10 million rows, and daily changes affect ~50,000 rows.

What loading pattern should you implement?

A) Full load every day  
B) Incremental load using LastModified as watermark  
C) Streaming load with Change Data Capture  
D) Manual delta detection

**Answer:** B  
**Explanation:** Incremental load using a watermark column (LastModified) is efficient for scenarios where only a small percentage of data changes, avoiding unnecessary full scans.

---

**Question 20:**  
You need to load real-time clickstream data from a website into Fabric for immediate analysis. The data volume is 10,000 events per second with sub-second latency requirements.

What loading pattern should you implement?

A) Batch load every 5 minutes  
B) Incremental load hourly  
C) Streaming load using Eventstreams  
D) Full load daily

**Answer:** C  
**Explanation:** Streaming loads handle high-volume, low-latency scenarios where near-real-time analysis is required. Eventstreams provide the necessary ingestion infrastructure.

---

**Question 21:**  
You are loading data into a dimensional model with a Customer dimension and Sales fact table. The dimension has 100K rows updated weekly, while fact table receives 1M new rows daily.

What loading strategy should you use?

A) Full load for both dimension and fact tables daily  
B) Full load for dimension (weekly), incremental load for fact (daily based on sale date)  
C) Incremental load for both using change tracking  
D) Streaming load for both tables

**Answer:** B  
**Explanation:** Dimensions typically use full load due to smaller size and less frequent changes. Facts use incremental loads due to large volume and append-only nature.

---

### 2.2 Ingest and Transform Batch Data

**Question 22:**  
You need to choose a data store for the following scenarios. Match each scenario to the appropriate store:

Scenarios:
1. Storing semi-structured JSON files for downstream Spark processing
2. Storing structured data warehouse tables with T-SQL query requirements
3. Storing files for Power BI DirectQuery with automatic optimization
4. Storing real-time sensor data with time-series analysis requirements

Data Stores:
A) Lakehouse (Files section)  
B) Data Warehouse  
C) Lakehouse (Tables section)  
D) Eventhouse

**Answer:** 1-A, 2-B, 3-C, 4-D  
**Explanation:**  
- Lakehouse Files: semi-structured/unstructured files
- Warehouse: structured relational data with T-SQL
- Lakehouse Tables: optimized Delta tables for BI
- Eventhouse: time-series and real-time analytics

---

**Question 23:**  
You have a data transformation requirement:
- Source: CSV files in ADLS Gen2
- Transformation: Merge 3 files, remove duplicates, apply business rules
- Complexity: Medium (20+ transformation steps)
- Skills: Team knows M language (Power Query)

Which transformation approach should you choose?

A) Dataflow Gen2 (Power Query M)  
B) Notebook with PySpark  
C) T-SQL in Warehouse  
D) KQL in Eventhouse

**Answer:** A  
**Explanation:** Dataflow Gen2 is ideal when team has Power Query/M skills and transformations are visual/medium complexity. It provides better UI experience than code for these scenarios.

---

**Question 24:**  
You need to provide access to data in an external Azure Data Lake Storage Gen2 account without copying the data into Fabric.

What should you create?

A) Data pipeline to copy data  
B) Shortcut to the ADLS Gen2 location  
C) Mirroring from ADLS Gen2  
D) Dataflow to import data

**Answer:** B  
**Explanation:** Shortcuts provide virtualized access to external data in OneLake without data movement, ideal for accessing data where it resides.

---

**Question 25:**  
You need to replicate a Snowflake database to Fabric with automatic synchronization, minimal latency, and no custom code.

What feature should you use?

A) Create shortcuts to Snowflake  
B) Implement mirroring from Snowflake  
C) Build a pipeline with incremental load  
D) Use Dataflow Gen2 with refresh schedule

**Answer:** B  
**Explanation:** Mirroring provides automatic, low-latency replication from supported sources (including Snowflake) without custom code. Shortcuts don't replicate, they virtualize access.

---

**Question 26:**  
You are ingesting data from 100 REST API endpoints into a lakehouse. Each endpoint returns JSON data. You need a scalable, code-based approach with error handling.

What should you use?

A) Create 100 separate dataflows  
B) Use a pipeline with ForEach activity and Web activity  
C) Manual API calls  
D) Power BI dataflow

**Answer:** B  
**Explanation:** Pipelines with ForEach loops can iterate over multiple endpoints efficiently. Web activity can call REST APIs, and pipeline provides built-in error handling and retry logic.

---

**Question 27:**  
You have files landing continuously in OneLake that need to be automatically ingested into Delta tables without manual intervention.

What should you implement?

A) Scheduled pipeline every hour  
B) Continuous integration from OneLake (auto-ingestion)  
C) Manual notebook execution  
D) Dataflow refresh

**Answer:** B  
**Explanation:** Continuous integration from OneLake enables automatic ingestion of new files into Delta tables as they arrive, without scheduled triggers.

---

**Question 28:**  
You need to transform customer data with these requirements:
- Input: 5M rows in lakehouse Delta table
- Transformation: Complex aggregations, window functions, joins with 3 other tables
- Output: Aggregated Delta table with 100K rows
- Team skill: Python and SQL

Which transformation tool should you use?

A) Power Query (M) in Dataflow Gen2  
B) PySpark in notebook  
C) T-SQL in warehouse  
D) KQL query

**Answer:** B  
**Explanation:** PySpark excels at large-scale transformations with complex aggregations and joins. The team has Python skills and data is already in Delta format (Spark-native).

---

**Question 29:**  
You have a normalized OLTP schema (3NF) that you need to transform into a denormalized star schema for analytics with dimension and fact tables.

What transformation approach is most suitable?

A) Keep normalized - no transformation needed  
B) Denormalize using Spark SQL joins and aggregations  
C) Use Power Query to maintain normalization  
D) Manually export and combine in Excel

**Answer:** B  
**Explanation:** Denormalization is essential for analytical workloads. Spark SQL provides efficient joins and aggregations to transform 3NF into star schema.

---

**Question 30:**  
During data transformation, you discover:
- 1,000 duplicate customer records
- 500 orders with NULL customer IDs
- 200 orders with future OrderDate (data entry errors)

How should you handle these issues?

A) Ignore them - load all data as-is  
B) Implement data quality rules: deduplicate customers, filter NULL customer orders, reject future dates  
C) Delete the entire dataset  
D) Load into warehouse and fix later

**Answer:** B  
**Explanation:** Data quality patterns should handle duplicates (deduplication), missing values (NULL handling), and late-arriving/erroneous data (validation rules) during transformation.

---

### 2.3 Ingest and Transform Streaming Data

**Question 31:**  
You need to choose a streaming engine for processing IoT sensor data with 5-second micro-batches, stateful processing, and checkpointing.

Which streaming engine should you choose?

A) Spark Structured Streaming  
B) KQL continuous export  
C) Power Query  
D) T-SQL stored procedure

**Answer:** A  
**Explanation:** Spark Structured Streaming supports micro-batch processing, stateful operations, and checkpointing for fault tolerance. It's ideal for complex streaming transformations.

---

**Question 32:**  
You are implementing a real-time analytics solution for clickstream data. You need to decide between storage options:

Requirements:
- 100K events/second
- 1-second query latency for dashboards
- 90-day retention
- KQL query access

Which storage approach should you use?

A) Native storage in Eventhouse  
B) Mirrored storage from Event Hub  
C) Shortcuts to ADLS Gen2  
D) Lakehouse tables only

**Answer:** A  
**Explanation:** Native storage in Eventhouse is optimized for high-throughput ingestion, fast KQL queries, and time-series data. It's purpose-built for this scenario.

---

**Question 33:**  
You have streaming data from Event Hub that needs to land in both Eventhouse (for real-time queries) and Lakehouse (for historical analysis).

What should you configure?

A) Two separate ingestion pipelines  
B) Eventstream with dual destinations (Eventhouse + Lakehouse)  
C) Eventhouse only, query from there  
D) Lakehouse only with KQL endpoint

**Answer:** B  
**Explanation:** Eventstreams can route data to multiple destinations simultaneously, enabling real-time (Eventhouse) and historical (Lakehouse) analysis from a single stream.

---

**Question 34:**  
You need to compare shortcuts for real-time data access. Your scenario requires:
- Real-time queries with <1 second latency
- Data source: External ADLS Gen2 with Parquet files
- Access pattern: High-frequency analytical queries

Should you use accelerated or non-accelerated shortcuts?

A) Non-accelerated shortcuts (direct pass-through)  
B) Accelerated shortcuts (cached locally)  
C) Neither - use mirroring instead  
D) Both simultaneously

**Answer:** B  
**Explanation:** Accelerated shortcuts cache data locally in Fabric, providing faster query performance for high-frequency access. Non-accelerated shortcuts have higher latency due to pass-through queries.

---

**Question 35:**  
You are configuring an eventstream to process streaming financial transactions. You need to enrich the data, filter out test transactions, and apply transformations before storage.

What processing capability should you use within Eventstreams?

A) Load directly to destination without processing  
B) Use eventstream transformations (filter, aggregate, manage fields)  
C) Process in downstream warehouse only  
D) Manual processing after storage

**Answer:** B  
**Explanation:** Eventstreams support in-stream transformations including filtering, field management, and aggregations before data reaches the destination.

---

**Question 36:**  
You have streaming stock price data with requirements:
- Calculate 5-minute moving average
- Calculate 1-hour moving average
- Update dashboard every minute

What windowing function should you implement?

A) No windowing - process each event individually  
B) Hopping windows (1-minute hop, 5-minute and 1-hour windows)  
C) Tumbling windows only  
D) Session windows

**Answer:** B  
**Explanation:** Hopping windows allow overlapping time windows, enabling calculations over different periods (5-min, 1-hour) with frequent updates (1-min hop).

---

**Question 37:**  
You need to process streaming data using KQL with these requirements:
- Calculate count of events per 10-second window
- Windows should not overlap
- Each event belongs to exactly one window

Which windowing function should you use in KQL?

A) `summarize by bin(timestamp, 10s)` - tumbling window  
B) Hopping window with 10s hop and 10s window  
C) Sliding window  
D) Session window

**Answer:** A  
**Explanation:** The `bin()` function in KQL creates tumbling (non-overlapping) windows. Each event belongs to exactly one 10-second window.

---

## Skill Area 3: Monitor and Optimize an Analytics Solution (30-35%)

### 3.1 Monitor Fabric Items

**Question 38:**  
You need to monitor the following activities in your Fabric environment:
- Pipeline execution status and failures
- Dataflow refresh success rate
- Notebook execution duration

Where should you configure monitoring?

A) Azure Monitor only  
B) Fabric monitoring dashboard and alerts  
C) Power BI admin portal only  
D) Manual log review

**Answer:** B  
**Explanation:** Fabric provides built-in monitoring for pipelines, dataflows, and notebooks with metrics, dashboards, and alerting capabilities.

---

**Question 39:**  
Your semantic model refresh is failing intermittently. You need to monitor refresh operations and receive email notifications when failures occur.

What should you configure?

A) Power BI alert on dataset owner's email  
B) Fabric monitoring alert for semantic model refresh with email action  
C) Manual checks every hour  
D) Azure Monitor custom alert

**Answer:** B  
**Explanation:** Fabric monitoring supports specific alerts for semantic model refresh operations with email/Teams notifications when failures occur.

---

**Question 40:**  
You need to create a centralized monitoring dashboard showing:
- Pipeline run status (last 24 hours)
- Data ingestion volume (GB/hour)
- Failed notebook executions
- Warehouse query performance

What should you build?

A) Excel spreadsheet with manual data entry  
B) Power BI report connected to Fabric monitoring data  
C) Text file log  
D) Email reports only

**Answer:** B  
**Explanation:** Power BI reports can connect to Fabric monitoring/telemetry data to create comprehensive dashboards visualizing pipeline, ingestion, notebook, and query metrics.

---

### 3.2 Identify and Resolve Errors

**Question 41:**  
A pipeline fails with error: "Copy activity failed: The specified container does not exist."

What is the most likely cause and solution?

A) Network timeout - increase timeout setting  
B) Storage account authentication issue or incorrect container name - verify connection and path  
C) Out of memory - increase capacity  
D) Syntax error in query

**Answer:** B  
**Explanation:** "Container does not exist" indicates either incorrect container name in the path or authentication failure preventing container enumeration.

---

**Question 42:**  
A Dataflow Gen2 refresh fails with: "Expression.Error: The column 'CustomerID' of the table wasn't found."

What is the cause?

A) Memory limit exceeded  
B) Schema drift - source schema changed and column no longer exists  
C) Network connectivity issue  
D) Insufficient permissions

**Answer:** B  
**Explanation:** This error indicates the source schema changed, and a column referenced in Power Query transformations is missing. This is classic schema drift.

---

**Question 43:**  
A notebook execution fails with: "OutOfMemoryError: Java heap space"

What should you do to resolve this?

A) Reduce data volume or increase Spark executor memory configuration  
B) Change to different programming language  
C) Delete the notebook and recreate  
D) Restart Fabric workspace

**Answer:** A  
**Explanation:** Java heap space errors indicate insufficient memory. Solutions include processing smaller data partitions or increasing executor memory in Spark configuration.

---

**Question 44:**  
An eventstream shows "Authentication failed" when connecting to Event Hub.

What should you check?

A) Event Hub connection string and namespace, ensure correct access policy/key  
B) Network bandwidth  
C) Table schema  
D) Query syntax

**Answer:** A  
**Explanation:** Authentication failures typically relate to incorrect connection strings, expired keys, or wrong access policies for Event Hub.

---

**Question 45:**  
An Eventhouse ingestion fails with: "BadRequest_InvalidJsonMapping"

What is the likely issue?

A) Network timeout  
B) JSON schema mapping mismatch between source data and target table  
C) Insufficient capacity  
D) Permission denied

**Answer:** B  
**Explanation:** Invalid JSON mapping indicates mismatch between the JSON structure in the source data and the table schema/mapping configuration in Eventhouse.

---

**Question 46:**  
A T-SQL query in the warehouse fails with: "Transaction was deadlocked on lock resources with another process."

What optimization should you implement?

A) Query optimization to reduce lock duration or implement retry logic  
B) Increase memory  
C) Change to NoSQL  
D) Delete the table

**Answer:** A  
**Explanation:** Deadlocks occur when queries lock resources in conflicting order. Solutions include query optimization, index tuning, or implementing retry logic.

---

**Question 47:**  
A shortcut configuration fails with: "Access Denied - Insufficient permissions"

What should you verify?

A) Source storage account permissions and authentication credentials  
B) Network configuration only  
C) Fabric capacity size  
D) Shortcut name spelling

**Answer:** A  
**Explanation:** Shortcut access denied errors indicate missing RBAC permissions on source storage (e.g., Storage Blob Data Reader role) or invalid credentials.

---

### 3.3 Optimize Performance

**Question 48:**  
A lakehouse table scan is taking 10 minutes to query 100GB of data. The table has millions of small Parquet files.

What optimization should you apply?

A) `OPTIMIZE` command to compact small files into larger ones (bin-compaction)  
B) Delete the table and recreate  
C) Switch to CSV format  
D) Increase query timeout

**Answer:** A  
**Explanation:** The OPTIMIZE command performs bin-compaction, merging many small files into optimal-sized files (~1GB), drastically improving query performance.

---

**Question 49:**  
Queries filtering on the `OrderDate` column are slow despite the table having 500M rows. Most queries filter on recent dates (last 30 days).

What optimization should you implement?

A) Z-order optimization on OrderDate column  
B) Delete old data  
C) Switch to different table type  
D) No optimization possible

**Answer:** A  
**Explanation:** Z-order (multi-dimensional clustering) co-locates related data, dramatically improving filter performance on commonly queried columns like dates.

---

**Question 50:**  
A pipeline copies 10GB of data in 2 hours using default settings. You need to reduce this to under 30 minutes.

What pipeline optimizations should you try?

A) Increase copy parallelism (degree of copy parallelism) and DIU (Data Integration Units)  
B) Decrease parallelism  
C) Run during different time  
D) Copy less data

**Answer:** A  
**Explanation:** Increasing DIU and copy parallelism allows pipelines to transfer data faster by processing multiple partitions concurrently.

---

**Question 51:**  
Warehouse queries are slow. Analysis shows that statistics are outdated (last updated 6 months ago) and queries are not using indexes efficiently.

What should you do?

A) Update statistics and verify index usage in query plans  
B) Delete all indexes  
C) Switch to lakehouse  
D) Increase timeout values

**Answer:** A  
**Explanation:** Current statistics enable the query optimizer to create efficient execution plans. Combined with proper index usage, this typically resolves most warehouse performance issues.

---

**Question 52:**  
An eventstream is dropping events during peak load (100K events/sec). Current configuration: 2 throughput units, 4 partitions.

What should you optimize?

A) Increase throughput units and partitions to handle peak load  
B) Decrease number of partitions  
C) Stop the eventstream  
D) Change to batch processing

**Answer:** A  
**Explanation:** Event Hub/Eventstream performance scales with throughput units and partitions. Increasing both allows higher event ingestion rates.

---

**Question 53:**  
Spark jobs are running slowly with frequent "Task not serializable" errors and high shuffle times.

What Spark optimizations should you apply?

A) Use broadcast joins for small tables, optimize shuffle partitions, increase executor memory  
B) Reduce number of executors  
C) Switch to pandas  
D) Disable shuffling entirely

**Answer:** A  
**Explanation:** Broadcast joins eliminate shuffles for small-large table joins. Optimizing shuffle partitions and executor memory improves Spark performance.

---

**Question 54:**  
A complex analytical query with multiple joins and aggregations takes 5 minutes. The query is run 100+ times/day with the same parameters.

What warehouse optimization should you implement?

A) Create a materialized view or enable result set caching  
B) Delete the query  
C) Run less frequently  
D) Increase timeout

**Answer:** A  
**Explanation:** Materialized views pre-compute expensive aggregations. Result set caching returns cached results for identical queries. Both dramatically reduce repeated query times.

---

## Answer Key Summary

| Question | Answer | Skill Area |
|----------|--------|------------|
| 1        | A      | Workspace Settings |
| 2        | B      | Domain Settings |
| 3        | C      | Data Workflow Settings |
| 4        | A      | OneLake Settings |
| 5        | B      | Version Control |
| 6        | B      | Database Projects |
| 7        | B      | Deployment Pipelines |
| 8        | A,B,C,D| Multi-layer Security |
| 9        | C      | Dynamic Data Masking |
| 10       | B      | Item Endorsement |
| 11       | A      | Workspace Logging |
| 12       | B      | Folder-level Security |
| 13       | A      | Dataflow Gen2 |
| 14       | B      | Pipeline Orchestration |
| 15       | C      | Notebook Orchestration |
| 16       | B      | Event-based Triggers |
| 17       | B      | Tumbling Window |
| 18       | B      | Pipeline Parameters |
| 19       | B      | Incremental Load |
| 20       | C      | Streaming Load |
| 21       | B      | Dimensional Load |
| 22       | 1-A,2-B,3-C,4-D | Data Store Selection |
| 23       | A      | Transformation Tool |
| 24       | B      | Shortcuts |
| 25       | B      | Mirroring |
| 26       | B      | Pipeline API Ingestion |
| 27       | B      | Continuous Integration |
| 28       | B      | PySpark Transform |
| 29       | B      | Denormalization |
| 30       | B      | Data Quality |
| 31       | A      | Streaming Engine |
| 32       | A      | Eventhouse Storage |
| 33       | B      | Dual Destinations |
| 34       | B      | Accelerated Shortcuts |
| 35       | B      | Stream Processing |
| 36       | B      | Hopping Windows |
| 37       | A      | Tumbling Windows KQL |
| 38       | B      | Fabric Monitoring |
| 39       | B      | Semantic Model Monitor |
| 40       | B      | Monitoring Dashboard |
| 41       | B      | Pipeline Error |
| 42       | B      | Dataflow Error |
| 43       | A      | Notebook Error |
| 44       | A      | Eventstream Error |
| 45       | B      | Eventhouse Error |
| 46       | A      | T-SQL Error |
| 47       | A      | Shortcut Error |
| 48       | A      | Lakehouse Optimization |
| 49       | A      | Z-Order Optimization |
| 50       | A      | Pipeline Optimization |
| 51       | A      | Warehouse Optimization |
| 52       | A      | Eventstream Optimization |
| 53       | A      | Spark Optimization |
| 54       | A      | Query Optimization |

---

## Study Tips

1. **Understand the "Why":** Don't just memorize answers - understand why each solution is correct
2. **Hands-on Practice:** Implement each scenario in your Fabric environment
3. **Create Scenarios:** Make flashcards with scenario → solution mappings
4. **Review Explanations:** The explanation often contains key concepts tested on the exam
5. **Link to Docs:** For each question, review the related Microsoft Learn module

---

## Next Steps

After completing these practice questions:

1. [ ] Score yourself - aim for 85%+ correct
2. [ ] Review all incorrect answers and understand why
3. [ ] Create flashcards for concepts you missed
4. [ ] Complete hands-on labs for weak areas
5. [ ] Take official Microsoft Practice Assessment
6. [ ] Review MeasureUp or Whizlabs practice tests (paid)

---

**Remember:** These are practice scenarios based on exam objectives, NOT actual exam questions. The actual exam will have different scenarios testing the same concepts.

**Good luck with your DP-700 certification! 🎯**
