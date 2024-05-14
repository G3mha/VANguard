import dynamic from 'next/dynamic';
import React from 'react';


const BrowserHijackingContent = dynamic(() => import('../../components/BrowserHijackingContent'), {
  ssr: false,  // Disable server-side rendering for this component
});

function BrowserHijacking() {
  return (
    <BrowserHijackingContent />
  );
}
export const runtime = 'nodejs' as const;

export default BrowserHijacking;