import dynamic from 'next/dynamic';
import React from 'react';


const CanvasFingerprintContent = dynamic(() => import('../../components/CanvasFingerprintContent'), {
  ssr: false,  // Disable server-side rendering for this component
});

function CanvasFingerprint() {
  return (
    <CanvasFingerprintContent />
  );
}
export const runtime = 'nodejs' as const;
export default CanvasFingerprint;