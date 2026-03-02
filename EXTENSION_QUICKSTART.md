# 🚀 DP-700 Question Capturer Extension - Quick Start

## ✅ Extension Ready!

Your Edge browser extension is ready to use. Here's how to install it:

---

## 📦 Install Extension (2 minutes)

### Step 1: Open Edge Extensions Page
1. Open **Microsoft Edge** browser
2. Type in address bar: `edge://extensions/`
3. Press Enter

### Step 2: Enable Developer Mode
1. Look at the **left sidebar**
2. Find **"Developer mode"** toggle
3. **Turn it ON** (switch to the right)

### Step 3: Load the Extension
1. Click **"Load unpacked"** button (top left area)
2. Navigate to: `C:\Projects\dp700\edge-extension`
3. Click **"Select Folder"**
4. ✅ Extension installed!

### Step 4: Pin to Toolbar (Optional but Recommended)
1. Look for the **puzzle piece icon** (⚙️ Extensions) in toolbar
2. Click it
3. Find **"DP-700 Question Capturer"**
4. Click the **pin icon** 📌
5. Extension icon now visible in toolbar

---

## 🎯 How to Use During Exam

### Before Starting:
1. **Pin the extension** to toolbar (see Step 4 above)
2. **Navigate to** [Microsoft Learn Practice Assessment](https://learn.microsoft.com/credentials/certifications/fabric-data-engineer-associate/practice/assessment)
3. **Start your practice exam**

### For EACH Question:

#### Method 1: One-Click (Fastest)
1. Read the question
2. Click "Check Your Answer" button
3. Click the extension icon (purple with "Q")
4. Click "📸 Capture Current Question"
5. See notification: "✅ Captured!"
6. Continue to next question

#### Method 2: Auto-Monitor (Experimental)
- Extension automatically detects when questions load
- Just click extension icon → Capture button
- No need to wait after "Check Your Answer"

### After Completing Exam:
1. Click extension icon
2. See total questions captured (e.g., "15 Questions Captured")
3. Click "📥 Download All Questions (.md)"
4. Save file to your Downloads folder
5. Open in VS Code

---

## 📋 Complete Workflow

```
┌─────────────────────────────────────────┐
│ 1. Start Practice Exam                  │
│    learn.microsoft.com                   │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│ 2. For Each Question:                   │
│    • Click "Check Your Answer"           │
│    • Click Extension Icon                │
│    • Click "Capture Current Question"    │
│    • See "✅ Captured!" notification     │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│ 3. After All Questions:                 │
│    • Click Extension Icon                │
│    • Click "Download All Questions"      │
│    • Save dp700-questions-YYYY-MM-DD.md  │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│ 4. Open in VS Code:                     │
│    • Search for "TODO" (Ctrl+F)          │
│    • Fill in Category, Difficulty        │
│    • Add Correct Answer from exam        │
│    • Add Explanation from feedback       │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│ 5. Add to questions.md:                 │
│    • Copy content                        │
│    • Paste into questions.md             │
│    • Save file                           │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│ 6. Run Exam Simulator:                  │
│    python exam_simulator.py              │
│    Practice with captured questions!     │
└─────────────────────────────────────────┘
```

---

## 💡 Pro Tips

### During Exam:
- **Keep extension popup open** - watch counter increase
- **Download every 5 questions** - backup as you go
- **Don't worry about formatting** - extension does it for you
- **Screenshot tricky questions** - backup with Win+Shift+S

### After Exam:
- **Fill TODOs immediately** - while exam is fresh (15 min)
- **Use exam feedback** - copy correct answers and explanations
- **Categorize carefully** - helps simulator group questions
- **Rate difficulty honestly** - helps track weak areas

### Extension Features:
- **Badge counter** - shows total captured questions
- **Persistent storage** - won't lose questions if browser closes
- **Multiple export** - download OR copy to clipboard
- **Clear button** - start fresh for new practice exam

---

## 🔧 Troubleshooting

### ❌ Extension Icon Not Showing
**Fix:**
1. Go to `edge://extensions/`
2. Check if "DP-700 Question Capturer" is listed
3. Toggle it OFF then ON
4. Refresh Microsoft Learn page
5. Click puzzle icon → Pin the extension

### ❌ "No questions found" Error
**Fix:**
1. Make sure you clicked "Check Your Answer" first
2. Wait 1-2 seconds for page to load
3. Scroll so question is visible on screen
4. Try clicking extension icon again
5. If still fails: Use browser-scraper-simple.js

### ❌ Questions Captured Incorrectly
**Fix:**
1. Click "Clear All Questions" in extension
2. Try capturing one question at a time
3. Check downloaded file - often has more detail
4. Fallback: Use browser-scraper-simple.js for that question

### ❌ Download Button Disabled
**Fix:**
1. You need to capture at least 1 question first
2. Check badge on extension icon - should show number
3. Open extension popup - should see count
4. Try refreshing the page

---

## 📊 Time Savings

| Task | Manual | With Extension | Savings |
|------|--------|----------------|---------|
| Format 1 question | 5 min | 5 sec | 98% ⬇️ |
| Capture 15 questions | 75 min | 1.5 min | 98% ⬇️ |
| Fill TODOs | 30 min | 15 min | 50% ⬇️ |
| **Total per exam** | **105 min** | **17 min** | **84% faster** |

---

## 🎓 Next Steps

After installing the extension:

1. ✅ **Test with one question first:**
   - Go to practice assessment
   - Capture one question
   - Download and verify it worked

2. ✅ **Practice the workflow:**
   - Capture 3-5 questions
   - Fill in TODOs
   - Add to questions.md
   - Run simulator

3. ✅ **Use for full practice exam:**
   - Capture all questions
   - Download at the end
   - Fill TODOs within 1 hour
   - Practice immediately

4. ✅ **Track your progress:**
   - Run simulator weekly
   - Review score history
   - Focus on weak categories

---

## 🆚 Comparison: Extension vs Console Scripts

| Feature | Extension | browser-scraper-auto.js |
|---------|-----------|------------------------|
| Installation | One-time | Every session |
| Speed | 5 sec/question | 10 sec/question |
| Storage | Persistent | None |
| Reliability | High | Medium |
| UI | Button click | Paste code |
| Counter | Badge + popup | Console log |
| Export | Download + Copy | Download only |

**Use extension for real exams**, keep console scripts as backup.

---

## 📞 Need Help?

1. Check troubleshooting section above
2. Open browser console (F12) to see error messages
3. Try fallback: browser-scraper-simple.js
4. Ultimate fallback: MANUAL_CAPTURE_GUIDE.md

---

## 🎉 You're Ready!

Extension installed and ready to capture questions!

**Start here:**
[Microsoft Learn DP-700 Practice Assessment](https://learn.microsoft.com/credentials/certifications/fabric-data-engineer-associate/practice/assessment)

Good luck with your DP-700 exam prep! 🚀📚
