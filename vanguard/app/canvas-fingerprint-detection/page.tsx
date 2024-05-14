import dynamic from 'next/dynamic';
import React from 'react';

const CanvasFingerprintContent = dynamic(() => import('../../components/CanvasFingerprintContent'), {
  ssr: false,  // Disable server-side rendering for this component
});

export default function CanvasFingerprint() {
  return (
    <CanvasFingerprintContent />
  );
}
