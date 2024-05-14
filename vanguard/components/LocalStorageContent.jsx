"use client";
import React, { useEffect, useState } from 'react';

export default function LocalStorage() {
  const [baseUrl, setBaseUrl] = useState('');

  useEffect(() => {
    if (typeof window !== "undefined" && typeof browser !== "undefined") {
      // Only runs this in the client-side environment where `browser` is defined
      setBaseUrl(browser.runtime.getURL('/'));
    }
  }, []);
  // Specify the type of the state
  const [localStorageItems, setLocalStorageItems] = useState([]);

  const loadLocalStorageItems = () => {
    let items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) ?? '';
      const value = localStorage.getItem(key) ?? '';
      items.push({ key, value });
    }
    setLocalStorageItems(items);
  };

  useEffect(() => {
    loadLocalStorageItems();
    // Set up a listener to update local storage items when local storage changes
    window.addEventListener('storage', loadLocalStorageItems);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('storage', loadLocalStorageItems);
    };
  }, []);

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <a href={`${baseUrl}dashboard.html`} className="mr-4 inline-flex items-center justify-center p-2 text-gray-500 hover:text-white bg-transparent hover:bg-blue-700 rounded-full transition-colors duration-150 ease-in-out" aria-label="Go back">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </a>
        <h1 className="text-xl font-bold">Local Storage Detection</h1>
      </div>
      <div className='list-none mt-4 space-y-2 pl-14'>
        {localStorageItems.length > 0 ? (
          <ul>
            {localStorageItems.map((item, index) => (
              <li key={index} className="bg-white text-black shadow overflow-hidden rounded-md px-6 py-4">
                <div className="whitespace-normal break-words">
                  <strong>{item.key}</strong>: {item.value}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No local storage items detected.</p>
        )}
      </div>
    </div>
  );
}
