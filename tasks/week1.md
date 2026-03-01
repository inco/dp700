# Week 1: Ingest Data with Microsoft Fabric

**Dates:** [Week 1 start] to [Week 1 end]  
**Focus:** Data ingestion patterns, pipelines, dataflows, Delta Lake fundamentals  
**Daily Commitment:** 45-60 minutes (Mon-Fri) + 2-3 hours Saturday lab  
**Learning Path:** [Ingest data with Microsoft Fabric](https://learn.microsoft.com/en-us/training/paths/ingest-data-with-microsoft-fabric/) (4 modules)

---

## 📚 Module Breakdown

### Module 1: Get started with lakehouses in Microsoft Fabric
**Duration:** ~45-60 min | **Day:** Monday  
**Link:** https://learn.microsoft.com/en-us/training/modules/get-started-lakehouses/

- [ ] **Read:** Lakehouse overview and architecture concepts
- [ ] **Key concepts to understand:**
  - [ ] What is a lakehouse
  - [ ] Lakehouse vs warehouse vs data lake
  - [ ] OneLake and Fabric integration
  - [ ] Bronze/Silver/Gold medallion architecture (overview)
- [ ] **Hands-on:** Create your first lakehouse in Fabric
  - [ ] Log into Fabric workspace
  - [ ] Create new lakehouse
  - [ ] Name it: `dp700_learning_week1`
  - [ ] Verify you can access SQL endpoint
- [ ] **Flashcards:** Create 5 new cards on lakehouse concepts
- [ ] **Update Excel Tracker:**
  - Open `c:\Projects\dp700\my-dp700-progress.xlsx`
  - Find row: "Get started with lakehouses"
  - Mark: ✅ Completed
  - Add confidence (1-5): ____

**Notes & Questions:**
```
Question 1: What's the difference between lakehouse and warehouse?
Answer: __________________________________________________

Question 2: What are the three layers of medallion architecture?
Answer: __________________________________________________
```

---

### Module 2: Use Apache Spark in Microsoft Fabric
**Duration:** ~45-60 min | **Day:** Tuesday  
**Link:** https://learn.microsoft.com/en-us/training/modules/use-apache-spark-work-files-lakehouse/

- [ ] **Read:** Spark notebooks, PySpark, and Spark SQL basics
- [ ] **Key concepts to understand:**
  - [ ] What is Apache Spark
  - [ ] PySpark vs Spark SQL
  - [ ] Creating and running Spark notebooks
  - [ ] Reading/writing data with Spark
  - [ ] Basic transformations (select, filter, map)
- [ ] **Hands-on:** Create first Spark notebook
  - [ ] In lakehouse `dp700_learning_week1`
  - [ ] Create new Spark notebook
  - [ ] Name it: `week1_intro_notebook`
  - [ ] Write PySpark code to read CSV file:
    ```python
    # Read CSV from samples
    df = spark.read.csv("/Volumes/sample_data/customers.csv", header=True)
    df.show(10)
    ```
  - [ ] Execute and verify output
  - [ ] Modify to filter data (e.g., WHERE city = 'Seattle')
  - [ ] Save notebook
- [ ] **Flashcards:** Create 5 new cards on Spark concepts
- [ ] **Update Excel Tracker:** Mark "Use Apache Spark" as ✅

**Hands-On Exercise Result:**
```
Notebook created: week1_intro_notebook
First query output (first 5 rows):
|Column1|Column2|Column3|
|-------|-------|-------|
|       |       |       |
|       |       |       |
```

---

### Module 3: Work with Delta Lake tables in Microsoft Fabric
**Duration:** ~45-60 min | **Day:** Wednesday  
**Link:** https://learn.microsoft.com/en-us/training/modules/work-delta-lake-tables-fabric/

- [ ] **Read:** Delta Lake format, ACID properties, table optimization
- [ ] **Key concepts to understand:**
  - [ ] What is Delta Lake
  - [ ] Why Delta > Parquet for lakehouses
  - [ ] Creating Delta tables
  - [ ] ACID properties (Atomicity, Consistency, Isolation, Durability)
  - [ ] Table versioning and time travel
  - [ ] VACUUM and OPTIMIZE commands
- [ ] **Hands-on:** Create and optimize Delta tables
  - [ ] In same notebook, create a Delta table:
    ```python
    # Create DataFrame from CSV
    df = spark.read.csv("/path/to/sample.csv", header=True, inferSchema=True)
    
    # Write as Delta table
    df.write.mode("overwrite").format("delta").saveAsTable("customers_delta")
    
    # Verify table
    spark.sql("SELECT COUNT(*) FROM customers_delta").show()
    ```
  - [ ] Execute and verify table creation
  - [ ] Query the table using SQL
  - [ ] Try time travel (if data supports it)
- [ ] **Flashcards:** Create 5 cards on Delta Lake concepts
- [ ] **Update Excel Tracker:** Mark "Work with Delta Lake" as ✅

**Table Creation Verification:**
```
Table name: customers_delta
Row count: ________
Columns: ________________________________________
```

---

### Module 4: Ingest data with Dataflows Gen2 in Microsoft Fabric
**Duration:** ~45-60 min | **Day:** Thursday  
**Link:** https://learn.microsoft.com/en-us/training/modules/use-dataflow-gen-2-fabric/

- [ ] **Read:** Dataflow Gen2, Power Query (M), data transformations
- [ ] **Key concepts to understand:**
  - [ ] Dataflow Gen2 vs pipelines (when to use each)
  - [ ] Power Query and M language basics
  - [ ] Data source connectors
  - [ ] Transformation steps in dataflow
  - [ ] Refreshing dataflows
  - [ ] Output destinations (lakehouse, warehouse, etc.)
- [ ] **Hands-on:** Create your first Dataflow Gen2
  - [ ] Go to your workspace
  - [ ] Create new Dataflow Gen2
  - [ ] Name it: `week1_sample_dataflow`
  - [ ] Add CSV data source
  - [ ] Add transformation step: Remove null rows
  - [ ] Add transformation step: Add custom column
  - [ ] Configure output to Delta table in lakehouse
  - [ ] Publish and test
- [ ] **Flashcards:** Create 5 cards on Dataflow Gen2
- [ ] **Update Excel Tracker:** Mark "Ingest data with Dataflows Gen2" as ✅

**Dataflow Verification:**
```
Dataflow name: week1_sample_dataflow
Input rows: ________
Output rows (after filtering): ________
Destination table: ________________________________________
```

---

### Day 5: Review & Practice Questions

**Duration:** 45-60 min | **Day:** Friday

- [ ] **Knowledge Check Quiz** (30 min)
  - Answer 10 practice questions on ingestion patterns
  - Use [practice-questions-by-objective.md](../practice-questions-by-objective.md) - Questions 19-21
  - Review answers and explanations
  - **Score: ___ / 10**
  - For any wrong answers:
    - [ ] Re-read relevant module section
    - [ ] Create flashcard explaining the concept
    - [ ] Add to "needs review" list

- [ ] **Concept Review** (15 min)
  - Review your notes from Mon-Thu
  - Compare with [community-resources/DP700 Exam Prep Study Notes.pdf](../community-resources/DP700%20Exam%20Prep%20Study%20Notes.pdf) - Ingestion section
  - Highlight any gaps in understanding

- [ ] **Flashcard Review** (15 min)
  - Review all 20 flashcards from this week
  - Anki review session (aim for 90%+ correct)
  - Add 5 more cards from Friday review

**Wrong Answers Analysis:**
```
Question: ________________________________________________
My answer: ________________________________________________
Correct answer: _____________________________________________
Why I was wrong: ______________________________________________
```

---

## 🔬 Saturday Hands-On Lab (2-3 hours)

### Lab 1.1: Create Complete Ingestion Pipeline

**Objective:** Build a working lakehouse with data ingested from CSV using both Dataflow and Spark

**Time:** 90 minutes

**What You'll Build:**
```
CSV Source Files → Dataflow Gen2 → Bronze Layer (raw CSV)
                                ↓
                        Spark Notebook
                                ↓
                      Silver Layer (cleaned)
                                ↓
                        Delta Tables
```

**Steps:**

1. **Prepare Sample Data** (10 min)
   - [ ] Download [AdventureWorks sample data](https://learn.microsoft.com/sql/samples/adventureworks-install-configure) or create sample CSV
   - [ ] Create 2-3 CSV files with customer/sales data
   - [ ] Save to your local folder: `c:\Projects\dp700\sample-data\`

2. **Create Lakehouse Structure** (15 min)
   - [ ] Create new lakehouse: `lab_week1_ingestion`
   - [ ] Create folder structure:
     ```
     lab_week1_ingestion/
     ├── bronze/
     ├── silver/
     └── scripts/
     ```

3. **Build Dataflow Gen2 (Bronze Layer)** (30 min)
   - [ ] Create Dataflow Gen2: `ingest_customers_csv`
   - [ ] Add CSV source (customers file)
   - [ ] Transformations:
     - [ ] Remove null values
     - [ ] Rename columns to match business rules
     - [ ] Add LoadDateTime column with current timestamp
   - [ ] Output to `bronze_customers` table in lakehouse

4. **Build Spark Notebook (Silver Layer)** (30 min)
   - [ ] Create notebook: `transform_bronze_to_silver`
   - [ ] Read `bronze_customers` table
   - [ ] Apply transformations:
     - [ ] Remove duplicates
     - [ ] Clean/standardize customer names
     - [ ] Convert data types
   - [ ] Create `silver_customers_clean` Delta table
   - [ ] Add statistics:
     ```python
     print(f"Bronze row count: {bronze_df.count()}")
     print(f"Silver row count: {silver_df.count()}")
     print(f"Rows removed: {bronze_df.count() - silver_df.count()}")
     ```

5. **Validate Results** (15 min)
   - [ ] Query both tables and compare row counts
   - [ ] Verify schema matches expectations
   - [ ] Check for data quality improvements
   - [ ] Document in markdown file: `lab1_results.md`

**Lab Completion Verification:**
- [ ] Dataflow created and executed successfully
- [ ] Spark notebook runs without errors
- [ ] Bronze table contains raw data (with nulls, duplicates)
- [ ] Silver table contains cleaned data
- [ ] Row counts documented
- [ ] Lab results documented

---

### Lab 1.2: Implement Incremental Load Pattern

**Objective:** Create a pipeline that processes only new/changed data

**Time:** 45 minutes

- [ ] **Add Watermark Column** (15 min)
  - [ ] Add timestamp column to your source CSV
  - [ ] Create notebook: `setup_watermark`
  - [ ] Read delta table
  - [ ] Add watermark column (current date)
  - [ ] Save as new version

- [ ] **Build Incremental Logic** (20 min)
  - [ ] Create notebook: `incremental_load`
  - [ ] Read watermark value from control table (or hardcode for now)
  - [ ] Filter source: WHERE timestamp >= last_watermark
  - [ ] Merge into target table:
     ```python
     # Pseudo-code
     incremental_df = spark.sql(f"""
       SELECT * FROM bronze_customers 
       WHERE LoadDateTime > '{last_watermark}'
     """)
     
     # Merge/upsert logic
     ```
  - [ ] Update watermark to current timestamp

- [ ] **Test Incremental Load** (10 min)
  - [ ] Add new rows to CSV manually
  - [ ] Run incremental notebook
  - [ ] Verify only new rows were processed
  - [ ] Document: "Incremental load test successful"

---

### Lab 1.3: Explore Mirroring and Continuous OneLake Integration

**Objective:** Understand alternative ingestion methods

**Time:** 30 minutes

- [ ] **Mirroring Overview** (15 min)
  - [ ] Read about mirroring in Fabric docs
  - [ ] If you have Azure SQL Database access:
    - [ ] Attempt to set up mirroring from Snowflake or Azure SQL
  - [ ] If not available:
    - [ ] Document: "Mirroring not available in trial environment"
    - [ ] Review documentation for future reference
  - [ ] Note advantages: automatic sync, minimal latency

- [ ] **Continuous OneLake Integration** (15 min)
  - [ ] Read about continuous integration feature
  - [ ] Document use case vs pipeline/dataflow/mirroring
  - [ ] Create comparison table:

| Method | Best For | Setup Time | Auto-Sync | Code Required |
|--------|----------|-----------|-----------|---|
| Dataflow Gen2 | | | | |
| Pipeline | | | | |
| Mirroring | | | | |
| Continuous Integration | | | | |

---

## ✅ Sunday Review & Flashcard Update

**Duration:** 30-60 minutes

- [ ] **Lab Results Review** (15 min)
  - [ ] Read your lab results documentation
  - [ ] Note any challenges encountered
  - [ ] Document lessons learned

- [ ] **Weekly Progress Check** (15 min)
  - [ ] Open Excel tracker: `my-dp700-progress.xlsx`
  - [ ] Mark all 4 modules as ✅
  - [ ] Update confidence ratings
  - [ ] Calculate week completion %:
    - Modules completed: 4/4
    - Labs completed: 3/3
    - Week completeness: ____%

- [ ] **Create New Flashcards** (15 min)
  - [ ] From lab results and any confusing concepts
  - [ ] Create 15-20 new cards
  - [ ] Import/add to Anki
  - [ ] Schedule 10 cards for next week

- [ ] **Update Power BI Dashboard** (10 min)
  - [ ] Open Power BI Desktop
  - [ ] Edit `DP700-ExamPrep.pbix`
  - [ ] Go to **Refresh** to update from Excel
  - [ ] Take screenshot of updated progress
  - [ ] Save screenshot as: `week1-progress.png`

**Weekly Completeness Checklist:**
- [ ] All 4 modules completed
- [ ] All labs completed and documented
- [ ] Excel tracker updated with completion rates
- [ ] Power BI dashboard refreshed
- [ ] 15-20 new flashcards created
- [ ] 10 flashcards scheduled in Anki
- [ ] Progress screenshot saved

---

## 📊 Week 1 Progress Tracker

| Task | Status | Date | Time | Notes |
|------|--------|------|------|-------|
| Module 1: Lakehouses | ⬜ | | 45 min | |
| Module 2: Apache Spark | ⬜ | | 45 min | |
| Module 3: Delta Lake | ⬜ | | 45 min | |
| Module 4: Dataflows Gen2 | ⬜ | | 45 min | |
| Friday Quiz | ⬜ | | 45 min | Score: __ / 10 |
| Lab 1.1: Ingestion | ⬜ | | 90 min | |
| Lab 1.2: Incremental | ⬜ | | 45 min | |
| Lab 1.3: Mirroring | ⬜ | | 30 min | |
| Sunday Review | ⬜ | | 30 min | |
| **Week 1 Total** | | | **~9 hours** | |

---

## 📝 Weekly Reflection

**What went well this week:**
```
_________________________________________________________________
```

**What was challenging:**
```
_________________________________________________________________
```

**Topics I need to review:**
```
_________________________________________________________________
```

**Confidence Level (1-5):** ___

---

## 🔗 Resources for Week 1

- [Learning Path: Ingest data with Microsoft Fabric](https://learn.microsoft.com/en-us/training/paths/ingest-data-with-microsoft-fabric/)
- [Practice Questions 19-21](../practice-questions-by-objective.md#design-and-implement-loading-patterns)
- [Shabnam's Study Notes: Ingestion Section](../community-resources/DP700%20Exam%20Prep%20Study%20Notes.pdf)
- [Weekly Practice Tasks](../weekly-practice-tasks.md#week-1--ingest-data-dataflows-pipelines-lakehouses)
- [Master Study Plan](../DP-700-Study-Plan.md#week-1--ingest-learning-path)

---

## ✨ Week 1 Success Criteria

By end of Week 1, you should:

- [ ] Understand lakehouse architecture and Delta Lake
- [ ] Be comfortable creating Spark notebooks
- [ ] Know when to use Dataflow vs Pipeline
- [ ] Have working ingestion pipeline (Dataflow → Bronze → Silver)
- [ ] Understand incremental load patterns
- [ ] Have 20+ flashcards on ingestion concepts
- [ ] Score 70%+ on practice questions
- [ ] Track progress in Excel and Power BI

**Status: Week 1 Complete!** ✅  
**Next: [Week 2 - Lakehouse Architecture](week2.md)**

---

## 📞 Week 1 Notes & Questions

```
Question: What's the difference between Dataflow Gen2 and Pipeline?
Answer: 

Question: When should I use Spark vs SQL for transformations?
Answer: 

Question: How do I implement CDC-style incremental loads?
Answer: 

Interesting finding from lab:

Module that needs more review:
```
