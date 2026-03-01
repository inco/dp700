# Week 6: Management & Security

**Dates:** [Week 6 start] to [Week 6 end]  
**Focus:** Workspace administration, security (7 levels), version control, CI/CD, monitoring  
**Daily Commitment:** 45-60 minutes (Mon-Fri) + 3 hours Saturday lab  
**Learning Path:** [Manage a Microsoft Fabric environment](https://learn.microsoft.com/en-us/training/paths/manage-microsoft-fabric-environment/)

---

## 📚 Learning Path Modules

1. [Administer Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/administer-fabric/) (45 min)
2. [Implement security in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/implement-security-fabric/) (45 min)
3. [Implement version control and deployment for Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/implement-version-control-deployment-fabric/) (45 min)
4. [Monitor Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/monitor-fabric/) (45 min)

---

## 🔬 Hands-On Labs

### Lab 6.1: Workspace Configuration (60 min)
- [ ] Configure Spark workspace settings
- [ ] Configure domain workspace settings
- [ ] Configure OneLake workspace settings
- [ ] Configure data workflow workspace settings

### Lab 6.2: Multi-Level Security (60 min)

Implement all 7 levels:

1. [ ] **Workspace-level:** Assign Admin, Member, Contributor, Viewer roles
2. [ ] **Item-level:** Grant specific permissions on lakehouse/warehouse
3. [ ] **Row-level:** RLS in semantic model
4. [ ] **Column-level:** Column masks in warehouse
5. [ ] **Object-level:** Grant/deny on specific tables
6. [ ] **Folder/File-level:** OneLake folder security
7. [ ] **Dynamic Masking:** Mask sensitive columns

### Lab 6.3: Version Control & CI/CD (60 min)
- [ ] Connect workspace to Azure DevOps or GitHub
- [ ] Create database project for warehouse
- [ ] Implement version control for notebooks
- [ ] Create deployment pipeline (dev → test → prod)
- [ ] Deploy changes through pipeline

### Lab 6.4: Governance Features (30 min)
- [ ] Endorse items (promote/certify)
- [ ] Implement workspace logging
- [ ] Configure data lineage
- [ ] Test data discovery through catalog

---

## ✅ Learning Goals

- [ ] Administer Fabric workspace
- [ ] Implement comprehensive security strategy
- [ ] Set up version control and CI/CD
- [ ] Monitor Fabric environment
- [ ] Understand governance best practices

---

## 📊 Progress Tracker

| Task | Status | Date | Time |
|------|--------|------|------|
| Module 1: Administer | ⬜ | | 45 min |
| Module 2: Security | ⬜ | | 45 min |
| Module 3: Version Control | ⬜ | | 45 min |
| Module 4: Monitor | ⬜ | | 45 min |
| Lab 6.1: Configuration | ⬜ | | 60 min |
| Lab 6.2: Security | ⬜ | | 60 min |
| Lab 6.3: CI/CD | ⬜ | | 60 min |
| Lab 6.4: Governance | ⬜ | | 30 min |
| **Week 6 Total** | | | **~10 hours** |

---

## 📝 7 Levels of Security

```
1. WORKSPACE LEVEL
   ├─ Admin role (full permissions)
   ├─ Member role (create/edit)
   ├─ Contributor role (limited edit)
   └─ Viewer role (read-only)

2. ITEM LEVEL
   ├─ Lakehouse permissions
   ├─ Warehouse permissions
   └─ Dataset permissions

3. ROW LEVEL (RLS)
   ├─ DAX filters in semantic model
   └─ Filter by department, region, etc.

4. COLUMN LEVEL
   ├─ Column masking/hiding
   └─ Sensitivity labels

5. OBJECT LEVEL
   ├─ Table permissions
   ├─ View permissions
   └─ Stored procedure permissions

6. FOLDER/FILE LEVEL (OneLake)
   ├─ Folder-level security
   └─ File-level security

7. DYNAMIC DATA MASKING
   ├─ Mask PII columns
   └─ User-based masking
```

---

## 🔗 Resources

- [Learning Path](https://learn.microsoft.com/en-us/training/paths/manage-microsoft-fabric-environment/)
- [Practice Questions](../practice-questions-by-objective.md#configure-security-and-governance)
- [Study Plan](../DP-700-Study-Plan.md#week-6--manage--security)

---

**Next: [Week 7 - Governance & Monitoring](week7.md)**
