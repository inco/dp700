// DP-700 Exam Question Scraper - Microsoft Learn Edition
// Paste this into your browser's Developer Console (F12) to extract questions

(function() {
    console.log('🔍 Starting question extraction...');
    
    // Wait for dynamic content to load
    function findQuestions() {
        const questions = [];
        
        // Microsoft Learn specific selectors
        const selectors = [
            '[role="radiogroup"]', // Radio button groups for multiple choice
            '[data-test-id*="question"]',
            'div[class*="question"]',
            'fieldset', // Often wraps question options
        ];
        
        // Find all text elements that look like questions
        const allText = document.body.innerText;
        const paragraphs = document.querySelectorAll('p, div, span, h2, h3');
        
        let currentQuestion = null;
        
        paragraphs.forEach(elem => {
            const text = elem.innerText?.trim() || '';
            
            // Skip navigation, footer, header content
            if (text.length < 30) return;
            if (text.includes('Microsoft AI Tour')) return;
            if (text.includes('Learning hub')) return;
            if (text.includes('Previous Versions')) return;
            if (text.includes('Skip to main')) return;
            
            // Look for question patterns
            if (text.includes('?') && text.length > 50 && text.length < 1000) {
                // This might be a question
                const parent = elem.closest('div, section, article, [role="group"]');
                if (!parent) return;
                
                // Look for associated options near this question
                const nearbyRadios = parent.querySelectorAll('input[type="radio"], input[type="checkbox"]');
                const nearbyLabels = parent.querySelectorAll('label');
                
                if (nearbyRadios.length >= 2 || nearbyLabels.length >= 2) {
                    const options = [];
                    nearbyLabels.forEach(label => {
                        const optText = label.innerText?.trim();
                        if (optText && optText.length > 2 && optText.length < 500) {
                            options.push(optText);
                        }
                    });
                    
                    if (options.length >= 2) {
                        questions.push({
                            question: text,
                            options: options,
                            rawHtml: parent.outerHTML.substring(0, 500) // Truncate for readability
                        });
                    }
                }
            }
        });
        
        return questions;
    }
    
    const questions = findQuestions();
    console.log(`✅ Found ${questions.length} questions`);
    
    if (questions.length === 0) {
        alert('⚠️ No questions found! Try navigating to a question page first, then run this script.');
        return;
    }
    
    // Format for Markdown
    let markdown = '# DP-700 Practice Assessment Questions\n\n';
    markdown += `Extracted: ${new Date().toLocaleString()}\n`;
    markdown += `Total Questions: ${questions.length}\n\n`;
    markdown += '---\n\n';
    
    questions.forEach((q, i) => {
        markdown += `## Question ${i + 1}\n\n`;
        markdown += `**Category:** [TODO - Categorize: Workspace/Ingestion/Lakehouse/RealTime/Security/DataWarehouse/Transformation/Monitoring/Governance]\n\n`;
        markdown += `**Difficulty:** [TODO - Easy/Medium/Hard]\n\n`;
        markdown += `**Type:** Multiple Choice\n\n`;
        markdown += `**Question:**\n${q.question}\n\n`;
        markdown += `**Options:**\n`;
        
        // Label options as A, B, C, D
        const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
        q.options.forEach((opt, idx) => {
            if (idx < letters.length) {
                markdown += `- [ ] ${letters[idx]}) ${opt}\n`;
            }
        });
        
        markdown += `\n**Correct Answer:** [TODO - Check your exam results]\n\n`;
        markdown += `**Explanation:** [TODO - Add explanation from exam feedback]\n\n`;
        markdown += `**Source:** Microsoft Practice Assessment\n\n`;
        markdown += '---\n\n';
    });
    
    // Display results in console
    console.log('='.repeat(70));
    console.log('MARKDOWN READY TO COPY');
    console.log('='.repeat(70));
    console.log(markdown);
    console.log('='.repeat(70));
    
    // Create downloadable file
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dp700-questions-${Date.now()}.md`;
    a.click();
    URL.revokeObjectURL(url);
    
    // Create SMALL draggable popup window (not full screen!)
    const popup = document.createElement('div');
    popup.id = 'question-scraper-popup';
    popup.style.cssText = `
        position: fixed;
        top: 50px;
        right: 20px;
        width: 400px;
        max-height: 500px;
        z-index: 999999;
        background: white;
        border: 3px solid #0078d4;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
        color: #000;
        display: flex;
        flex-direction: column;
    `;
    
    popup.innerHTML = `
        <div style="background: #0078d4; color: white; padding: 12px; cursor: move; border-radius: 5px 5px 0 0; font-weight: bold;" id="popup-header">
            ✅ ${questions.length} Questions Extracted
            <button onclick="this.parentElement.parentElement.remove();" style="float: right; background: transparent; border: none; color: white; font-size: 20px; cursor: pointer; padding: 0; line-height: 1;">×</button>
        </div>
        <div style="padding: 15px; overflow-y: auto; flex: 1;">
            <p style="margin: 0 0 10px 0; font-size: 14px;">✅ File downloaded to Downloads folder</p>
            <button onclick="
                const textarea = document.getElementById('scraper-textarea');
                textarea.select();
                document.execCommand('copy');
                this.innerText = '✅ Copied!';
                setTimeout(() => this.innerText = '📋 Copy to Clipboard', 2000);
            " style="width: 100%; padding: 12px; background: #0078d4; color: white; border: none; border-radius: 4px; font-size: 14px; cursor: pointer; margin-bottom: 10px; font-weight: bold;">
                📋 Copy to Clipboard
            </button>
            <textarea id="scraper-textarea" readonly style="width: 100%; height: 200px; font-family: 'Courier New', monospace; font-size: 11px; padding: 8px; border: 1px solid #ccc; border-radius: 4px; resize: vertical;">${markdown.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</textarea>
            <p style="margin: 10px 0 0 0; font-size: 12px; color: #666;">
                Next: Open questions.md and paste, then fill in TODO sections.
            </p>
        </div>
    `;
    
    document.body.appendChild(popup);
    
    // Make draggable
    let isDragging = false;
    let currentX, currentY, initialX, initialY;
    const header = document.getElementById('popup-header');
    
    header.addEventListener('mousedown', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            isDragging = true;
            initialX = e.clientX - popup.offsetLeft;
            initialY = e.clientY - popup.offsetTop;
        }
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            popup.style.left = currentX + 'px';
            popup.style.top = currentY + 'px';
            popup.style.right = 'auto';
        }
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    console.log(`✅ Success! ${questions.length} questions extracted`);
    console.log('📥 Option 1: File downloaded to Downloads folder');
    console.log('📋 Option 2: Click "Copy to Clipboard" button in popup');
    console.log('📝 Option 3: Copy from console log above');
})();
