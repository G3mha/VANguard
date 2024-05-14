// This example assumes you have appropriate permissions in your manifest.json

// Listen for each request made
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = new URL(details.url);
    const pageHost = new URL(details.originUrl || details.documentUrl).hostname;
    
    // Check if the request URL's domain is different from the page's domain
    if (url.hostname !== pageHost) {
      console.log(`Third-party request to ${url.hostname} from ${pageHost}`);
      // Here you could further send this information to a content script or record it
    }
  },
  { urls: ["<all_urls>"] }, // You can narrow this down for performance
  ["requestingParty"]
);

