# DP-700 Question Capturer - Edge Extension

## 🎯 What It Does

Automatically captures questions from Microsoft Learn practice assessments and formats them for your exam simulator.

**One-click question capture** - No console, no scripts, no manual copy-paste!

---

## 📦 Installation

### Option 1: Load Unpacked Extension (Development Mode)

1. **Open Edge browser**
2. **Navigate to:** `edge://extensions/`
3. **Enable "Developer mode"** (toggle in left sidebar)
4. **Click "Load unpacked"**
5. **Select folder:** `C:\Projects\dp700\edge-extension`
6. **Done!** The extension icon appears in your toolbar

### Option 2: Create Icons (Optional)

The extension needs 3 icon files. You can:

**A) Use text-based icons (quick):**
- Run the PowerShell script below to create simple colored icons

**B) Create professional icons:**
- Use an icon generator like https://favicon.io/
- Create 16x16, 48x48, and 128x128 PNG files
- Save as icon16.png, icon48.png, icon128.png in the `icons` folder

---

## 🚀 How to Use

### Step 1: Start Your Practice Exam
1. Go to Microsoft Learn DP-700 Practice Assessment
2. Start the exam

### Step 2: Capture Questions
For EACH question:
1. **Click "Check Your Answer"** (reveals full question)
2. **Click extension icon** in toolbar (purple gradient icon)
3. **Click "📸 Capture Current Question"**
4. **See notification** "✅ Captured!"
5. **Continue to next question**

### Step 3: Download All Questions
After capturing all questions:
1. **Click extension icon**
2. **Click "📥 Download All Questions (.md)"**
3. **Save to your project folder**
4. **Open in VS Code** and fill in TODO sections
5. **Run exam simulator:** `python exam_simulator.py`

---

## ✨ Features

### Automatic Detection
- Finds questions using multiple strategies
- Works with Microsoft Learn's dynamic content
- Filters out navigation and UI elements

### Smart Storage
- Stores all captured questions in browser
- Persists across browser sessions
- Shows count badge on extension icon

### Multiple Export Options
- **Download:** Save as markdown file
- **Copy:** Copy to clipboard for quick paste
- **Clear:** Remove all captured questions

### Beautiful UI
- Purple gradient design
- Real-time question counter
- Success/error messages
- Helpful tips included

---

## 🎨 Create Icons (PowerShell Script)

Run this in PowerShell to create simple colored icons:

```powershell
cd C:\Projects\dp700\edge-extension\icons

# Create 16x16 icon
Add-Type -AssemblyName System.Drawing
$bmp16 = New-Object System.Drawing.Bitmap 16, 16
$gfx16 = [System.Drawing.Graphics]::FromImage($bmp16)
$gfx16.Clear([System.Drawing.Color]::FromArgb(102, 126, 234))
$bmp16.Save("$PWD\icon16.png")
$gfx16.Dispose()
$bmp16.Dispose()

# Create 48x48 icon
$bmp48 = New-Object System.Drawing.Bitmap 48, 48
$gfx48 = [System.Drawing.Graphics]::FromImage($bmp48)
$gfx48.Clear([System.Drawing.Color]::FromArgb(102, 126, 234))
$bmp48.Save("$PWD\icon48.png")
$gfx48.Dispose()
$bmp48.Dispose()

# Create 128x128 icon
$bmp128 = New-Object System.Drawing.Bitmap 128, 128
$gfx128 = [System.Drawing.Graphics]::FromImage($bmp128)
$gfx128.Clear([System.Drawing.Color]::FromArgb(102, 126, 234))
$bmp128.Save("$PWD\icon128.png")
$gfx128.Dispose()
$bmp128.Dispose()

Write-Host "✅ Icons created!" -ForegroundColor Green
```

---

## 📋 Workflow Comparison

| Method | Time per Question | Effort | Reliability |
|--------|------------------|--------|-------------|
| **Extension** ✅ | **5 seconds** | **One click** | **High** |
| browser-scraper-auto.js | 10 seconds | Paste in console | Medium |
| browser-scraper-simple.js | 45 seconds | 5 manual prompts | High |
| Manual copy-paste | 2 minutes | Copy + format | Very High |

---

## 🐛 Troubleshooting

### ❌ Extension icon doesn't appear
- Check `edge://extensions/` - is it enabled?
- Refresh the page
- Try reloading the extension

### ❌ "No questions found" error
- Make sure you clicked "Check Your Answer" first
- Ensure question is visible on screen
- Try scrolling to the question
- Refresh page and try again

### ❌ Questions captured incorrectly
- Might be timing issue - wait 1 second after "Check Your Answer"
- Try capturing again
- Use browser-scraper-simple.js as fallback

### ❌ Download button disabled
- You need to capture at least 1 question first
- Check if storage is working: F12 → Application → Storage

---

## 🔧 File Structure

```
edge-extension/
├── manifest.json          # Extension configuration
├── content.js             # Runs on Microsoft Learn pages
├── background.js          # Background service worker
├── popup.html             # Extension popup UI
├── popup.js               # Popup functionality
├── welcome.html           # First-time installation page (optional)
├── README.md              # This file
└── icons/
    ├── icon16.png         # Small icon
    ├── icon48.png         # Medium icon
    └── icon128.png        # Large icon
```

---

## 🎓 Integration with Exam Simulator

1. **Capture questions** during practice exam (extension)
2. **Download markdown file** (extension popup)
3. **Fill in TODO sections** (VS Code - 30 sec each)
4. **Copy content** to `questions.md`
5. **Run simulator:** `python exam_simulator.py`
6. **Track progress** in score history

---

## 💡 Pro Tips

1. **Pin the extension** to toolbar for quick access
2. **Keep extension popup open** while taking exam
3. **Watch the counter** to track your progress
4. **Download regularly** as backup (every 5 questions)
5. **Fill TODOs immediately** after exam (while fresh)
6. **Clear storage** before starting new practice exam

---

## 🆚 vs. JavaScript Console Scripts

| Feature | Extension | Console Scripts |
|---------|-----------|-----------------|
| Installation | One-time | Per-session |
| Storage | Persistent | None |
| UI | Beautiful popup | Console logs |
| Ease of use | One click | Paste code |
| Counter | Real-time badge | Manual count |
| Download | Built-in | Blob API |

**Recommendation:** Use extension for real exams, keep console scripts as backup.

---

## 🔒 Privacy & Security

- **No data leaves your browser** - everything stored locally
- **No network requests** - only works on Microsoft Learn
- **No tracking** - no analytics, no telemetry
- **Open source** - inspect the code yourself
- **No permissions abuse** - only asks for necessary permissions

---

## 📞 Support

If you encounter issues:

1. Check this README troubleshooting section
2. Open browser console (F12) to see error messages
3. Try fallback: browser-scraper-simple.js
4. Ultimate fallback: MANUAL_CAPTURE_GUIDE.md

---

## 🎉 Quick Start

```
1. edge://extensions/ → Toggle Developer Mode
2. Load unpacked → Select edge-extension folder
3. Go to Microsoft Learn practice exam
4. Click "Check Your Answer"
5. Click extension icon → Capture Current Question
6. Repeat for all questions
7. Download All Questions → Save as .md
8. Fill TODOs → Add to questions.md
9. Run: python exam_simulator.py
```

**That's it! You're ready to ace DP-700! 🚀**
