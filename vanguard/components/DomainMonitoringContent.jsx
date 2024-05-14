"use client";
import React, { useEffect, useState } from 'react';

export default function DomainMonitoring() {
  const [baseUrl, setBaseUrl] = useState('');

  useEffect(() => {
    if (typeof window !== "undefined" && typeof browser !== "undefined") {
      // Only runs this in the client-side environment where `browser` is defined
      setBaseUrl(browser.runtime.getURL('/'));
    }
  }, []);
  const handleMessage = (message, sender, sendResponse) => {
    if (message.type === 'domainRequest') {
      setDomains(prevDomains => [...prevDomains, message.domain]);
    }
  };

  const [domains, setDomains] = useState([]);

  useEffect(() => {
    browser.runtime.onMessage.addListener(handleMessage);

    // Cleanup the listener when the component unmounts
    return () => {
      browser.runtime.onMessage.removeListener(handleMessage);
    };
  }, []);
  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <a href={`${baseUrl}`} className="mr-4 inline-flex items-center justify-center p-2 text-gray-500 hover:text-white bg-transparent hover:bg-blue-700 rounded-full transition-colors duration-150 ease-in-out" aria-label="Go back">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </a>
        <h1 className="text-xl font-bold">Domain Monitoring (3rd-party connections)</h1>
      </div>
      {/* <ul className="list-none space-y-2 pl-14">
        {domains.map((domain, index) => (
          <li key={index}>{domain}</li>
        ))}
      </ul> */}
    </div>
  );
}
