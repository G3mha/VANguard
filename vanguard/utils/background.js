// Example: Log each URL accessed
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    console.log("Loading: " + details.url);
  },
  { urls: ["<all_urls>"] }
);

export function detectCanvasFingerprint(onDetected) {
  const originalGetContext = HTMLCanvasElement.prototype.getContext;

  HTMLCanvasElement.prototype.getContext = function(type, contextAttributes) {
    const context = originalGetContext.call(this, type, contextAttributes);

    if (type === "2d") {
      const originalGetImageData = context.getImageData;
      context.getImageData = function(x, y, w, h) {
        onDetected("Canvas fingerprint attempt detected via getImageData.");
        return originalGetImageData.apply(this, arguments);
      };

      // Additional hooks here if needed
    }

    return context;
  };
}
