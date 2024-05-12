// Example: Log each URL accessed
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    console.log("Loading: " + details.url);
  },
  { urls: ["<all_urls>"] }
);
