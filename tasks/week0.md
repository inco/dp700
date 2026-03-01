# Week 0: Setup & Preparation

**Dates:** [Your start date] to [+3 days]  
**Duration:** 1-3 days (flexible based on your prep)  
**Daily Commitment:** 30-45 minutes  
**Learning Path:** N/A (setup phase)

---

## 📋 Daily Checklist

### Day 1: Environment Setup

**Goal:** Get your development environment ready (2-3 hours)

- [x] **Fabric Trial Setup** (45 min)
  - Sign up for [Microsoft Fabric free trial](https://learn.microsoft.com/fabric/get-started/fabric-trial)
  - Create workspace in Fabric
  - Familiarize yourself with Fabric portal UI
  - **Save:** Fabric workspace URL

- [x] **Power BI Desktop** (30 min)
  - Download and install [Power BI Desktop](https://powerbi.microsoft.com/desktop/)
  - Launch and verify installation
  - Sign in with your Microsoft account
  - Create first blank report to verify connectivity

- [x] **VS Code Setup** (30 min)
  - Download and install [VS Code](https://code.visualstudio.com/)
  - Install Python extension by Microsoft
  - Install Azure extensions (optional but helpful)
  - Open your workspace folder: `c:\Projects\dp700`

- [ ] **Git & GitHub** (30 min)
  - Install [Git for Windows](https://git-scm.com/)
  - Verify git installation: `git --version` in PowerShell
  - (Optional) Create GitHub account and new repo for notes

- [ ] **Anki Setup** (20 min)
  - Download [Anki Desktop](https://apps.ankiweb.net/)
  - Install application
  - Create new deck called "DP-700 Exam Prep"
  - (You'll import csv flashcards later)

**End of Day 1 Verification:**
- [x] Can access Fabric workspace
- [x] Power BI Desktop opens
- [x] VS Code opens your project folder
- [x] Git works in PowerShell
- [x] Anki launches

---

### Day 2: Baseline Assessment & Study Plan Review

**Goal:** Assess your current knowledge and organize study resources (2-3 hours)

- [ ] **Baseline Knowledge Check** (1 hour)
  - Take free [DP-700 Practice Assessment](https://learn.microsoft.com/en-us/credentials/certifications/fabric-data-engineer-associate/)
  - **Record your score:** ______ / 100
  - Review wrong answers and note weak areas
  - **Note 3 weakest areas:**
    1. Azure Security
    2. _______________
    3. _______________

- [x] **Study Guide Review** (30 min)
  - Read [Official DP-700 Study Guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-700)
  - Review exam objectives and skills measured
  - Compare with your weak areas from practice assessment
  - Bookmark the study guide for later reference

- [x] **Study Plan Organization** (30 min)
  - Review [DP-700-Study-Plan.md](../DP-700-Study-Plan.md) - your master study plan
  - Review [weekly-practice-tasks.md](../weekly-practice-tasks.md) - daily task breakdown
  - Create calendar entry for Week 1 start date
  - Set phone reminders for daily study sessions

- [x] **Community Resources Setup** (30 min)
  - Verify cloned folder: `c:\Projects\dp700\community-resources\`
  - Check for these files:
    - [x] DP700 Exam Prep Study Notes.pdf
    - [x] DP700_SkillsMeasured.xlsx
    - [x] DP700-ExamPrep.pbix
  - Create personal copy: `Copy-Item "community-resources\DP700_SkillsMeasured.xlsx" -Destination "my-dp700-progress.xlsx"`
  - **Save path:** `c:\Projects\dp700\my-dp700-progress.xlsx`

**End of Day 2 Verification:**
- [ ] Practice assessment completed and scored
- [ ] Weak areas identified
- [ ] Study plan reviewed and bookmarked
- [ ] Calendar events for study sessions created
- [ ] Personal Excel tracker created

---

### Day 3: Power BI Dashboard & YouTube Overview

**Goal:** Set up visual tracking and understand exam scope (1-2 hours)

- [ ] **Power BI Dashboard Setup** (45 min)
  
  1. Open Power BI Desktop
  2. Go to **File** → **Open**
  3. Navigate to: `c:\Projects\dp700\community-resources\DP700-ExamPrep.pbix`
  4. If prompted: "Unable to connect to data source" - this is normal!
  5. Go to **Transform Data** → **Data source settings**
  6. Click **Change Source...**
  7. Browse to: `c:\Projects\dp700\my-dp700-progress.xlsx`
  8. Click **OK** → **Close** → **Refresh**
  9. Verify dashboard displays correctly
  10. Save this configuration

  **Bookmark:** Screenshot of the empty dashboard (you'll compare Week 1 vs Week 8!)

- [ ] **YouTube Overview** (20 min)
  - Watch: [Shabnam Watson - DP-700 Tips & Tricks](https://www.youtube.com/watch?v=om0kJ2fbmko)
  - **Take notes on:**
    - [ ] What surprised her about the exam
    - [ ] Top 3 challenging topics she mentions
    - [ ] Her recommended study approach
    - [ ] Time management tips
  
  **Notes:**
  ```
  Topic 1: _______________
  Topic 2: _______________
  Topic 3: _______________
  Time tip: _______________
  ```

- [ ] **Flashcard Setup** (15 min)
  - Open Anki
  - Go to **File** → **Import**
  - Navigate to: `c:\Projects\dp700\anki_dp700_cards.csv`
  - Import with default settings
  - Verify "DP-700" deck now contains cards
  - Schedule 10 cards for tomorrow
  - **Deck statistics:**
    - Total cards: ____
    - Cards scheduled: 10
    - Review time: ~5 min

**End of Day 3 Verification:**
- [ ] Power BI dashboard connected to Excel tracker
- [ ] YouTube video watched and notes taken
- [ ] Anki deck imported and first cards scheduled
- [ ] All tools verified and working

---

## 📊 Week 0 Tracker

| Task | Status | Date Completed | Time Spent |
|------|--------|----------------|----|
| Fabric Trial Setup | ⬜ | | 45 min |
| Power BI Desktop | ⬜ | | 30 min |
| VS Code Setup | ⬜ | | 30 min |
| Git Installation | ⬜ | | 30 min |
| Anki Setup | ⬜ | | 20 min |
| Baseline Assessment | ⬜ | | 60 min |
| Study Guide Review | ⬜ | | 30 min |
| Study Plan Review | ⬜ | | 30 min |
| Community Resources | ⬜ | | 30 min |
| Power BI Dashboard | ⬜ | | 45 min |
| YouTube Video | ⬜ | | 20 min |
| Flashcard Setup | ⬜ | | 15 min |
| **Week 0 Total** | | | **~5.5 hours** |

---

## 📝 Notes & Observations

**Baseline Assessment Score:** ______ / 100

**Weak Areas Identified:**
1. ___________________________________
2. ___________________________________
3. ___________________________________

**Environment Status:**
- Fabric workspace URL: ________________________________
- Power BI Desktop version: ____________________________
- VS Code workspace ready: ☐ Yes ☐ No
- Git working: ☐ Yes ☐ No
- Anki deck cards: ________

**Exam Insights from YouTube:**
- Biggest challenge: ___________________________________
- Most important topic: _________________________________
- Study timeline: ________________________________________

---

## ✅ Week 0 Completion Checklist

By end of Week 0, you should have:

- [ ] All tools installed and verified
- [ ] Baseline assessment completed
- [ ] Weak areas identified
- [ ] Study plan reviewed
- [ ] Excel tracker created and configured
- [ ] Power BI dashboard connected
- [ ] YouTube video watched
- [ ] Anki imported with 10 cards scheduled
- [ ] Calendar events set for Week 1-8
- [ ] Clear understanding of exam scope

**Status:** Ready to start Week 1! 🚀

---

## 🔗 Related Resources

- [Master Study Plan](../DP-700-Study-Plan.md)
- [Weekly Practice Tasks](../weekly-practice-tasks.md)
- [Using Community Resources](../using-community-resources.md)
- [Setup Community Resources](../setup-community-resources.md)
- [Practice Questions](../practice-questions-by-objective.md)

## 📞 Need Help?

If stuck on any setup step:
1. Refer to [setup-community-resources.md](../setup-community-resources.md) troubleshooting section
2. Check Microsoft Learn prerequisites
3. Review tool documentation

---

**Estimated Start Date:** March 1, 2026  
**Estimated Completion:** March 3, 2026  
**Next:** [Week 1 Tasks](week1.md)
