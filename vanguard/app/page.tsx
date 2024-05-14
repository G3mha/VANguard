// app/page.tsx
"use client";

import Head from 'next/head';
import React, { useState, useEffect } from "react";
import { calculateSafetyGrade } from "../scripts/calculateSafetyGrade";
import { useNonce } from './NonceProvider';
import { NonceProvider } from './NonceProvider';

function Home() {
  const nonce = useNonce();
  const [safetyGrade, setSafetyGrade] = useState<string>('');

  useEffect(() => {
    const grade = calculateSafetyGrade();
    setSafetyGrade(grade);
  }, []);

  const getColorForGrade = (grade: string) => {
    switch (grade) {
      case 'A':
        return 'text-green-500';
      case 'B':
        return 'text-yellow-500';
      case 'C':
        return 'text-orange-500';
      case 'D':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content={`
            default-src 'self';
            script-src 'self' 'nonce-${nonce}' 'wasm-unsafe-eval';
            style-src 'self' 'unsafe-inline';
            img-src 'self' data:;
            connect-src 'self';
            font-src 'self';
            object-src 'none';
          `}
        />
      </Head>
      <div className="p-4">
        <div className="flex items-center mb-4">
          <button onClick={reloadPage} className="mr-4 inline-flex items-center justify-center p-2 text-gray-500 hover:text-white bg-transparent hover:bg-blue-700 rounded-full transition-colors duration-150 ease-in-out" aria-label="Reload page">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
              <path fillRule="evenodd" d="M4.293 9.293a1 1 0 011.414 0L8 11.586V7a1 1 0 112 0v6a1 1 0 01-1 1H4a1 1 0 110-2h3.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M15.707 10.707a1 1 0 01-1.414 0L13 9.414V14a1 1 0 11-2 0V8a1 1 0 011-1h6a1 1 0 110 2h-3.586l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">VANguard Dashboard</h1>
        </div>
        <div className="mt-4 pl-14">
          <h2 className={`text-6xl font-bold ${getColorForGrade(safetyGrade)}`}>
            {safetyGrade || '...'}
          </h2>
          <p className="text-gray-600">Your current safety grade</p>
        </div>
        <ul className="list-none mt-4 space-y-2 pl-14">
          <li><a href="/dashboard" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go to Dashboard</a></li>
        </ul>
      </div>
      <script nonce={nonce ?? ''}>
        {`
          // Your inline script here
          console.log('Inline script running');
        `}
      </script>
    </>
  );
}

// Server component to wrap the Home component with the NonceProvider
export default function Page() {
  return (
    <NonceProvider>
      <Home />
    </NonceProvider>
  );
}
