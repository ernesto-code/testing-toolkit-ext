chrome.action.onClicked.addListener((tab) => {

    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['scripts/content.js']
    });
    chrome.scripting.insertCSS({
        files: ['styles/style.css'],
        target: { tabId: tab.id }
      });
  });
