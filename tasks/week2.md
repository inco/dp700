# Week 2: Lakehouse Architecture & Organization

**Dates:** [Week 2 start] to [Week 2 end]  
**Focus:** Medallion architecture, lakehouse organization, shortcuts, OneLake  
**Daily Commitment:** 45-60 minutes (Mon-Fri) + 2-3 hours Saturday lab  
**Learning Path:** [Implement a Lakehouse with Microsoft Fabric](https://learn.microsoft.com/en-us/training/paths/implement-lakehouse-microsoft-fabric/) - First 4 modules

---

## 📚 Module Breakdown

### Module 1: Organize a Fabric lakehouse using medallion architecture design
**Duration:** ~45 min | **Day:** Monday  
**Link:** https://learn.microsoft.com/en-us/training/modules/describe-medallion-architecture/

- [ ] Complete module and documentation
- [ ] Understand bronze/silver/gold/platinum layers
- [ ] Create 5 flashcards on medallion architecture
- [ ] Update Excel: Mark "Medallion architecture" ✅
- [ ] Quiz: Draw medallion architecture layers from memory

---

### Module 2: Ingest data with Spark and Microsoft Fabric notebooks
**Duration:** ~45 min | **Day:** Tuesday  
**Link:** https://learn.microsoft.com/en-us/training/modules/ingest-data-with-spark-fabric-notebooks/

- [ ] Complete module hands-on exercises
- [ ] Practice writing Spark ingestion code
- [ ] Create 5 flashcards on Spark ingestion
- [ ] Update Excel: Mark "Spark notebooks" ✅
- [ ] Practical: Write notebook to read parquet files

---

### Module 3: Organize a lakehouse with folders and workspaces
**Duration:** ~45 min | **Day:** Wednesday  
**Link:** https://learn.microsoft.com/en-us/training/modules/organize-fabric-lakehouse/

- [ ] Complete module on lakehouse organization
- [ ] Understand workspace management
- [ ] Learn folder structures best practices
- [ ] Create 5 flashcards on organization patterns
- [ ] Update Excel: Mark "Organize lakehouse" ✅
- [ ] Practical: Design folder structure for e-commerce scenario

---

### Module 4: Use shortcuts to access external data in OneLake
**Duration:** ~45 min | **Day:** Thursday  
**Link:** https://learn.microsoft.com/en-us/training/modules/work-onelake-shortcuts/

- [ ] Complete module on OneLake shortcuts
- [ ] Understand shortcut types and uses
- [ ] Learn when to use accelerated vs non-accelerated
- [ ] Create 5 flashcards on shortcuts
- [ ] Update Excel: Mark "OneLake shortcuts" ✅
- [ ] Practical: Create shortcuts to external storage

---

### Day 5: Review & Practice Questions
**Duration:** 45-60 min | **Day:** Friday

- [ ] Answer 10 practice questions on lakehouse architecture
- [ ] Score: ____ / 10
- [ ] Review study notes on lakehouse topics
- [ ] Create 10 additional flashcards from weak areas

---

## 🔬 Saturday Hands-On Lab (2-3 hours)

### Lab 2.1: Implement Complete Medallion Architecture

**Time:** 90 minutes

**What You'll Build:**
```
Raw CSV/Parquet Files
        ↓
    BRONZE LAYER (raw data)
        ↓
    Cleaning & Validation (Spark Notebook)
        ↓
    SILVER LAYER (cleaned, validated)
        ↓
    Business Logic & Aggregations (SQL)
        ↓
    GOLD LAYER (business-ready)
```

**Steps:**

1. **Create Lakehouse with Layer Structure** (15 min)
   - [ ] Create lakehouse: `medallion_architecture_lab`
   - [ ] Create folders:
     ```
     ├── bronze/
     │   ├── customers/
     │   ├── orders/
     │   └── products/
     ├── silver/
     │   ├── customers/
     │   ├── orders/
     │   └── products/
     └── gold/
         └── analytics/
     ```
   - [ ] Create notebook folder: `_notebooks/`

2. **Load Raw Data to Bronze** (20 min)
   - [ ] Create notebook: `01_ingest_to_bronze`
   - [ ] Read 3 CSV files (customers, orders, products)
   - [ ] Save as-is to bronze tables
   - [ ] Document schema and row counts

3. **Transform to Silver** (25 min)
   - [ ] Create notebook: `02_transform_to_silver`
   - [ ] Read bronze tables
   - [ ] Clean data:
     - [ ] Remove duplicates
     - [ ] Handle nulls
     - [ ] Standardize data types
     - [ ] Clean text fields
   - [ ] Save to silver tables
   - [ ] Compare row counts: bronze vs silver

4. **Create Gold Tables** (20 min)
   - [ ] Create notebook: `03_aggregate_to_gold`
   - [ ] Read silver tables
   - [ ] Create business-ready views:
     - [ ] Customer summary (count, avg order value)
     - [ ] Product performance (sales, revenue)
     - [ ] Monthly sales trend
   - [ ] Save to gold tables

5. **Validate Pipeline** (10 min)
   - [ ] Query each layer and compare results
   - [ ] Document: Bronze → Silver → Gold row counts
   - [ ] Verify data integrity

---

### Lab 2.2: Create and Test OneLake Shortcuts

**Time:** 45 minutes

- [ ] **Create shortcuts to external data** (20 min)
  - [ ] If you have external ADLS/Snowflake: create shortcut
  - [ ] Or simulate by creating shortcuts between lakehouses
  - [ ] Test query performance
  - [ ] Document shortcut configuration

- [ ] **Compare accelerated vs non-accelerated** (15 min)
  - [ ] Create same shortcut twice: one accelerated, one not
  - [ ] Run identical queries on both
  - [ ] Compare query times
  - [ ] Document findings:
    - Accelerated time: ____ ms
    - Non-accelerated time: ____ ms
    - Difference: ____ %

- [ ] **Understand OneLake governance** (10 min)
  - [ ] Review shortcut security
  - [ ] Understand access implications
  - [ ] Document best practices

---

### Lab 2.3: Workspace Organization & Management

**Time:** 30 minutes

- [ ] **Design workspace structure** (15 min)
  - [ ] Create mental model for multi-team organization
  - [ ] Plan: Dev/Test/Prod workspace separation
  - [ ] Document workspace naming conventions
  - [ ] Create folder structure document

- [ ] **Implement folder organization** (15 min)
  - [ ] Organize your notebooks into folders
  - [ ] Use naming conventions (prefix by layer)
  - [ ] Document your organizational approach
  - [ ] Screenshot final structure

---

## ✅ Sunday Review & Update

- [ ] Review all 4 modules with study notes
- [ ] Update Excel tracker with completion rates
- [ ] Create 15-20 new flashcards
- [ ] Refresh Power BI dashboard
- [ ] Document medallion architecture from memory

**Week 2 Completeness: ____ %**

---

## 📊 Week 2 Progress Tracker

| Task | Status | Date | Time | Notes |
|------|--------|------|------|-------|
| Module 1: Medallion | ⬜ | | 45 min | |
| Module 2: Spark Ingestion | ⬜ | | 45 min | |
| Module 3: Organize | ⬜ | | 45 min | |
| Module 4: Shortcuts | ⬜ | | 45 min | |
| Friday Quiz | ⬜ | | 45 min | Score: __ / 10 |
| Lab 2.1: Medallion | ⬜ | | 90 min | |
| Lab 2.2: Shortcuts | ⬜ | | 45 min | |
| Lab 2.3: Organization | ⬜ | | 30 min | |
| Sunday Review | ⬜ | | 30 min | |
| **Week 2 Total** | | | **~9 hours** | |

---

## ✨ Week 2 Success Criteria

- [ ] Can explain medallion architecture
- [ ] Implemented functioning medallion structure
- [ ] Created and tested OneLake shortcuts
- [ ] Understand workspace organization best practices
- [ ] Score 75%+ on practice questions
- [ ] Have 40+ total flashcards

**Next: [Week 3 - Data Transformation](week3.md)**
