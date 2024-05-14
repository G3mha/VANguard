import dynamic from 'next/dynamic';
import React from 'react';

const BrowserHijackingContent = dynamic(() => import('../../components/BrowserHijackingContent'), {
  ssr: false,  // Disable server-side rendering for this component
});

export default function BrowserHijacking() {
  return (
    <BrowserHijackingContent />
  );
}
