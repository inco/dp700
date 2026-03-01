# Week 4: Real-Time Intelligence & Streaming

**Dates:** [Week 4 start] to [Week 4 end]  
**Focus:** KQL, Eventstreams, Eventhouse, windowing functions, Spark structured streaming  
**Daily Commitment:** 45-60 minutes (Mon-Fri) + 3 hours Saturday lab  
**Learning Path:** [Implement Real-Time Intelligence with Microsoft Fabric](https://learn.microsoft.com/en-us/training/paths/explore-real-time-analytics-microsoft-fabric/)

---

## 📚 Learning Path Modules

1. [Get started with Real-Time Intelligence in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/get-started-kusto-fabric/) (45 min)
2. [Use real-time eventstreams in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/use-real-time-eventstreams-fabric/) (45 min)
3. [Query data from a Kusto database in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/query-data-from-eventstream-fabric/) (45 min)
4. [Use real-time dashboards in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/work-real-time-data-fabric/) (45 min)
5. [Analyze events in real time with KQL in Microsoft Fabric](https://learn.microsoft.com/en-us/training/modules/analyze-data-real-time-kql/) (45 min)

---

## 🔬 Hands-On Labs

### Lab 4.1: Eventstream Setup (30 min)
- [ ] Create sample event source or use sample stream
- [ ] Configure eventstream to capture events
- [ ] Route events to Eventhouse
- [ ] Monitor streaming metrics

### Lab 4.2: KQL Query Windowing (30 min)
- [ ] Write KQL queries for time-series analysis
- [ ] Implement tumbling windows
- [ ] Implement hopping windows
- [ ] Implement sliding windows

### Lab 4.3: Spark Structured Streaming (30 min)
- [ ] Read stream from Event Hub or Kafka
- [ ] Apply transformations
- [ ] Write to Delta Lake with checkpointing
- [ ] Compare with KQL approach

### Lab 4.4: Storage Decisions (30 min)
- [ ] Test native storage in Eventhouse
- [ ] Test mirrored storage
- [ ] Test shortcuts for real-time data
- [ ] Document trade-offs (latency, cost, features)

---

## ✅ Learning Goals

- [ ] Understand KQL syntax and windowing
- [ ] Configure eventstream pipelines
- [ ] Choose between native/mirrored/shortcuts storage
- [ ] Implement Spark structured streaming
- [ ] Know when to use KQL vs Spark for real-time

---

## 📊 Progress Tracker

| Task | Status | Date | Time |
|------|--------|------|------|
| Module 1: Get Started | ⬜ | | 45 min |
| Module 2: Eventstreams | ⬜ | | 45 min |
| Module 3: Query Data | ⬜ | | 45 min |
| Module 4: Real-time Dashboards | ⬜ | | 45 min |
| Module 5: KQL Analysis | ⬜ | | 45 min |
| Lab 4.1: Eventstream | ⬜ | | 30 min |
| Lab 4.2: KQL Windows | ⬜ | | 30 min |
| Lab 4.3: Spark Streaming | ⬜ | | 30 min |
| Lab 4.4: Storage Decisions | ⬜ | | 30 min |
| **Week 4 Total** | | | **~9 hours** |

---

## 📝 Key Concepts

**KQL:**
- Tumbling windows: Non-overlapping, fixed size
- Hopping windows: Overlapping, fixed size
- Sliding windows: Overlapping, continuously evaluated
- Session windows: Data-driven, variable duration

**Eventstream:**
- Event source connection
- Transformation capabilities
- Multiple destination routing
- Throughput and partitioning

**Real-time Storage:**
- Native: Optimized for KQL queries, fast
- Mirrored: Sync with external source, automatic
- Shortcuts: Virtualized access, no data movement

---

## 🔗 Resources

- [Learning Path](https://learn.microsoft.com/en-us/training/paths/explore-real-time-analytics-microsoft-fabric/)
- [Practice Questions](../practice-questions-by-objective.md#ingest-and-transform-streaming-data)
- [Study Plan](../DP-700-Study-Plan.md#week-4--real-time-intelligence)

---

**Next: [Week 5 - Data Warehouse](week5.md)**
