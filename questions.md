# DP-700 Exam Questions Database

> Format: Markdown file for easy editing and version control
> Use this file to collect questions from practice tests, MeasureUp, Whizlabs, and Microsoft official assessments

---

## Question 1
**Category:** Workspace & Configuration  
**Difficulty:** Medium  
**Type:** Multiple Choice

**Question:**
You have a Microsoft Fabric workspace with multiple users. You need to ensure that viewers can see data but cannot modify it. Which workspace role should you assign?

**Options:**
- [ ] A) Admin
- [ ] B) Member
- [ ] C) Contributor
- [ ] D) Viewer

**Correct Answer:** D

**Explanation:**
The Viewer role in Fabric workspaces allows users to view items and consume reports, but cannot create, edit, or delete items. Admin can manage workspace, Member can create and edit items, and Contributor can edit items but not manage workspace.

**Source:** Microsoft Learn - Administer Microsoft Fabric

---

## Question 2
**Category:** Data Ingestion  
**Difficulty:** Medium  
**Type:** Multiple Choice

**Question:**
You need to ingest data from an Azure SQL Database into a Fabric lakehouse. The data is approximately 500 GB and must be refreshed daily. Which ingestion method provides the best performance for incremental loads?

**Options:**
- [ ] A) Dataflow Gen2 with native connector
- [ ] B) Copy activity in a pipeline
- [ ] C) Spark notebook with JDBC connection
- [ ] D) Mirroring from Azure SQL Database

**Correct Answer:** D

**Explanation:**
Mirroring is the most efficient method for continuous synchronization from external databases, automatically handling incremental updates. Copy activity is good for scheduled loads, Dataflow Gen2 adds transformation overhead, and Spark JDBC requires manual optimization.

**Source:** MeasureUp Practice Test

---

## Question 3
**Category:** Lakehouse Architecture  
**Difficulty:** Hard  
**Type:** Multiple Choice

**Question:**
You're implementing a medallion architecture in a Fabric lakehouse. In the bronze layer, you notice that queries are taking 30 seconds to scan 100 GB of parquet files. The queries need to complete in under 5 seconds. What should you implement?

**Options:**
- [ ] A) Add clustering index on the parquet files
- [ ] B) Convert parquet to CSV format
- [ ] C) Apply V-Order optimization to the table
- [ ] D) Partition the data by date

**Correct Answer:** C

**Explanation:**
V-Order is Fabric's columnar optimization technology that dramatically improves query performance on Parquet files in lakehouses. It provides 20-30x faster queries without changing the data format. Clustering indexes are for warehouses, CSV is slower than Parquet, and partitioning helps but doesn't match V-Order's performance gains.

**Source:** Whizlabs Practice Test

---

## Question 4
**Category:** Real-Time Intelligence  
**Difficulty:** Medium  
**Type:** Multiple Choice

**Question:**
You have an environment sending 10,000 events per second to an Azure Event Hub. You need to process these events in real-time within Fabric. Which component should you use as the first step?

**Options:**
- [ ] A) Apache Spark Streaming
- [ ] B) Eventstream
- [ ] C) Dataflow Gen2
- [ ] D) Power BI Real-Time Dashboard

**Correct Answer:** B

**Explanation:**
Eventstream is the Fabric component designed to ingest and route real-time event data. It acts as the entry point for streaming data and can route to Eventhouse, Lakehouse, or Spark for processing. Spark Streaming requires manual configuration, Dataflow is batch-oriented, and Power BI dashboards consume processed data.

**Source:** Microsoft Learn - Real-Time Intelligence

---

## Question 5
**Category:** Security & Access Control  
**Difficulty:** Hard  
**Type:** Multiple Choice

**Question:**
You need to implement a solution where sales representatives can only view sales data for their assigned region. The solution must work across multiple Power BI reports and Fabric semantic models. Which combination of security features should you implement?

**Options:**
- [ ] A) Row-level security (RLS) in the semantic model only
- [ ] B) Column-level security in the warehouse + RLS in semantic model
- [ ] C) Object-level permissions + dynamic data masking
- [ ] D) Folder-level security in OneLake + workspace roles

**Correct Answer:** A

**Explanation:**
Row-level security (RLS) in the semantic model is the most effective way to implement region-based filtering across multiple reports. It evaluates at query time based on user context and applies to all consuming reports. Column-level security hides columns, object-level controls object access, and OneLake security doesn't provide row filtering.

**Source:** Microsoft Learn - Implement Security in Microsoft Fabric

---

## Question 6
**Category:** Data Warehouse  
**Difficulty:** Medium  
**Type:** Multiple Choice

**Question:**
You're designing a star schema for a retail analytics warehouse. You have a FactSales table with 1 billion rows and a DimDate dimension with 10 years of data (3,650 rows). When you join these tables, queries are slow. What index strategy should you implement?

**Options:**
- [ ] A) Clustered index on FactSales.DateKey
- [ ] B) Clustered columnstore index on FactSales + non-clustered on DimDate.DateKey
- [ ] C) Hash index on the join keys
- [ ] D) Full-text index on DimDate

**Correct Answer:** B

**Explanation:**
Clustered columnstore index (CCI) on the fact table provides excellent compression and query performance for analytical workloads. Dimension tables benefit from non-clustered indexes on foreign keys. Hash indexes are for in-memory tables, and full-text indexes are for text search, not analytical queries.

**Source:** Whizlabs Practice Test

---

## Question 7
**Category:** Data Transformation  
**Difficulty:** Medium  
**Type:** Multiple Choice

**Question:**
You're transforming data in a Spark notebook and need to handle late-arriving fact records (transactions that arrive days after they occur). Which approach best implements Slowly Changing Dimension Type 2 (SCD Type 2) for this scenario?

**Options:**
- [ ] A) Drop records that arrive after 1 day
- [ ] B) Use MERGE statement with surrogate keys and effective date ranges
- [ ] C) Overwrite the older records with new values
- [ ] D) Store late records in a separate archive table

**Correct Answer:** B

**Explanation:**
SCD Type 2 maintains historical records by creating multiple rows with different effective date ranges. The MERGE statement efficiently handles both new records and updates by inserting new versions and closing old ones. This preserves historical accuracy for late-arriving facts.

**Source:** Microsoft Learn - Transform Data with Spark

---

## Question 8
**Category:** Monitoring & Troubleshooting  
**Difficulty:** Hard  
**Type:** Multiple Choice

**Question:**
A data pipeline that runs daily has started failing intermittently with "Timeout expired" errors. The pipeline loads 5 GB of data and takes 2 hours on average. What should you check first?

**Options:**
- [ ] A) Increase the default timeout setting in the pipeline
- [ ] B) Check if source system performance has degraded or network connectivity issues
- [ ] C) Split the load into smaller batches
- [ ] D) Upgrade the Fabric capacity

**Correct Answer:** B

**Explanation:**
Before changing configurations, always identify the root cause. Timeouts typically indicate external issues (source performance, network latency) rather than pipeline capacity. Checking source health and network first is more efficient and cost-effective than increasing timeouts or upgrading capacity.

**Source:** Azure Exam Practice

---

## Question 9
**Category:** Governance  
**Difficulty:** Medium  
**Type:** Multiple Choice

**Question:**
You want to establish item lineage tracking in your Fabric workspace to understand data flow from source to reports. What must you do?

**Options:**
- [ ] A) Enable workspace logging in workspace settings
- [ ] B) Endorse all items as certified
- [ ] C) Create a Power BI data lineage report
- [ ] D) Item lineage is automatic in Fabric; no action required

**Correct Answer:** D

**Explanation:**
Data lineage in Fabric is automatically captured and displayed in the workspace. You can view lineage by opening any item and clicking the lineage button. Endorsement (certifying items) is separate from lineage tracking and is optional for governance.

**Source:** Microsoft Learn - Manage Governance

---

## Question 10
**Category:** Shortcuts  
**Difficulty:** Medium  
**Type:** Multiple Choice

**Question:**
You have created an OneLake shortcut from your lakehouse to an external ADLS Gen2 storage account. Queries through the shortcut are performing poorly (10x slower than direct queries). What could be the cause?

**Options:**
- [ ] A) OneLake shortcuts are not optimized for external storage
- [ ] B) The shortcut is non-accelerated; you should convert it to accelerated
- [ ] C) External storage requires V-Order optimization
- [ ] D) You need to replicate the data into OneLake

**Correct Answer:** B

**Explanation:**
Accelerated shortcuts cache metadata and provide better performance than non-accelerated shortcuts. However, accelerated shortcuts have limited support for some storage types. If external storage doesn't support acceleration, the solution is to copy data into OneLake or optimize the source. Non-accelerated shortcuts are slower due to cross-boundary latency.

**Source:** MeasureUp Practice Test

---

## How to Add Questions

**Format template for new questions:**

```markdown
## Question [N]
**Category:** [Category Name]
**Difficulty:** Easy/Medium/Hard
**Type:** Multiple Choice / Scenario / Troubleshooting

**Question:**
[Your question here]

**Options:**
- [ ] A) [Option A]
- [ ] B) [Option B]
- [ ] C) [Option C]
- [ ] D) [Option D]

**Correct Answer:** [A/B/C/D]

**Explanation:**
[Detailed explanation of why this answer is correct and why others are wrong]

**Source:** [MeasureUp / Whizlabs / Microsoft Learn / Custom]
```

---

## Statistics

- **Total Questions:** 10
- **By Difficulty:**
  - Easy: 0
  - Medium: 6
  - Hard: 4
- **By Category:**
  - Workspace & Configuration: 1
  - Data Ingestion: 1
  - Lakehouse Architecture: 1
  - Real-Time Intelligence: 1
  - Security & Access Control: 1
  - Data Warehouse: 1
  - Data Transformation: 1
  - Monitoring & Troubleshooting: 1
  - Governance: 1
  - Shortcuts: 1

---

**Last Updated:** March 1, 2026  
**Next Update:** Add questions from your practice tests as you complete them
