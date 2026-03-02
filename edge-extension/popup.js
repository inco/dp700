// Popup script for the extension UI

const captureBtn = document.getElementById('captureBtn');
const downloadBtn = document.getElementById('downloadBtn');
const copyBtn = document.getElementById('copyBtn');
const clearBtn = document.getElementById('clearBtn');
const questionCount = document.getElementById('questionCount');
const message = document.getElementById('message');

let allQuestions = [];
let currentMarkdown = '';

// Show message beneath the buttons
function showMessage(text, type = 'info') {
    message.textContent = text;
    message.className = `message ${type}`;
    message.style.display = 'block';
    // ensure visible by scrolling container a bit
    message.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    if (type === 'error') {
        setTimeout(() => {
            message.style.display = 'none';
        }, 8000); // Longer for errors
    } else {
        setTimeout(() => {
            message.style.display = 'none';
        }, 5000);
    }
}

// Update UI state
function updateUI() {
    chrome.storage.local.get(['allQuestions'], (result) => {
        allQuestions = result.allQuestions || [];
        questionCount.textContent = allQuestions.length;
        
        const hasQuestions = allQuestions.length > 0;
        downloadBtn.disabled = !hasQuestions;
        copyBtn.disabled = !hasQuestions;
        clearBtn.disabled = !hasQuestions;
        
        if (hasQuestions) {
            currentMarkdown = formatAsMarkdown(allQuestions);
        }
    });
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
    
    return markdown;
}

// Capture question from current page
captureBtn.addEventListener('click', async () => {
    captureBtn.innerHTML = '<span class="spinner"></span> Capturing...';
    captureBtn.disabled = true;
    
    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        
        if (!tab.url.includes('learn.microsoft.com')) {
            showMessage('❌ Not on Microsoft Learn. Navigate to the DP-700 practice assessment.', 'error');
            captureBtn.innerHTML = '📸 Capture Current Question';
            captureBtn.disabled = false;
            return;
        }
        
        chrome.tabs.sendMessage(tab.id, { action: 'captureQuestion' }, (response) => {
            captureBtn.innerHTML = '📸 Capture Current Question';
            captureBtn.disabled = false;
            
            if (chrome.runtime.lastError) {
                console.error('Runtime error:', chrome.runtime.lastError);
                showMessage(`❌ Extension error. ${chrome.runtime.lastError.message}`, 'error');
                return;
            }
            
            if (!response) {
                console.error('No response object received from content script');
                showMessage('❌ No response. Refresh the page and try again.', 'error');
                return;
            }
            
            if (response && response.success) {
                showMessage(`✅ Captured ${response.count} question(s)! Total: ${response.total}`, 'success');
                updateUI();
            } else {
                const errorMsg = response?.error || '❌ Failed to capture. Check console (F12) for details.';
                console.error('Capture error:', errorMsg);
                showMessage(errorMsg, 'error');
                
                // Suggest debugging
                console.log('💡 DEBUG: Open browser console (F12) and refresh to see detailed logs');
            }
        });
    } catch (error) {
        captureBtn.innerHTML = '📸 Capture Current Question';
        captureBtn.disabled = false;
        console.error('Error:', error);
        showMessage('❌ Error: ' + error.message, 'error');
    }
});

// Download all questions
downloadBtn.addEventListener('click', () => {
    if (!currentMarkdown) {
        showMessage('❌ No questions to download', 'error');
        return;
    }
    
    const blob = new Blob([currentMarkdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
    
    chrome.downloads.download({
        url: url,
        filename: `dp700-questions-${timestamp}.md`,
        saveAs: true
    }, () => {
        URL.revokeObjectURL(url);
        showMessage(`✅ Downloaded ${allQuestions.length} questions!`, 'success');
    });
});

// Copy to clipboard
copyBtn.addEventListener('click', async () => {
    if (!currentMarkdown) {
        showMessage('❌ No questions to copy', 'error');
        return;
    }
    
    try {
        await navigator.clipboard.writeText(currentMarkdown);
        showMessage(`✅ Copied ${allQuestions.length} questions to clipboard!`, 'success');
        copyBtn.innerHTML = '✅ Copied!';
        setTimeout(() => {
            copyBtn.innerHTML = '📋 Copy to Clipboard';
        }, 2000);
    } catch (error) {
        showMessage('❌ Failed to copy to clipboard', 'error');
    }
});

// Clear all questions
clearBtn.addEventListener('click', () => {
    if (confirm(`Are you sure you want to delete all ${allQuestions.length} captured questions?`)) {
        chrome.storage.local.set({ allQuestions: [] }, () => {
            showMessage('✅ All questions cleared', 'success');
            updateUI();
        });
    }
});

// Initialize UI on load
updateUI();
