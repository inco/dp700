# Manual Question Capture Guide

If the browser scraper doesn't work perfectly, use this manual method:

## Quick Copy-Paste Template (30 seconds per question)

While taking your exam, when you see a question:

1. **Copy question text** (Ctrl+C on the question)
2. **Copy each option** (select all 4 options: A, B, C, D)
3. **Paste into questions.md** using this template:

```markdown
## Question [X]

**Category:** [TODO]
**Difficulty:** [TODO]
**Type:** Multiple Choice

**Question:**
[PASTE QUESTION HERE]

**Options:**
- [ ] A) [PASTE OPTION A]
- [ ] B) [PASTE OPTION B]
- [ ] C) [PASTE OPTION C]
- [ ] D) [PASTE OPTION D]

**Correct Answer:** [TODO - Check exam feedback]

**Explanation:** [TODO - Add from exam feedback]

**Source:** Microsoft Practice Assessment

---
```

## After Exam - Fill in TODO Sections

After finishing the exam, Microsoft shows you which answers were correct/wrong:

1. Go back through exam review
2. For each question in questions.md:
   - Replace `[TODO]` category with: `Workspace`, `Ingestion`, `Lakehouse`, `RealTime`, `Security`, `DataWarehouse`, `Transformation`, `Monitoring`, or `Governance`
   - Replace `[TODO]` difficulty with: `Easy`, `Medium`, or `Hard`
   - Replace `[TODO - Check exam feedback]` with the correct answer: `A`, `B`, `C`, or `D`
   - Replace `[TODO - Add from exam feedback]` with 1-2 sentence explanation

## Time Estimate

- **During exam:** 30 seconds per question = 7 minutes for 15 questions
- **After exam:** 30 seconds per TODO = 7 minutes for 15 questions
- **Total:** ~15 minutes to capture 15 questions

## Example - Completed Question

```markdown
## Question 1

**Category:** RealTime
**Difficulty:** Medium
**Type:** Multiple Choice

**Question:**
Your company is implementing real-time data processing using Spark Structured Streaming in Microsoft Fabric. Data from IoT devices needs to be stored in a Delta table.

You need to ensure efficient processing of streaming data while preventing errors due to data changes.

What should you do?

**Options:**
- [ ] A) Enable overwrite mode.
- [ ] B) Set checkpointLocation to null.
- [x] C) Use ignoreChanges.
- [ ] D) Use the Append method.

**Correct Answer:** C

**Explanation:** The ignoreChanges option prevents errors when the underlying data in Delta tables changes during streaming operations, which is essential for IoT scenarios with frequent updates.

**Source:** Microsoft Practice Assessment

---
```

## Pro Tips

1. **Open two windows:** Exam on left, VS Code (questions.md) on right
2. **Copy fast, categorize later:** Just get the text, fill TODOs after exam
3. **Screenshot tricky questions:** Windows Key + Shift + S for quick capture
4. **Mark difficult ones:** Add `**NOTE:** Review this` for questions you found hard
5. **Review ASAP:** Fill in TODOs within 1 hour while exam is fresh in memory
