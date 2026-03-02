// DP-700 Automatic Question Scraper - Microsoft Learn
// Paste this in console (F12) and it will auto-capture questions

(function() {
    console.log('🔍 Automatic scraper starting...');
    
    // Wait for React/dynamic content to fully load
    function waitAndExtract() {
        setTimeout(() => {
            extractQuestions();
        }, 1000); // Wait 1 second for content
    }
    
    function extractQuestions() {
        const questions = [];
        
        // STRATEGY 1: Look for radiogroups (Microsoft Learn uses these for multiple choice)
        const radioGroups = document.querySelectorAll('[role="radiogroup"]');
        console.log(`Found ${radioGroups.length} radiogroups`);
        
        radioGroups.forEach((group, idx) => {
            // Find the question text (usually in a preceding element or parent)
            let questionElement = group.previousElementSibling;
            let questionText = '';
            
            // Walk backwards to find question text
            let current = group.parentElement;
            let attempts = 0;
            while (current && attempts < 10) {
                const text = current.innerText || current.textContent;
                if (text && text.includes('?') && text.length > 50 && text.length < 2000) {
                    questionText = text;
                    break;
                }
                current = current.previousElementSibling || current.parentElement;
                attempts++;
            }
            
            // If still no question, search entire visible area
            if (!questionText || questionText.length < 50) {
                const allText = document.body.innerText;
                const lines = allText.split('\n');
                for (let line of lines) {
                    if (line.includes('?') && line.length > 50 && line.length < 2000) {
                        if (!line.includes('Skip to main') && !line.includes('Theme')) {
                            questionText = line;
                            break;
                        }
                    }
                }
            }
            
            // Extract options from the radiogroup
            const options = [];
            const labels = group.querySelectorAll('label, [role="radio"]');
            
            labels.forEach(label => {
                const text = (label.innerText || label.textContent || '').trim();
                if (text && text.length > 2 && text.length < 500) {
                    // Clean up the text
                    const cleaned = text.replace(/^[•\-\*]\s*/, '').trim();
                    if (cleaned && !cleaned.match(/^[A-Z]$/) && cleaned.length > 1) {
                        options.push(cleaned);
                    }
                }
            });
            
            // Also try input labels
            const inputs = group.querySelectorAll('input[type="radio"]');
            inputs.forEach(input => {
                const id = input.id;
                if (id) {
                    const label = document.querySelector(`label[for="${id}"]`);
                    if (label) {
                        const text = label.innerText.trim();
                        if (text && text.length > 2 && !options.includes(text)) {
                            options.push(text);
                        }
                    }
                }
            });
            
            if (questionText && options.length >= 2) {
                questions.push({
                    question: questionText.trim(),
                    options: options.slice(0, 6) // Max 6 options
                });
            }
        });
        
        // STRATEGY 2: If no radiogroups found, look for common patterns
        if (questions.length === 0) {
            console.log('No radiogroups found, trying text pattern matching...');
            
            // Get all visible text
            const bodyText = document.body.innerText;
            const paragraphs = bodyText.split('\n\n');
            
            let currentQuestion = null;
            const optionPatterns = [/^[A-D][\.\)]\s+(.+)/, /^[-•]\s*(.+)/];
            
            paragraphs.forEach(para => {
                // Check if this is a question
                if (para.includes('?') && para.length > 50 && para.length < 2000) {
                    if (!para.includes('Microsoft AI Tour') && !para.includes('Skip to main')) {
                        if (currentQuestion) {
                            questions.push(currentQuestion);
                        }
                        currentQuestion = {
                            question: para.trim(),
                            options: []
                        };
                    }
                }
                
                // Check if this is an option
                if (currentQuestion) {
                    for (let pattern of optionPatterns) {
                        const match = para.match(pattern);
                        if (match && match[1] && match[1].length > 2 && match[1].length < 500) {
                            currentQuestion.options.push(match[1].trim());
                        }
                    }
                }
            });
            
            if (currentQuestion && currentQuestion.options.length >= 2) {
                questions.push(currentQuestion);
            }
        }
        
        // STRATEGY 3: Look for specific Microsoft Learn class patterns
        if (questions.length === 0) {
            console.log('Trying Microsoft Learn specific selectors...');
            
            const assessmentContent = document.querySelector('[class*="assessment"], [class*="question"], [data-test-id*="question"]');
            if (assessmentContent) {
                const text = assessmentContent.innerText;
                const lines = text.split('\n').filter(l => l.trim().length > 0);
                
                let q = null;
                lines.forEach(line => {
                    if (line.includes('?') && line.length > 50) {
                        if (q) questions.push(q);
                        q = { question: line, options: [] };
                    } else if (q && line.length > 2 && line.length < 500) {
                        q.options.push(line);
                    }
                });
                if (q && q.options.length >= 2) questions.push(q);
            }
        }
        
        console.log(`✅ Extracted ${questions.length} questions`);
        
        if (questions.length === 0) {
            console.log('⚠️ No questions found automatically.');
            console.log('💡 Make sure you:');
            console.log('   1. Are on a question page (not just the start page)');
            console.log('   2. Have clicked "Check Your Answer" to reveal the question');
            console.log('   3. The question is visible on screen');
            console.log('\n📋 Alternative: Use browser-scraper-simple.js for manual input');
            return;
        }
        
        // Format as markdown
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
            
            markdown += `\n**Correct Answer:** [TODO - Check exam results]\n\n`;
            markdown += `**Explanation:** [TODO - Add explanation from exam feedback]\n\n`;
            markdown += `**Source:** Microsoft Practice Assessment\n\n`;
            markdown += '---\n\n';
        });
        
        // Auto-download file
        const blob = new Blob([markdown], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `dp700-questions-${Date.now()}.md`;
        a.click();
        URL.revokeObjectURL(url);
        
        // Small non-intrusive notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 350px;
            z-index: 999999;
            background: #0078d4;
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.4);
            font-family: -apple-system, sans-serif;
            padding: 15px 20px;
            animation: slideIn 0.3s ease-out;
        `;
        
        notification.innerHTML = `
            <style>
                @keyframes slideIn {
                    from { transform: translateX(400px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            </style>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <div style="font-weight: bold; font-size: 16px;">✅ ${questions.length} Question${questions.length > 1 ? 's' : ''} Captured!</div>
                    <div style="font-size: 13px; margin-top: 5px; opacity: 0.9;">File downloaded to Downloads folder</div>
                </div>
                <button onclick="this.parentElement.parentElement.remove();" style="background: transparent; border: none; color: white; font-size: 24px; cursor: pointer; padding: 0; margin-left: 10px;">×</button>
            </div>
            <button onclick="
                navigator.clipboard.writeText(\`${markdown.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`).then(() => {
                    this.innerText = '✅ Copied!';
                    setTimeout(() => this.innerText = '📋 Copy to Clipboard', 2000);
                }).catch(() => {
                    const textarea = document.createElement('textarea');
                    textarea.value = \`${markdown.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textarea);
                    this.innerText = '✅ Copied!';
                    setTimeout(() => this.innerText = '📋 Copy to Clipboard', 2000);
                });
            " style="width: 100%; padding: 10px; background: white; color: #0078d4; border: none; border-radius: 4px; font-size: 13px; cursor: pointer; margin-top: 10px; font-weight: bold;">
                📋 Copy to Clipboard
            </button>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-close after 30 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideIn 0.3s ease-out reverse';
                setTimeout(() => notification.remove(), 300);
            }
        }, 30000);
        
        console.log('='.repeat(70));
        console.log('CAPTURED MARKDOWN:');
        console.log('='.repeat(70));
        console.log(markdown);
        console.log('='.repeat(70));
        console.log('✅ File downloaded to Downloads folder');
        console.log('📋 Click "Copy to Clipboard" in notification (bottom-right)');
        console.log('📝 Or copy from console output above');
    }
    
    // Run extraction after delay
    waitAndExtract();
    
    console.log('⏳ Waiting 1 second for page content to load...');
})();
