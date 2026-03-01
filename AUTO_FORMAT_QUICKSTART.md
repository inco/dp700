# Auto-Format Questions - Quick Start

## 🚀 30-Second Start

### Option A: Clipboard Monitoring (Easiest)
```powershell
cd c:\Projects\dp700
python auto_format_questions.py
# Choose option 1
```

Then while taking exam:
1. Copy a question (and its options) from Microsoft assessment
2. Formatter detects it and asks to save
3. Boom! Auto-formatted to `questions.md`
4. Repeat for each question

### Option B: Manual Input
```powershell
python auto_format_questions.py
# Choose option 2
```

Then:
1. Paste each question when prompted
2. Formatter auto-formats it
3. Preview and confirm
4. Next question

---

## 📋 What Gets Auto-Formatted

When you paste exam question like this:
```
You have a Microsoft Fabric workspace with multiple users. 
You need to ensure that viewers can see data but cannot modify it. 
Which workspace role should you assign?
A) Admin
B) Member
C) Contributor  
D) Viewer
```

The tool automatically converts to:
```markdown
## Question 1
**Category:** [TODO - Categorize]
**Difficulty:** [Easy/Medium/Hard]
**Type:** Multiple Choice

**Question:**
You have a Microsoft Fabric workspace with multiple users. 
You need to ensure that viewers can see data but cannot modify it. 
Which workspace role should you assign?

**Options:**
- [ ] A) Admin
- [ ] B) Member
- [ ] C) Contributor
- [ ] D) Viewer

**Correct Answer:** [TODO - Check your exam results]

**Explanation:**
[TODO - Add explanation]

**Source:** Microsoft Official Practice Assessment
```

Then you just fill in the `[TODO]` sections!

---

## ✅ The Full Workflow

### **Before Exam**
```powershell
python auto_format_questions.py
# Start monitoring in background (or in separate terminal)
```

### **During Exam**
1. Read question on Microsoft assessment
2. Copy the question text + all options
3. Wait - formatter detects it and asks to save
4. Say "yes" to auto-add to questions.md
5. Continue with next question

### **After Exam**
```powershell
# Open VS Code
code questions.md

# For each question section with [TODO]:
# 1. Replace [TODO - Categorize] with actual category (Ingestion, Warehouse, etc)
# 2. Replace [TODO - Check your exam results] with correct answer (A/B/C/D)
# 3. Replace [TODO - Add explanation] with why it's correct
# 4. Fill in difficulty level

# Save
```

### **Then Test**
```powershell
python exam_simulator.py
# Your new questions are ready!
```

---

## 🎯 Requirements

### Clipboard Monitoring (Optional but Easier)
```powershell
pip install pyperclip
```

If you skip this, you can still use manual input mode!

---

## 💡 Two Modes Explained

### **Mode 1: Clipboard Monitor** (Recommended)
- ✅ Runs in background
- ✅ Auto-detects when you copy questions
- ✅ Minimal interruption to exam
- ✅ Requires `pip install pyperclip`

**Use when:** Taking a full practice exam

### **Mode 2: Manual Input**
- ✅ No dependencies needed
- ✅ Type or paste questions one by one
- ✅ Interactive confirmation
- ✅ Better for learning what gets captured

**Use when:** Learning the tool or testing

---

## 🔧 Still Need to Do Manually

Auto-formatter handles:
- ✅ Question text extraction
- ✅ Option formatting  
- ✅ File structure
- ✅ Markdown syntax
- ✅ Numbering

You still need to add:
- 📝 Category (Workspace, Ingestion, etc.)
- 📊 Difficulty (Easy/Medium/Hard)
- ✔️ Correct answer (which one is right)
- 💬 Explanation (why it's correct)

**But this takes only 30 seconds per question vs 5 minutes!**

---

## 📊 Example Session

```
$ python auto_format_questions.py

=======================================
DP-700 QUESTION AUTO-FORMATTER
=======================================

Choose mode:
1) Clipboard Monitor (auto-detects when you copy)
2) Manual Input (type/paste questions one by one)
3) Exit

Choice (1-3): 1

======================================
Clipboard Monitor Mode
======================================

📌 Monitoring clipboard...
As you copy questions during your exam, they'll be auto-formatted!

Commands:
  - Paste: Automatically detects and formats questions
  - Type 'm': Switch to manual input
  - Type 'q': Quit

[You copy first question from exam]

🎯 New question detected! (#1)

📋 Preview:
## Question 1
**Category:** [TODO - Categorize]
**Difficulty:** [Easy/Medium/Hard]
**Type:** Multiple Choice

**Question:**
You have a Microsoft Fabric workspace...
...

Save? (yes/no/manual/quit): yes
✅ Saved as Question #1
```

---

## 🚀 Right Now

1. **Open Practice Assessment** - Microsoft official DP-700 exam
2. **Start Auto-Formatter:**
   ```powershell
   python auto_format_questions.py
   ```
3. **Choose Mode 1** - Clipboard monitor
4. **Take Exam Normally** - Just copy questions as usual
5. **Auto-Formatter Does The Rest** - Saves to questions.md!
6. **After Exam** - Fill in TODO sections in VS Code

---

**That's it! No manual formatting needed! 🎉**
