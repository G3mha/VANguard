import dynamic from 'next/dynamic';
import React from 'react';

const CookieContent = dynamic(() => import('../../components/CookieContent'), {
  ssr: false,  // Disable server-side rendering for this component
});

export default function Cookie() {
  return (
    <CookieContent />
  );
}
