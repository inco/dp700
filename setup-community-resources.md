# Quick Setup: Download Community Resources

> **Quick steps to download Shabnam Watson's DP-700 study materials**

---

## Option 1: Download Individual Files (Easiest)

Click each link and download:

1. **📝 Study Notes PDF**  
   https://github.com/ShbWatson/Exam-DP-700-Implementing-Data-Engineering-Solutions-Using-Microsoft-Fabric/raw/main/DP700%20Exam%20Prep%20Study%20Notes.pdf
   
   Save to: `c:\Projects\dp700\community-resources\`

2. **📊 Skills Measured Excel**  
   https://github.com/ShbWatson/Exam-DP-700-Implementing-Data-Engineering-Solutions-Using-Microsoft-Fabric/raw/main/DP700_SkillsMeasured.xlsx
   
   Save to: `c:\Projects\dp700\community-resources\`

3. **📈 Exam Prep Power BI**  
   https://github.com/ShbWatson/Exam-DP-700-Implementing-Data-Engineering-Solutions-Using-Microsoft-Fabric/raw/main/DP700-ExamPrep.pbix
   
   Save to: `c:\Projects\dp700\community-resources\`

4. **🎥 YouTube Video** (watch online, no download needed)  
   https://www.youtube.com/watch?v=om0kJ2fbmko

---

## Option 2: Clone the Repository (Recommended)

**Using VS Code Terminal:**

```powershell
# Navigate to your project folder
cd c:\Projects\dp700

# Clone the repository
git clone https://github.com/ShbWatson/Exam-DP-700-Implementing-Data-Engineering-Solutions-Using-Microsoft-Fabric.git community-resources

# Files are now in: c:\Projects\dp700\community-resources\
```

---

## Setup After Download

### 1. Create Your Personal Copy of Excel Tracker
```powershell
cd c:\Projects\dp700
Copy-Item "community-resources\DP700_SkillsMeasured.xlsx" -Destination "my-dp700-progress.xlsx"
```

### 2. Connect Power BI to Your Excel Tracker

1. Open `c:\Projects\dp700\community-resources\DP700-ExamPrep.pbix` in Power BI Desktop
2. You may see a warning: "Unable to connect to data source"
3. Click **Transform Data** → **Data source settings**
4. Click **Change Source...**
5. Browse to: `c:\Projects\dp700\my-dp700-progress.xlsx`
6. Click **OK** and **Close**
7. Click **Refresh** to load your data

### 3. Open Study Notes PDF

```powershell
# Open with default PDF viewer
Invoke-Item "c:\Projects\dp700\community-resources\DP700 Exam Prep Study Notes.pdf"
```

Or just double-click the file in File Explorer.

### 4. Watch YouTube Video

Open in browser: https://www.youtube.com/watch?v=om0kJ2fbmko

**Recommended viewing schedule:**
- **Week 0 (now):** Watch full video (15-20 min)
- **Week 6:** Rewatch sections on difficult topics
- **Week 8:** Watch again 2 days before exam

---

## File Structure After Setup

```
c:\Projects\dp700\
├── DP-700-Study-Plan.md                    # Your master plan (this file)
├── weekly-practice-tasks.md                # Daily/weekly task breakdown
├── practice-questions-by-objective.md      # 54 practice questions
├── using-community-resources.md            # Guide for using Shabnam's materials
├── anki_dp700_cards.csv                    # Flashcard deck
├── my-dp700-progress.xlsx                  # YOUR personal tracker (edit this!)
├── README.md
├── TODO_ISSUES.md
├── community-resources/                    # Downloaded materials
│   ├── DP700 Exam Prep Study Notes.pdf     # Shabnam's study notes
│   ├── DP700_SkillsMeasured.xlsx          # Original tracker (don't edit)
│   ├── DP700-ExamPrep.pbix                # Power BI dashboard
│   └── ReadMe                             # GitHub repo readme
├── Fabric/                                 # Your Fabric projects
└── labs/                                   # Your lab notebooks
    └── week1/
        ├── security_lab.ipynb
        └── streaming_lab.ipynb
```

---

## Daily Usage

### Morning Routine (10 min)
```powershell
# Open Anki and review flashcards
anki
```

### Evening Study (45-60 min)
1. Review module from **DP-700-Study-Plan.md**
2. Follow specific tasks from **weekly-practice-tasks.md**
3. Open **my-dp700-progress.xlsx**
4. Mark completed objectives as ✅
5. Add notes and confidence rating

### After Completing a Topic
1. Open **practice-questions-by-objective.md**
2. Answer questions for that topic
3. Score yourself
4. Review explanations for wrong answers

### Saturday (Lab Day)
1. Follow lab tasks from **weekly-practice-tasks.md**
2. Reference **community-resources/DP700 Exam Prep Study Notes.pdf** for clarification
3. Document your lab work
4. Update Excel tracker with lab completion

### Sunday (Review Day)
1. Open **my-dp700-progress.xlsx** - review week's completions
2. Open **DP700-ExamPrep.pbix** in Power BI Desktop
3. Click **Refresh** to see updated progress dashboard
4. Take screenshots of progress for motivation
5. Create flashcards from week's learnings

---

## Troubleshooting

### Power BI Won't Connect to Excel
**Problem:** "Could not find file" error

**Solution:**
1. Ensure `my-dp700-progress.xlsx` is in `c:\Projects\dp700\`
2. Close Excel if it's open
3. In Power BI: Transform Data → Data Source Settings → Change Source
4. Verify exact path: `c:\Projects\dp700\my-dp700-progress.xlsx`

### Excel Tracker Looks Different
**Problem:** Original Excel is formatted differently than expected

**Solution:**
- This is normal - the creator made it for their use
- Feel free to customize it to your needs
- Add/remove columns as you prefer
- The Power BI file reads specific columns, so main headers should remain

### PDF Won't Open
**Problem:** PDF shows garbled text or won't open

**Solution:**
```powershell
# Re-download using PowerShell
Invoke-WebRequest -Uri "https://github.com/ShbWatson/Exam-DP-700-Implementing-Data-Engineering-Solutions-Using-Microsoft-Fabric/raw/main/DP700%20Exam%20Prep%20Study%20Notes.pdf" -OutFile "c:\Projects\dp700\community-resources\study-notes.pdf"
```

---

## What to Do Each Week

| Week | Community Resources Tasks |
|------|---------------------------|
| **W0** | Download all files, watch YouTube video, set up Excel + Power BI |
| **W1** | Update Excel daily, review study notes on ingestion topics |
| **W2** | Continue Excel updates, reference notes for lakehouse architecture |
| **W3** | Excel + Power BI check on Sunday, review transformation notes |
| **W4** | Update Excel, review streaming/KQL sections in notes |
| **W5** | Weekly Excel + Power BI update, warehouse notes review |
| **W6** | Excel completion check (should be 90%+), security notes review |
| **W7** | Final Excel updates, comprehensive notes review, rewatch YouTube video |
| **W8** | Power BI final dashboard (100% complete!), light notes review, YouTube video key points |

---

## Resources Are Downloaded - What Now?

✅ **Files downloaded and organized**

**Next Steps:**
1. ⬜ Watch YouTube video (Week 0)
2. ⬜ Customize Excel tracker with your columns
3. ⬜ Connect Power BI to your Excel file
4. ⬜ Start Week 1 from **DP-700-Study-Plan.md**
5. ⬜ Follow daily tasks from **weekly-practice-tasks.md**
6. ⬜ Update Excel tracker after each module

**You're now ready to begin your DP-700 journey with comprehensive resources! 🚀**

---

## Quick Links Reference

| Resource | Link |
|----------|------|
| GitHub Repo | https://github.com/ShbWatson/Exam-DP-700-Implementing-Data-Engineering-Solutions-Using-Microsoft-Fabric |
| YouTube Video | https://www.youtube.com/watch?v=om0kJ2fbmko |
| Official DP-700 Study Guide | https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-700 |
| Practice Assessment (Free) | https://learn.microsoft.com/credentials/certifications/fabric-data-engineer-associate/practice/assessment |
| Microsoft Fabric Docs | https://learn.microsoft.com/en-us/fabric/ |

---

Good luck! 🎯
