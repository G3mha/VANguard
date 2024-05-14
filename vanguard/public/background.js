function monitorDomainRequests() {
  browser.webRequest.onBeforeRequest.addListener(
      details => {
          const url = new URL(details.url);
          browser.runtime.sendMessage({
              type: 'domainRequest',
              domain: url.hostname
          });
      },
      { urls: ["<all_urls>"] }
  );
}

monitorDomainRequests();
