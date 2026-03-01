# DP-700 Exam Simulator

A Python-based local exam emulator for DP-700 certification practice with full exam experience simulation.

## 🎯 Features

✅ **Timed Exams**
- 120-minute countdown timer (matches real exam duration)
- Real-time remaining time display
- Automatic exam completion when time expires

✅ **Full Exam Experience**
- Random question order (different each attempt)
- Mark questions for later review
- Skip questions and review later
- Live timer display
- Answer review with explanations

✅ **Progress Tracking**
- Automatic score calculation (0-1000 scale, 700 = passing)
- Percentage correct display
- Score history with timestamps
- Pass/fail status

✅ **Easy Question Management**
- Store questions in simple Markdown format
- Add questions from any source (MeasureUp, Whizlabs, Microsoft official, custom)
- Organize by category and difficulty
- Version control friendly

---

## 📋 Getting Started

### 1. Download/Clone Files

Your exam simulator consists of:
```
c:\Projects\dp700\
├── exam_simulator.py      # Main application
├── questions.md            # Question database (edit to add your questions)
├── exam_scores.json        # Score history (auto-created)
└── requirements.txt        # Dependencies
```

### 2. No Installation Required!

This simulator uses only Python's standard library. No pip packages needed.

If you want colored output (optional):
```bash
pip install colorama
```

### 3. Run the Simulator

**On Windows (PowerShell):**
```powershell
cd c:\Projects\dp700
python exam_simulator.py
```

**On Mac/Linux:**
```bash
cd /path/to/dp700
python3 exam_simulator.py
```

---

## 🎓 How to Use

### Start the Main Menu
```
1) Start New Exam
2) View Score History  
3) Edit Questions Database
4) Exit
```

### Take an Exam

1. **Choose Option 1** - "Start New Exam"
2. **Read the exam info** and press Enter to start
3. **For each question:**
   - Read the question carefully
   - Enter your answer: `A`, `B`, `C`, or `D`
   - Or use special commands:
     - `mark` - Mark this question for review
     - `skip` - Skip and come back later
     - `time` - See remaining time
     - `quit` - Exit exam early

4. **Review your answers** when complete
5. **See your score:**
   - Final score (0-1000)
   - Percentage correct
   - Passing status (700+)

### Example Exam Session

```
Question 1/10 | ⏱️ 119:45 remaining
Category: Workspace & Configuration | Difficulty: Medium
================================================================

You have a Microsoft Fabric workspace with multiple users. 
You need to ensure that viewers can see data but cannot modify it. 
Which workspace role should you assign?

   A) Admin
   B) Member
   C) Contributor
   D) Viewer

Your answer (A/B/C/D) or command [mark/skip/time/quit]: D
✅ Correct!
```

---

## 📝 Adding Questions from Your Practice Tests

### Option 1: Manual Entry

1. Take a practice test (MeasureUp, Whizlabs, Microsoft)
2. Open `questions.md` in your text editor
3. Add new questions using this template:

```markdown
## Question [Next Number]
**Category:** [Category Name]
**Difficulty:** Easy/Medium/Hard
**Type:** Multiple Choice

**Question:**
[Your question text here]

**Options:**
- [ ] A) [Option A text]
- [ ] B) [Option B text]
- [ ] C) [Option C text]
- [ ] D) [Option D text]

**Correct Answer:** [A/B/C/D]

**Explanation:**
[Detailed explanation of why this is correct]

**Source:** [MeasureUp/Whizlabs/Microsoft/Custom]
```

### Option 2: Batch Add

Save all questions to `questions.md` first, then run simulator to use them immediately.

### Category Examples

Common categories for DP-700:
- Data Ingestion
- Lakehouse Architecture
- Data Transformation
- Real-Time Intelligence
- Data Warehouse
- Security & Access Control
- Workspace & Configuration
- Monitoring & Troubleshooting
- Governance
- Shortcuts
- Performance Optimization

---

## 📊 Score History

Scores are automatically saved to `exam_scores.json`:

```json
{
  "exam_1709251234": {
    "timestamp": "2026-03-01T14:30:00",
    "score": 825,
    "percentage": 82.5,
    "correct": 33,
    "total": 40,
    "passed": true
  }
}
```

**View History:**
```
Choose option 2 from main menu
```

Example output:
```
Date                      Score     %       Correct    Status
2026-03-01               825       82.5    33/40      ✅ PASS
2026-02-28               750       75.0    30/40      ✅ PASS
2026-02-27               620       62.0    24/40      ❌ FAIL

Total Exams: 3 | Passed: 2 | Avg Score: 732
```

---

## 💡 Tips for Best Results

### Before Taking the Exam
1. ✅ Add at least 30-40 questions from practice tests
2. ✅ Mix difficulty levels (Easy, Medium, Hard)
3. ✅ Cover all 8 DP-700 skill categories

### During the Exam
1. ⏱️ **Manage time:** ~1 minute per question
2. 📌 **Mark tough questions** for review (not for changing answers)
3. 🔄 **Skip first pass:** Answer known questions, skip unclear ones
4. 📖 **Review second pass:** Revisit marked questions with fresh perspective

### Building Your Question Bank
- **Week 1-4:** ~50 questions (10-12 per week)
- **Week 5-7:** ~100 questions (target 150-200 total)
- **Week 8:** 200+ questions (full practice exam suite)

---

## 🔧 Troubleshooting

### "ModuleNotFoundError: No module named 'exam_simulator'"
```powershell
# Make sure you're in the dp700 directory
cd c:\Projects\dp700
python exam_simulator.py
```

### Questions not loading
```
Error: questions.md not found!
```
- Verify `questions.md` exists in `c:\Projects\dp700\`
- Check file is saved in UTF-8 format

### Score history not saving
- Check file permissions in `c:\Projects\dp700\`
- Ensure you have write access to the directory

### Scoring seems wrong
- Score = (correct answers / total questions) × 1000
- Example: 82.5% correct = 825 score
- Passing score = 700 (70% correct)

---

## 📈 Sample Study Plan

**Week 0-3:** Build question bank
```
Phase 1: Collect 50-80 questions from practice tests
- 10 questions/week from MeasureUp or Whizlabs
- Take 1-2 practice exams/week
- Add wrong answers to database
```

**Week 4-5:** Practice with simulator
```
Phase 2: Take 2-3 simulator exams/week
- Aim for 750+ score
- Mark weak categories
- Add more questions in weak areas
```

**Week 6-7:** Final intensive practice
```
Phase 3: Take 1 exam every 2-3 days
- Target: 3+ exams at 750+ score
- Review all wrong answers
- Ensure 200+ total questions in database
```

**Week 8:** Exam prep
```
Phase 4: Light review
- 1-2 final practice exams
- Review marked questions
- Rest before exam day
```

---

## 🎯 Success Criteria

By exam day you should have:
- ✅ Completed 3+ simulator exams
- ✅ Scored 750+ on last 2 exams
- ✅ Built 150+ question database
- ✅ Reviewed all incorrect answers
- ✅ Identified and studied weak categories
- ✅ Practiced time management (≈1 min/question)

---

## 📞 Support

### Common Questions

**Q: How do I import questions from a CSV file?**
A: Currently, manually add questions to `questions.md`. You can use find-replace in your editor to speed up bulk imports.

**Q: Can I export my questions to share with study group?**
A: Yes! Share your `questions.md` file via GitHub or email. Others can copy it into their simulator.

**Q: How accurate is this simulator to the real exam?**
A: The exam format is very similar (120 min, multiple choice, similar scoring). However, actual exam questions will be different. Use this to practice **exam skills** (time management, strategy) not memorize answers.

**Q: Can I adjust the time limit?**
A: Currently, the simulator uses 120 minutes (real exam duration). Edit line 27 in `exam_simulator.py` to change if desired.

---

## 🚀 Next Steps

1. **Now:** Start with 10 sample questions (already provided)
2. **Week 1:** Add 50 questions from practice tests
3. **Week 2-3:** Take 1-2 simulator exams/week
4. **Week 4-5:** Intensive practice (2-3 exams/week)
5. **Week 6-7:** Final preparation (1 exam every 2-3 days)
6. **Week 8:** Light review, rest, and ace the real exam! 🎓

---

**Good luck with your DP-700 exam preparation! 🚀**

Last Updated: March 1, 2026
