chrome.browserAction.onClicked.addListener((tab) =>
  chrome.tabs.create({ url: 'cgp.html' })
);
