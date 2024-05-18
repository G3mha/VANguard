import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

interface BrowserHijackingDetectionProps {
  setHasHijacking: Dispatch<SetStateAction<boolean>>;
  setCompleted: Dispatch<SetStateAction<{
    domainMonitoring: boolean;
    localStorageDetection: boolean;
    browserHijackingDetection: boolean;
    canvasFingerprintDetection: boolean;
    cookieManagement: boolean;
  }>>;
}

const BrowserHijackingDetection = ({ setHasHijacking, setCompleted }: BrowserHijackingDetectionProps) => {
  const [detected, setDetected] = useState(false);

  useEffect(() => {
    const hijackingPatterns = ["eval", "document.write", "innerHTML"];

    const checkHijacking = () => {
      const detected = hijackingPatterns.some(pattern =>
        document.documentElement.innerHTML.includes(pattern)
      );
      setDetected(detected);
      setHasHijacking(detected);
    };

    checkHijacking();

    // Signal completion
    setCompleted(prev => ({ ...prev, browserHijackingDetection: true }));
  }, [setHasHijacking, setCompleted]);

  return (
    <div>
      <p>Browser hijacking detected: {detected ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default BrowserHijackingDetection;