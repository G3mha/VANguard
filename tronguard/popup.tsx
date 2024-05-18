import React, { useState, useEffect } from 'react';
import DomainMonitoring from './components/DomainMonitoring';
import CookieManagement from './components/CookieManagement';
import LocalStorageDetection from './components/LocalStorageDetection';
import BrowserHijackingDetection from './components/BrowserHijackingDetection';
import CanvasFingerprintDetection from './components/CanvasFingerprintDetection';
import PrivacyScoring from './components/PrivacyScoring';
import ToggleableSection from './components/ToggleableSection';


const Popup = () => {
  const [domainCount, setDomainCount] = useState(0);
  const [hasLocalStorage, setHasLocalStorage] = useState(false);
  const [hasHijacking, setHasHijacking] = useState(false);
  const [hasFingerprinting, setHasFingerprinting] = useState(false);
  const [cookieCount, setCookieCount] = useState(0);
  const [completed, setCompleted] = useState({
    domainMonitoring: false,
    localStorageDetection: false,
    browserHijackingDetection: false,
    canvasFingerprintDetection: false,
    cookieManagement: false,
  });

  const checkCompletion = () => {
    return Object.values(completed).every(value => value === true);
  };

  useEffect(() => {
    if (checkCompletion()) {
      console.log('All detections are complete.');
    }
  }, [completed]);

  return (
    <div>
      {checkCompletion() && (
        <PrivacyScoring
          domainCount={domainCount}
          hasLocalStorage={hasLocalStorage}
          hasHijacking={hasHijacking}
          hasFingerprinting={hasFingerprinting}
          cookieCount={cookieCount}
        />
      )}
      {!checkCompletion() && <p>Loading...</p>}
      <ToggleableSection title="Domain Monitoring">
        <DomainMonitoring setDomainCount={setDomainCount} setCompleted={setCompleted} />
      </ToggleableSection>
      <ToggleableSection title="Local Storage Detection">
        <LocalStorageDetection setHasLocalStorage={setHasLocalStorage} setCompleted={setCompleted} />
      </ToggleableSection>
      <ToggleableSection title="Browser Hijacking Detection">
        <BrowserHijackingDetection setHasHijacking={setHasHijacking} setCompleted={setCompleted} />
      </ToggleableSection>
      <ToggleableSection title="Canvas Fingerprint Detection">
        <CanvasFingerprintDetection setHasFingerprinting={setHasFingerprinting} setCompleted={setCompleted} />
      </ToggleableSection>
      <ToggleableSection title="Cookie Management">
        <CookieManagement setCookieCount={setCookieCount} setCompleted={setCompleted} />
      </ToggleableSection>
    </div>
  );
};

export default Popup;
