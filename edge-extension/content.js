// Content script that runs on Microsoft Learn practice assessment pages
// Automatically detects and captures questions

console.log('DP-700 Question Capturer: Extension loaded');

// Main extraction function - TARGET SPECIFIC FIELDSET
function extractQuestions() {
    console.log('🔍 Starting question extraction...');
    
    const questions = [];
    
    // DIRECT APPROACH: Look for fieldset with aria-label="question-legend"
    const questionFieldsets = document.querySelectorAll('fieldset[aria-label="question-legend"]');
    console.log(`Found ${questionFieldsets.length} question fieldsets`);
    
    if (questionFieldsets.length === 0) {
        console.log('❌ No fieldset[aria-label="question-legend"] found');
        return questions;
    }
    
    // Parse each fieldset (should be 1 per question displayed)
    questionFieldsets.forEach((fieldset, qIdx) => {
        console.log(`\n📋 Processing fieldset ${qIdx}...`);
        
        // Find the question text - usually in a legend or preceding label
        let questionText = '';
        
        // Look for div#question-legend with content
        const legendDiv = fieldset.querySelector('div[id*="legend"]');
        if (legendDiv) {
            // Get all <p> tags and join them
            const paragraphs = legendDiv.querySelectorAll('p');
            console.log(`  Found ${paragraphs.length} paragraphs in legend div`);
            
            if (paragraphs.length > 0) {
                // Get the last paragraph which should have the "What should you do?" question
                const allParaText = Array.from(paragraphs)
                    .map(p => (p.innerText || p.textContent || '').trim())
                    .filter(t => t.length > 0)
                    .join(' ');
                
                if (allParaText.includes('?')) {
                    questionText = allParaText;
                    console.log(`  ✅ Found question text (${questionText.length} chars)`);
                    console.log(`     "${questionText.substring(0, 100)}..."`);
                }
            }
        }
        if (!questionText) {
            console.log('  ❌ No question text found');
            return;
        }
        
        // OPTIONS: Look for radio or checkbox labels
        let optionLabels = fieldset.querySelectorAll('label.radio');
        let isMulti = false;
        if (optionLabels.length === 0) {
            optionLabels = fieldset.querySelectorAll('label.checkbox');
            if (optionLabels.length > 0) {
                isMulti = true;
            }
        }
        console.log(`  Found ${optionLabels.length} option labels (multi=${isMulti})`);
        
        const options = [];
        const correctIndices = [];
            
        optionLabels.forEach((label, optIdx) => {
            // radio:text in span.radio-label-text or checkbox-text
            let labelSpan = label.querySelector('span.radio-label-text') || label.querySelector('span.checkbox-text');
            if (labelSpan) {
                const optionText = (labelSpan.innerText || labelSpan.textContent || '').trim();
                
                // Check if this is the correct answer
                const isCorrect = label.classList.contains('is-correct');
                
                if (optionText) {
                    options.push(optionText);
                    if (isCorrect) {
                        correctIndices.push(options.length - 1);
                    }
                    console.log(`    Option ${optIdx}: "${optionText.substring(0, 60)}..." ${isCorrect ? '✅ CORRECT' : ''}`);
                }
            }
        });
        
        console.log(`  ✅ Extracted ${options.length} options`);

        // EXPLANATION: Look for rationale section and links
        let explanation = '';
        let references = [];
        const rationale = fieldset.querySelector('section#rationale, section[id*="rationale"]');
        if (rationale) {
            explanation = (rationale.innerText || rationale.textContent || '')
                .replace(/\s+/g, ' ')
                .trim();
            if (explanation) {
                console.log(`  ✅ Extracted explanation (${explanation.length} chars)`);
            }
            // pull out links
            const anchors = rationale.querySelectorAll('a[href]');
            anchors.forEach(a => {
                const href = a.href;
                if (href && !references.includes(href)) {
                    references.push(href);
                }
            });
            if (references.length) {
                console.log(`  ✅ Found ${references.length} reference link(s)`);
            }
        }

        const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
        // handle multiple correct
        let correctAnswerLetter = '';
        let correctAnswerText = '';
        if (correctIndices.length === 1) {
            correctAnswerLetter = letters[correctIndices[0]] || '';
            correctAnswerText = options[correctIndices[0]] || '';
        } else if (correctIndices.length > 1) {
            correctAnswerLetter = correctIndices.map(i => letters[i] || '').join(', ');
            correctAnswerText = correctIndices.map(i => options[i]).join(' | ');
        }
        
        // Add question if we have content
        if (questionText && options.length >= 2) {
            questions.push({
                question: questionText,
                options: options,
                correctAnswerLetter: correctAnswerLetter,
                correctAnswerText: correctAnswerText,
                explanation: explanation,
                references: references
            });
            console.log(`  ✅✅ Question added successfully!`);
        } else {
            console.log(`  ❌ Not enough options (${options.length}) or no question text`);
        }
    });
    
    console.log(`\n✅ FINAL: Extracted ${questions.length} questions`);
    return questions;
}

// Format questions as markdown
function formatAsMarkdown(questions) {
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
        
        const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
        q.options.forEach((opt, idx) => {
            if (idx < letters.length) {
                markdown += `- [ ] ${letters[idx]}) ${opt}\n`;
            }
        });
        
        if (q.correctAnswerLetter && q.correctAnswerText) {
            markdown += `\n**Correct Answer:** ${q.correctAnswerLetter}) ${q.correctAnswerText}\n\n`;
        } else {
            markdown += `\n**Correct Answer:** [TODO - Check exam results]\n\n`;
        }

        if (q.explanation) {
            markdown += `**Explanation:** ${q.explanation}\n\n`;
        } else {
            markdown += `**Explanation:** [TODO - Add explanation from exam feedback]\n\n`;
        }
        if (q.references && q.references.length) {
            markdown += `**References:**\n`;
            q.references.forEach(ref => {
                markdown += `- ${ref}\n`;
            });
            markdown += `\n`;
        }
        markdown += `**Source:** Microsoft Practice Assessment\n\n`;
        markdown += '---\n\n';
    });
    
    console.log('Formatted markdown:', markdown.substring(0, 300));
    return markdown;
}

// Show success notification
function showNotification(count) {
    // Remove any existing notifications
    const existing = document.getElementById('dp700-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.id = 'dp700-notification';
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 320px;
        z-index: 999999;
        background: linear-gradient(135deg, #0078d4 0%, #0063b1 100%);
        color: white;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
        padding: 20px;
        animation: slideInUp 0.4s ease-out;
    `;
    
    notification.innerHTML = `
        <style>
            @keyframes slideInUp {
                from { transform: translateY(100px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @keyframes fadeOut {
                to { opacity: 0; transform: translateY(20px); }
            }
        </style>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
            <div>
                <div style="font-weight: bold; font-size: 18px; margin-bottom: 4px;">✅ Captured!</div>
                <div style="font-size: 14px; opacity: 0.95;">${count} Question${count > 1 ? 's' : ''} ready to export</div>
            </div>
            <button id="dp700-close-btn" style="background: transparent; border: none; color: white; font-size: 24px; cursor: pointer; padding: 0; line-height: 1; opacity: 0.8;">×</button>
        </div>
        <div style="font-size: 12px; opacity: 0.9; margin-bottom: 10px;">
            Click the extension icon to download
        </div>
        <div style="background: rgba(255,255,255,0.2); padding: 8px; border-radius: 6px; font-size: 11px;">
            💡 Tip: Continue to next question, we'll save all of them!
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Close button handler
    document.getElementById('dp700-close-btn').addEventListener('click', () => {
        notification.style.animation = 'fadeOut 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto-close after 10 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'fadeOut 0.3s ease-out forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 10000);
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'captureQuestion') {
        console.log('📸 Capture request received');
        const questions = extractQuestions();
        
        console.log(`Extracted ${questions.length} questions`);
        console.log('Questions:', questions);
        
        if (questions.length > 0) {
            // Store in extension storage
            chrome.storage.local.get(['allQuestions'], (result) => {
                const allQuestions = result.allQuestions || [];
                // filter out duplicates by question text
                const existingTexts = new Set(allQuestions.map(q => q.question));
                const filtered = questions.filter(q => !existingTexts.has(q.question));
                const newQuestions = [...allQuestions, ...filtered];
                
                chrome.storage.local.set({ allQuestions: newQuestions }, () => {
                    console.log(`✅ Stored ${newQuestions.length} total questions (${filtered.length} new)`);
                    showNotification(filtered.length);
                    sendResponse({ 
                        success: true, 
                        count: filtered.length,
                        total: newQuestions.length,
                        markdown: formatAsMarkdown(filtered)
                    });
                });
            });
            
            return true; // Keep channel open for async response
        } else {
            console.log('❌ No questions found');
            sendResponse({ 
                success: false, 
                error: 'No questions found on this page. Make sure you clicked "Check Your Answer" and the question is fully visible.' 
            });
        }
    }
    
    if (request.action === 'getStoredQuestions') {
        chrome.storage.local.get(['allQuestions'], (result) => {
            const questions = result.allQuestions || [];
            sendResponse({ 
                questions: questions,
                markdown: questions.length > 0 ? formatAsMarkdown(questions) : ''
            });
        });
        return true;
    }
    
    if (request.action === 'clearQuestions') {
        chrome.storage.local.set({ allQuestions: [] }, () => {
            console.log('✅ Storage cleared');
            sendResponse({ success: true });
        });
        return true;
    }
});

// Auto-detect when "Check Your Answer" is clicked
const observer = new MutationObserver((mutations) => {
    // Check if new content was added (question revealed)
    for (let mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
            // Look for radiogroups being added
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) { // Element node
                    const radioGroups = node.querySelectorAll ? node.querySelectorAll('[role="radiogroup"]') : [];
                    if (radioGroups.length > 0) {
                        console.log('New question content detected!');
                        // Could auto-capture here, but better to let user control it
                    }
                }
            });
        }
    }
});

// Start observing
observer.observe(document.body, {
    childList: true,
    subtree: true
});

console.log('DP-700 Question Capturer: Ready! Click the extension icon to capture questions.');
