# Question Scraper Quick Reference

## Which Scraper Should I Use?

### 🤖 browser-scraper-auto.js (RECOMMENDED)
**Best for:** Automatic extraction with minimal effort

**When to use:**
- You want zero manual input
- You're on a question page
- You clicked "Check Your Answer"

**How to use:**
1. Navigate to a question in your exam
2. Click "Check Your Answer" (to reveal full question)
3. Press F12 → Console tab
4. Paste entire browser-scraper-auto.js file
5. Press Enter
6. ✅ Done! Small notification appears bottom-right
7. File auto-downloads + click "Copy to Clipboard"

**Output:**
- Auto-downloads to Downloads folder
- Small notification (bottom-right, doesn't block exam)
- Auto-closes in 30 seconds
- Formatted with TODO placeholders

---

### 📝 browser-scraper-simple.js
**Best for:** When auto-detection fails

**When to use:**
- browser-scraper-auto.js didn't capture correctly
- You want to manually paste each piece
- Complex question layouts

**How to use:**
1. Press F12 → Console
2. Paste browser-scraper-simple.js
3. Press Enter
4. Type: `captureQuestion()`
5. Paste question when prompted (5 prompts: question + 4 options)
6. Blue popup appears with formatted markdown

**Time:** ~45 seconds per question

---

### 📋 MANUAL_CAPTURE_GUIDE.md
**Best for:** Both scrapers failed OR you prefer copy-paste

**When to use:**
- JavaScript disabled
- Browser issues
- You like manual control

**Time:** ~2 minutes per question

---

## Recommended Workflow

### During Practice Exam:

**Option A - Automatic (Fastest):**
1. Start exam
2. For EACH question page:
   - Click "Check Your Answer"
   - F12 → Paste browser-scraper-auto.js → Enter
   - Small notification appears (ignore it, keep going)
   - Click Next Question
3. After exam: Check Downloads folder for all files
4. Concatenate all files into questions.md
5. Fill in TODO sections using exam feedback

**Option B - Batch at End:**
1. Take exam normally
2. After completion, go to Review mode
3. For each question:
   - F12 → Paste browser-scraper-auto.js → Enter
   - Click "Copy to Clipboard" from notification
   - Paste into questions.md
   - Go to next question

**Option C - Manual (Most Reliable):**
1. Side-by-side: Exam left, VS Code (questions.md) right
2. For each question:
   - Copy question text
   - Copy 4 options
   - Paste into template from MANUAL_CAPTURE_GUIDE.md
3. Fill TODOs after exam using feedback

---

## Time Comparison

| Method | Time per Question | 15 Questions Total |
|--------|------------------|-------------------|
| browser-scraper-auto.js | 10 seconds | 2.5 minutes |
| browser-scraper-simple.js | 45 seconds | 11 minutes |
| Manual (MANUAL_CAPTURE_GUIDE.md) | 2 minutes | 30 minutes |
| Pure manual typing | 5 minutes | 75 minutes |

---

## Troubleshooting

### ❌ "No questions found automatically"

**Try this:**
1. Make sure you're on a **question page** (not home/summary page)
2. Click "Check Your Answer" to reveal full question
3. Scroll so question is **visible on screen**
4. Run script again
5. If still fails → Use browser-scraper-simple.js

### ❌ Captured wrong text (navigation, ads, etc.)

**Fix:**
1. Use browser-scraper-simple.js instead (manual prompts)
2. Or manually copy-paste using MANUAL_CAPTURE_GUIDE.md

### ❌ Missing options or incomplete

**Fix:**
1. Check downloaded file - often has more than console shows
2. Re-run on same question page
3. Use browser-scraper-simple.js for this question

---

## After Capturing Questions

### TODO Checklist (Do this IMMEDIATELY after exam while fresh):

1. **Open questions.md** in VS Code
2. **Search for TODO** (Ctrl+F)
3. **For each question**, fill in:
   - `[TODO - Categorize]` → Category name
   - `[TODO - Easy/Medium/Hard]` → Difficulty
   - `[TODO - Check exam results]` → Correct answer letter
   - `[TODO - Add explanation]` → Why it's correct
4. **Save file**
5. **Run exam simulator** to test: `python exam_simulator.py`

### Time Estimate:
- 30 seconds per question
- 15 questions = 7-8 minutes total

---

## Quick Command Reference

```powershell
# After capturing questions, test them:
cd c:\Projects\dp700
python exam_simulator.py

# View score history:
# Choose option 4 in simulator

# Add more questions:
# Paste into questions.md, renumber if needed
```

---

## Pro Tips

1. **Download ALL scrapers** to Desktop for quick access
2. **Keep F12 console open** during entire exam
3. **Copy scraper code to clipboard** before starting exam
4. **Bookmark this guide** for quick reference
5. **Practice with one question** before real exam
6. **Use split screen:** Exam left (70%), VS Code right (30%)
7. **Screenshot difficult questions** (Win+Shift+S) as backup
8. **Fill TODOs within 1 hour** of finishing exam (while fresh)
