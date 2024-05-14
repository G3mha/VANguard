import dynamic from 'next/dynamic';
import React from 'react';


const CookieContent = dynamic(() => import('../../components/CookieContent'), {
  ssr: false,  // Disable server-side rendering for this component
});

function Cookie() {
  return (
    <CookieContent />
  );
}
export const runtime = 'nodejs' as const;
export default Cookie;