import dynamic from 'next/dynamic';
import React from 'react';


const LocalStorageContent = dynamic(() => import('../../components/LocalStorageContent'), {
  ssr: false,  // Disable server-side rendering for this component
});

function LocalStorage() {
  return (
    <LocalStorageContent />
  );
}
export const runtime = 'nodejs' as const;
export default LocalStorage;