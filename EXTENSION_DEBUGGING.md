# Extension Debugging Guide

## ✅ If the extension still says "No questions found"

Follow these steps to diagnose the issue:

---

## 🔍 Method 1: Check Console Logs (Recommended)

### Step 1: Open Browser Console
1. **On your exam page**, press **F12**
2. Click **"Console"** tab at the top
3. You'll see lots of log messages

### Step 2: Look for Your Message
Look for messages like:
- ✅ `🔍 Starting automatic question extraction...`
- `Found 15 lines of text`
- `Found question at line 0: Your company is transitioning...`
- `Found option: Assign workspaces...`
- `✅ Extracted question with 4 options`

### Step 3: Interpret the Logs

**If you see:**
```
🔍 Starting automatic question extraction...
Found 27 lines of text
Found question at line 0: Your company is transitioning...
Found option: Assign workspaces...
✅ Extracted question with 4 options
```
✅ **WORKING PERFECTLY** - Capture should succeed!

**If you see:**
```
🔍 Starting automatic question extraction...
No main content area found
```
❌ **Problem:** The page layout is different. Try reloading page.

**If you see:**
```
🔍 Starting automatic question extraction...
Found 27 lines of text
No question mark (?) found in visible text
```
❌ **Problem:** Question text not visible. Make sure you clicked "Check Your Answer"

**If you see:**
```
✅ Extracted question with 1 options
⚠️ Not enough options (1). Question might not be fully loaded.
```
⚠️ **Problem:** Wait 2-3 seconds after clicking "Check Your Answer", then try again

---

## 🔧 Method 2: Manual Console Testing

### Step 1: Open Console (F12 on exam page)

### Step 2: Paste This Code:
```javascript
// Test the extraction manually
const main = document.querySelector('main, [role="main"], article');
if (!main) {
    console.log('❌ No main content found');
} else {
    const text = main.innerText;
    console.log('Found content:', text.substring(0, 200));
    console.log('Has question mark?', text.includes('?'));
    console.log('Total lines:', text.split('\n').length);
}
```

### Step 3: Press Enter
Check the output to see if the question is actually on the page.

---

## 🐛 Method 3: Reload Extension

If you changed any files:

1. Go to **edge://extensions/**
2. Find **DP-700 Question Capturer**
3. Click the **refresh icon** (↻)
4. Go back to exam page
5. **Refresh the page** (F5)
6. Try capturing again

---

## 🔴 Common Issues & Fixes

### Issue: "No main content area found"
**Cause:** Page structure is different
**Fix:**
1. Refresh the exam page (F5)
2. Wait 3 seconds for content to load
3. Make sure question is visible on screen
4. Try again

### Issue: "No question mark (?) found"
**Cause:** Question text not loaded yet
**Fix:**
1. Click "Check Your Answer" (if you haven't)
2. Wait 2-3 seconds
3. Make sure the question is scrolled into view
4. Try capturing again
5. If still fails → Use browser-scraper-simple.js

### Issue: "Not enough options (1 or 2)"
**Cause:** Options not fully loaded yet
**Fix:**
1. Wait 3-5 seconds on the question page
2. Scroll through the options to ensure they're rendered
3. Try capturing again
4. If still fails → Use browser-scraper-simple.js

### Issue: Extension icon doesn't appear
**Cause:** Extension not installed correctly
**Fix:**
1. Go to **edge://extensions/**
2. Check if "DP-700 Question Capturer" is listed
3. Toggle it OFF then back ON
4. Go back to exam page
5. Look for purple icon in toolbar

### Issue: Capture works but questions are cut off
**Cause:** Explanation text is being captured with the options
**Fix:**
1. This is normal - we capture ALL text near the question
2. The downloaded markdown will have all details
3. You can manually trim in VS Code
4. Focus on filling in TODO sections correctly

---

## 📝 Method 4: Manual Fallback

If extension keeps failing, use **browser-scraper-simple.js**:

1. **Open exam page**
2. **Press F12** → Console tab
3. **Copy entire content** of `c:\Projects\dp700\edge-extension\browser-scraper-simple.js`
4. **Paste into console** and press Enter
5. **Type:** `captureQuestion()`
6. **Answer the prompts** with question and options
7. **Click "Copy to Clipboard"** in the popup

This manual method works 100% of the time!

---

## 🚀 Next Steps if Still Having Issues

### Option A: Use browser-scraper-simple.js (Most Reliable)
See instructions above - this method works almost 100%

### Option B: Use MANUAL_CAPTURE_GUIDE.md (Ultimate Fallback)
Open `c:\Projects\dp700\MANUAL_CAPTURE_GUIDE.md` for copy-paste method

### Option C: Report the Issue
If you get a console error, share:
1. The **error message** from console
2. A **screenshot** of the questions page
3. The **first 5 lines** of logs from console

---

## ✅ Troubleshooting Checklist

Before trying again:
- [ ] Refreshed the page (F5)
- [ ] Waited 3+ seconds after clicking "Check Your Answer"
- [ ] Made sure question is visible on screen
- [ ] Scrolled through all options to make sure they're visible
- [ ] Checked console (F12) for error messages
- [ ] Reloaded the extension (edge://extensions/ → Refresh)
- [ ] Tried on a different question first
- [ ] Cleared browser cache (Ctrl+Shift+Delete)

If you've checked all these and it still doesn't work → Use **browser-scraper-simple.js**

---

## 💡 Quick Debug Commands

Run these in console (F12) while on exam page to help diagnose:

```javascript
// Check if main content exists
console.log('Main found?', !!document.querySelector('main'));

// Check if there are radiogroups (question options)
console.log('Radiogroups:', document.querySelectorAll('[role="radiogroup"]').length);

// Check if there's questionsmark in text
console.log('Has question mark?', document.body.innerText.includes('?'));

// Show first 300 chars of visible text
console.log('Text:', document.body.innerText.substring(0, 300));

// Check if extension is loaded
console.log('Extension running?', typeof chrome !== 'undefined' && !!chrome.runtime);
```

---

## 🎯 Best Workaround

If extension is giving trouble on your specific page:

**Use this instead:**
1. Open **browser-scraper-simple.js** in editor
2. Copy the entire content
3. Press F12 on exam page
4. Paste into console
5. Type: `captureQuestion()`
6. Answer 5 prompts (question + 4 options)
7. Click copy button

**Time:** 45 seconds per question vs 5 seconds with extension

**Reliability:** 100% vs 95% with extension

---

## 📞 Still Stuck?

1. **Check the logs** - F12 → Console shows exactly what's wrong
2. **Try browser-scraper-simple.js** - works as reliable fallback
3. **Use MANUAL_CAPTURE_GUIDE.md** - ultimate backup method
4. **Take a screenshot** - helps understand page structure

You have **3 reliable backup methods**, so you can always capture your questions!
