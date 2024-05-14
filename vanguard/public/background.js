function monitorDomainRequests() {
    browser.webRequest.onBeforeRequest.addListener(async (details) => {
        try {
            const url = new URL(details.url);
            console.log("Preparing to send message for URL:", details.url);
            
            // Await the sendMessage promise to resolve or reject
            await browser.runtime.sendMessage({
                type: 'domainRequest',
                domain: url.hostname
            });
            
            console.log("Message sent successfully");
        } catch (error) {
            // Catch errors from the sendMessage operation
            console.error("Error sending message:", error);
        }
    }, { urls: ["<all_urls>"] });
}
