import { useState, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import browser from 'webextension-polyfill';

interface CookieManagementProps {
  setCookieCount: Dispatch<SetStateAction<number>>;
  setCompleted: Dispatch<SetStateAction<{
    domainMonitoring: boolean;
    localStorageDetection: boolean;
    browserHijackingDetection: boolean;
    canvasFingerprintDetection: boolean;
    cookieManagement: boolean;
  }>>;
}

const CookieManagement = ({ setCookieCount, setCompleted }: CookieManagementProps) => {
  const [firstPartyCookies, setFirstPartyCookies] = useState(0);
  const [thirdPartyCookies, setThirdPartyCookies] = useState(0);

  useEffect(() => {
    const getCookies = async () => {
      const allCookies = await browser.cookies.getAll({});
      const firstParty = allCookies.filter(cookie => {
        // Simplified logic for detecting first-party cookies
        return cookie.domain.includes(window.location.hostname);
      }).length;
      const thirdParty = allCookies.length - firstParty;

      setFirstPartyCookies(firstParty);
      setThirdPartyCookies(thirdParty);
      setCookieCount(allCookies.length);
      setCompleted(prev => ({ ...prev, cookieManagement: true }));
    };

    getCookies();
  }, [setCookieCount, setCompleted]);

  return (
    <div>
      <p>First-party cookies: {firstPartyCookies}</p>
      <p>Third-party cookies: {thirdPartyCookies}</p>
      <p>Total cookies detected: {firstPartyCookies + thirdPartyCookies}</p>
    </div>
  );
};

export default CookieManagement;
