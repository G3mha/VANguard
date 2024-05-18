import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

interface LocalStorageDetectionProps {
  setHasLocalStorage: Dispatch<SetStateAction<boolean>>;
  setCompleted: Dispatch<SetStateAction<{
    domainMonitoring: boolean;
    localStorageDetection: boolean;
    browserHijackingDetection: boolean;
    canvasFingerprintDetection: boolean;
    cookieManagement: boolean;
  }>>;
}

const LocalStorageDetection = ({ setHasLocalStorage, setCompleted }: LocalStorageDetectionProps) => {
  const [detected, setDetected] = useState(false);

  useEffect(() => {
    const detectLocalStorage = () => {
      const hasLocalStorage = localStorage.length > 0;
      setDetected(hasLocalStorage);
      setHasLocalStorage(hasLocalStorage);
    };

    detectLocalStorage();

    // Signal completion
    setCompleted(prev => ({ ...prev, localStorageDetection: true }));
  }, [setHasLocalStorage, setCompleted]);

  return (
    <div>
      <p>Local storage detected: {detected ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default LocalStorageDetection;
