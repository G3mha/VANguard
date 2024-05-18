import { useState, useEffect } from 'react';
import type { SetStateAction, Dispatch } from 'react';
import browser from 'webextension-polyfill';

interface DomainMonitoringProps {
  setDomainCount: Dispatch<SetStateAction<number>>;
  setCompleted: Dispatch<SetStateAction<{
    domainMonitoring: boolean;
    localStorageDetection: boolean;
    browserHijackingDetection: boolean;
    canvasFingerprintDetection: boolean;
    cookieManagement: boolean;
  }>>;
}

const DomainMonitoring = ({ setDomainCount, setCompleted }: DomainMonitoringProps) => {
  const [domains, setDomains] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleRequest = (details: any) => {
      const url = new URL(details.url);
      setDomains(prevDomains => {
        const updatedDomains = new Set(prevDomains);
        updatedDomains.add(url.hostname);
        setDomainCount(updatedDomains.size);
        return updatedDomains;
      });
    };

    browser.webRequest.onBeforeRequest.addListener(handleRequest, { urls: ["<all_urls>"] });

    // Signal completion immediately after setting up the listener
    setCompleted(prev => ({ ...prev, domainMonitoring: true }));

    return () => {
      browser.webRequest.onBeforeRequest.removeListener(handleRequest);
    };
  }, [setDomainCount, setCompleted]);

  return (
    <div>
      {domains.size === 0 ? (
        <p>Domain monitoring detected: No</p>
      ) : (
        <ul>
          {[...domains].map((domain, index) => (
            <li key={index}>{domain}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DomainMonitoring;
