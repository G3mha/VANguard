import React, { useState, useEffect } from 'react';
import DomainMonitoring from './DomainMonitoring';
import LocalStorageDetection from './LocalStorageDetection';
import BrowserHijackingDetection from './BrowserHijackingDetection';
import CanvasFingerprintDetection from './CanvasFingerprintDetection';
import CookieManagement from './CookieManagement';
import PrivacyScoring from './PrivacyScoring';

const ParentComponent = () => {
  const [domainCount, setDomainCount] = useState(0);
  const [hasLocalStorage, setHasLocalStorage] = useState(false);
  const [hasHijacking, setHasHijacking] = useState(false);
  const [hasFingerprinting, setHasFingerprinting] = useState(false);
  const [cookieCount, setCookieCount] = useState(0);

  return (
    <div>
      <DomainMonitoring setDomainCount={setDomainCount} />
      <LocalStorageDetection setHasLocalStorage={setHasLocalStorage} />
      <BrowserHijackingDetection setHasHijacking={setHasHijacking} />
      <CanvasFingerprintDetection setHasFingerprinting={setHasFingerprinting} />
      <CookieManagement setCookieCount={setCookieCount} />
      <PrivacyScoring
        domainCount={domainCount}
        hasLocalStorage={hasLocalStorage}
        hasHijacking={hasHijacking}
        hasFingerprinting={hasFingerprinting}
        cookieCount={cookieCount}
      />
    </div>
  );
};

export default ParentComponent;
