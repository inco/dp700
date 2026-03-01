// DP-700 Exam Question Scraper
// Paste this into your browser's Developer Console (F12) to extract questions

(function() {
    // Extract all questions from the current page
    const questions = [];
    
    // Try multiple selectors (different exam platforms use different HTML)
    const questionSelectors = [
        '[class*="question"]',
        '[class*="Question"]',
        '[role="region"]',
        'article',
        '.question-container',
        '.exam-question'
    ];
    
    const optionSelectors = [
        'input[type="radio"]',
        '[class*="option"]',
        '[class*="answer"]',
        'label'
    ];
    
    // Get all potential question containers
    let questionElements = [];
    for (let selector of questionSelectors) {
        questionElements = document.querySelectorAll(selector);
        if (questionElements.length > 0) break;
    }
    
    console.log(`Found ${questionElements.length} potential question elements`);
    
    // Extract question text and options
    questionElements.forEach((elem, index) => {
        const text = elem.innerText || elem.textContent;
        if (text && text.length > 20) { // Filter out tiny elements
            questions.push({
                number: index + 1,
                text: text,
                html: elem.outerHTML
            });
        }
    });
    
    // Format for Markdown
    let markdown = '# EXTRACTED QUESTIONS - AUTO FORMATTED\n\n';
    markdown += `Extracted: ${new Date().toLocaleString()}\nTotal items found: ${questions.length}\n\n`;
    markdown += '---\n\n';
    
    questions.forEach((q, i) => {
        markdown += `## QUESTION ${i + 1}\n`;
        markdown += `Raw text:\n${q.text}\n\n`;
        markdown += '**TODO: Manually categorize this question**\n\n';
        markdown += '---\n\n';
    });
    
    // Display results - easier than clipboard API
    console.log('='.repeat(70));
    console.log('EXTRACTED QUESTIONS - READY TO COPY');
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
    
    // Also create a textarea for easy copy
    const output = document.createElement('div');
    output.style.cssText = 'position:fixed;top:10px;left:10px;right:10px;bottom:10px;z-index:99999;background:white;border:3px solid blue;padding:20px;overflow:auto;';
    output.innerHTML = `
        <h2>✅ ${questions.length} Questions Extracted!</h2>
        <p><strong>File downloaded:</strong> Check your Downloads folder for dp700-questions-*.md</p>
        <p><strong>OR copy from this box:</strong></p>
        <button onclick="this.nextElementSibling.select();document.execCommand('copy');alert('Copied!');" style="padding:10px;font-size:16px;margin-bottom:10px;">📋 Click to Copy All</button>
        <textarea id="extracted-questions" style="width:100%;height:400px;font-family:monospace;font-size:12px;">${markdown}</textarea>
        <button onclick="this.parentElement.remove();" style="padding:10px;font-size:16px;margin-top:10px;background:red;color:white;">Close</button>
    `;
    document.body.appendChild(output);
    
    // Log to console too
    console.log(`✅ Success! ${questions.length} questions extracted`);
    console.log('Option 1: File downloaded to Downloads folder');
    console.log('Option 2: Copy from blue box on page');
    console.log('Option 3: Copy from console log above');
})();
