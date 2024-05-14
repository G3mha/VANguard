"use client";
import React, { useState, useEffect } from 'react';
import { detectCanvasFingerprint } from './canvas-fingerprint-detection';
import browser from 'webextension-polyfill';

export default function CanvasFingerprintDetection() {
  const [detections, setDetections] = useState<string[]>([]);

  useEffect(() => {
    function handleDetection(message: string) {
      setDetections(prevDetections => [...prevDetections, message]);
    }

    detectCanvasFingerprint(handleDetection);
  }, []);

  const baseUrl = typeof browser !== "undefined" ? browser.runtime.getURL('/') : '';
  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <a href={`${baseUrl}dashboard.html`} className="mr-4 inline-flex items-center justify-center p-2 text-gray-500 hover:text-white bg-transparent hover:bg-blue-700 rounded-full transition-colors duration-150 ease-in-out" aria-label="Go back">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </a>
        <h1 className="text-xl font-bold">Canvas Fingerprint Detection</h1>
      </div>
      <div className='list-none mt-4 space-y-2 pl-14'>
        {detections.length > 0 ? (
          <ul>
            {detections.map((detection, index) => (
              <li key={index}>{detection}</li>
            ))}
          </ul>
        ) : (
          <p>No fingerprinting attempts detected.</p>
        )}
      </div>
    </div>
  );
}
