# Exam Simulator - Quick Start Guide

## ⚡ Get Started in 30 Seconds

### Step 1: Open PowerShell
```powershell
cd c:\Projects\dp700
```

### Step 2: Run the Simulator
```powershell
python exam_simulator.py
```

### Step 3: Start Taking Exams!
```
1) Start New Exam
2) View Score History
3) Edit Questions Database
4) Exit
```

---

## 📝 Take Your First Exam

1. **Choose Option 1** - "Start New Exam"
2. **Press Enter** to begin the 120-minute exam
3. **Answer questions:**
   - Type `A`, `B`, `C`, or `D` for your answer
   - Type `mark` to flag for review
   - Type `skip` to skip this question
   - Type `time` to see remaining time
   - Type `quit` to exit early

4. **See your results:**
   - Percentage correct
   - Score (0-1000, 700 = passing)
   - Review option for all answers

---

## 🎯 What You Get

| Feature | Purpose |
|---------|---------|
| **Timed Exam** | 120 min countdown (like real exam) |
| **Random Order** | Questions shuffle each exam |
| **Mark for Review** | Flag tough questions |
| **Answer Review** | See explanations after exam |
| **Score Tracking** | Automatic score history |
| **Progress Stats** | See improvement over time |

---

## 📚 Add Questions from Your Practice Tests

### 1. Take a practice test (MeasureUp, Whizlabs, Microsoft Learn)
### 2. Open `questions.md` in VS Code or any text editor
### 3. Copy this template for each new question:

```markdown
## Question [NUMBER]
**Category:** [Workspace/Ingestion/Lakehouse/etc]
**Difficulty:** Easy/Medium/Hard
**Type:** Multiple Choice

**Question:**
[Copy the question text here]

**Options:**
- [ ] A) [Copy option A]
- [ ] B) [Copy option B]
- [ ] C) [Copy option C]
- [ ] D) [Copy option D]

**Correct Answer:** [A/B/C/D]

**Explanation:**
[Write why this answer is correct]

**Source:** MeasureUp/Whizlabs/Microsoft/Custom
```

### 4. Save the file
### 5. Run simulator again and you'll have new questions!

---

## 📊 Check Your Progress

```powershell
# See score history
python exam_simulator.py
# Then choose option 2
```

Example output:
```
Date                 Score    %      Correct  Status
2026-03-05           850    85.0   34/40    ✅ PASS
2026-03-03           780    78.0   31/40    ✅ PASS
2026-03-01           620    62.0   24/40    ❌ FAIL

Total Exams: 3 | Passed: 2 | Avg Score: 750
```

---

## 🎓 Study Plan Integration

### Week 1-2: Build Question Bank
- Add 10-15 questions per week from practice tests
- Focus on accuracy of transcription (copy questions exactly)
- Include explanations for learning

### Week 3-5: Monthly Practice Exams
- Take 1-2 exams per week once you have 30+ questions
- Target: 70%+ correct (700+ score)
- Review wrong answers

### Week 6-7: Intensive Practice
- Take 2-3 exams per week
- Target: 75%+ correct (750+ score) consistently
- Ensure you have 150+ questions by week 8

### Week 8: Final Prep
- Take 3 full exams
- Average should be 750+ score
- Light review from wrong answers only

---

## ✅ Success Metrics

**Goal for exam day:**
- [ ] Completed 3+ full exams in simulator
- [ ] Last 2 exams scored 750+ (75% correct)
- [ ] Built 150+ question database
- [ ] Reviewed ALL wrong answers
- [ ] Understand time management (~1 min/question)

---

## 🔧 Troubleshooting

### "Python not found"
```powershell
# Install Python from python.org
# Then try again:
python --version
python exam_simulator.py
```

### "questions.md not found"
```powershell
# Make sure you're in the right directory:
cd c:\Projects\dp700
dir  # Should see exam_simulator.py and questions.md
python exam_simulator.py
```

### "No questions loaded"
- Check `questions.md` is in the same folder as `exam_simulator.py`
- Verify file format matches the template exactly
- Ensure questions have proper section headers `## Question 1`, `## Question 2`, etc.

---

## 📖 Full Documentation

See [EXAM_SIMULATOR_README.md](EXAM_SIMULATOR_README.md) for:
- Complete feature documentation
- Advanced usage options
- Auto-scoring explanation
- Sample study schedules
- FAQ and support

---

## 🚀 Next Step

```powershell
# Ready? Start now!
cd c:\Projects\dp700
python exam_simulator.py
```

**Good luck! 🎓**
