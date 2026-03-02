// Background service worker for the extension

// Listen for extension installation
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        console.log('DP-700 Question Capturer installed!');
        
        // Initialize storage
        chrome.storage.local.set({ allQuestions: [] });
        
        // Open welcome page
        chrome.tabs.create({
            url: chrome.runtime.getURL('welcome.html')
        });
    } else if (details.reason === 'update') {
        console.log('DP-700 Question Capturer updated!');
    }
});

// Update badge with question count
function updateBadge() {
    chrome.storage.local.get(['allQuestions'], (result) => {
        const count = (result.allQuestions || []).length;
        
        if (count > 0) {
            chrome.action.setBadgeText({ text: count.toString() });
            chrome.action.setBadgeBackgroundColor({ color: '#0078d4' });
        } else {
            chrome.action.setBadgeText({ text: '' });
        }
    });
}

// Listen for storage changes
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'local' && changes.allQuestions) {
        updateBadge();
    }
});

// Update badge on startup
updateBadge();

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'updateBadge') {
        updateBadge();
    }
});

console.log('DP-700 Question Capturer: Background service worker ready');
