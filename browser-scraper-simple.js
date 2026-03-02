// DP-700 Simple Question Scraper
// Run this AFTER clicking a question, then click "Check Your Answer"

(function() {
    console.log('🔍 Simple question scraper...');
    
    // METHOD 1: Capture everything visible on the page, let user filter
    const bodyText = document.body.innerText;
    
    // METHOD 2: Try to find the main content area
    const mainContent = document.querySelector('main, [role="main"], #main, .content');
    const contentText = mainContent ? mainContent.innerText : bodyText;
    
    // METHOD 3: Manual input with prompts
    console.log('📋 OPTION A: Manual Copy-Paste');
    console.log('1. Copy the question text (Ctrl+C)');
    console.log('2. Paste here in console or run: captureQuestion()');
    
    // Create manual capture function
    window.captureQuestion = function() {
        const questionText = prompt('📝 STEP 1: Paste the QUESTION TEXT (the full scenario):');
        if (!questionText) {
            console.log('❌ Cancelled');
            return;
        }
        
        const optionA = prompt('📝 STEP 2: Paste OPTION A:');
        const optionB = prompt('📝 STEP 3: Paste OPTION B:');
        const optionC = prompt('📝 STEP 4: Paste OPTION C:');
        const optionD = prompt('📝 STEP 5: Paste OPTION D:');
        
        // Format as markdown
        const markdown = `
## Question [TODO - NUMBER]

**Category:** [TODO - Categorize: Workspace/Ingestion/Lakehouse/RealTime/Security/DataWarehouse/Transformation/Monitoring/Governance]

**Difficulty:** [TODO - Easy/Medium/Hard]

**Type:** Multiple Choice

**Question:**
${questionText}

**Options:**
- [ ] A) ${optionA || '[TODO]'}
- [ ] B) ${optionB || '[TODO]'}
- [ ] C) ${optionC || '[TODO]'}
- [ ] D) ${optionD || '[TODO]'}

**Correct Answer:** [TODO - Check exam feedback]

**Explanation:** [TODO - Add explanation from exam feedback]

**Source:** Microsoft Practice Assessment

---
`;
        
        // Show result in a small popup
        const popup = document.createElement('div');
        popup.style.cssText = `
            position: fixed;
            top: 50px;
            right: 20px;
            width: 450px;
            max-height: 600px;
            z-index: 999999;
            background: white;
            border: 3px solid #0078d4;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            font-family: -apple-system, sans-serif;
            color: #000;
            padding: 20px;
            overflow-y: auto;
        `;
        
        popup.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h3 style="margin: 0; color: #0078d4;">✅ Question Captured!</h3>
                <button onclick="this.parentElement.parentElement.remove();" style="background: transparent; border: none; font-size: 24px; cursor: pointer; color: #666;">×</button>
            </div>
            <button onclick="
                const textarea = this.nextElementSibling;
                textarea.select();
                document.execCommand('copy');
                this.innerText = '✅ Copied!';
                setTimeout(() => this.innerText = '📋 Copy to Clipboard', 2000);
            " style="width: 100%; padding: 12px; background: #0078d4; color: white; border: none; border-radius: 4px; font-size: 14px; cursor: pointer; margin-bottom: 10px; font-weight: bold;">
                📋 Copy to Clipboard
            </button>
            <textarea readonly style="width: 100%; height: 350px; font-family: 'Courier New', monospace; font-size: 11px; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">${markdown}</textarea>
            <p style="margin: 10px 0 0 0; font-size: 12px; color: #666;">
                Next: Paste into questions.md and fill in TODO sections
            </p>
        `;
        
        document.body.appendChild(popup);
        
        console.log('✅ Question formatted! See popup in top-right corner.');
        console.log(markdown);
    };
    
    // METHOD 4: Try auto-detection on current visible content
    console.log('\n📋 OPTION B: Try Auto-Detection');
    console.log('Looking for questions on current page...\n');
    
    // Find all text nodes that might be questions
    const allElements = document.querySelectorAll('p, div, span, h1, h2, h3, label, li');
    const potentialQuestions = [];
    
    allElements.forEach(elem => {
        const text = elem.innerText?.trim() || elem.textContent?.trim() || '';
        
        // Skip short text and common UI elements
        if (text.length < 50) return;
        if (text.includes('Microsoft AI Tour')) return;
        if (text.includes('Skip to main')) return;
        if (text.includes('Theme')) return;
        if (text.includes('Cookie')) return;
        
        // Look for question-like text
        if (text.includes('?') || text.toLowerCase().includes('what should you do') || 
            text.toLowerCase().includes('you need to') || text.toLowerCase().includes('which')) {
            potentialQuestions.push({
                text: text,
                element: elem.tagName,
                length: text.length
            });
        }
    });
    
    if (potentialQuestions.length > 0) {
        console.log(`Found ${potentialQuestions.length} potential questions:\n`);
        potentialQuestions.forEach((q, i) => {
            console.log(`${i + 1}. [${q.element}] ${q.text.substring(0, 100)}...`);
        });
        console.log('\n💡 If you see your question above, you can manually format it.');
    } else {
        console.log('⚠️ No questions auto-detected on current page.');
    }
    
    // Show instructions
    console.log('\n' + '='.repeat(70));
    console.log('🎯 HOW TO CAPTURE QUESTIONS');
    console.log('='.repeat(70));
    console.log('\n✅ EASIEST METHOD (Recommended):');
    console.log('   Run: captureQuestion()');
    console.log('   Then paste question + options when prompted');
    console.log('\n📋 Or copy-paste manually using MANUAL_CAPTURE_GUIDE.md');
    console.log('='.repeat(70));
    
    // Make captureQuestion() easy to call
    console.log('\n💡 Type: captureQuestion() and press Enter to start!');
})();
