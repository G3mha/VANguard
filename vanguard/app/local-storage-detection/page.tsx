import dynamic from 'next/dynamic';
import React from 'react';

const LocalStorageContent = dynamic(() => import('../../components/LocalStorageContent'), {
  ssr: false,  // Disable server-side rendering for this component
});

export default function LocalStorage() {
  return (
    <LocalStorageContent />
  );
}
