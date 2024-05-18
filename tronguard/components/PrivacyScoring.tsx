import { useState, useEffect } from 'react';

const PrivacyScoring = ({ domainCount, hasLocalStorage, hasHijacking, hasFingerprinting, cookieCount }) => {
  const [score, setScore] = useState(10);

  useEffect(() => {
    const calculateScore = () => {
      let currentScore = 10;
      
      // Decrease score based on detection results
      if (domainCount > 0) currentScore -= 3; // Deduct points for multiple domains
      if (hasLocalStorage) currentScore -= 2;
      if (hasHijacking) currentScore -= 2;
      if (hasFingerprinting) currentScore -= 2;
      if (cookieCount > 0) currentScore -= 1; // Deduct points for any cookies detected
      
      setScore(currentScore < 0 ? 0 : currentScore); // Ensure score does not go below 0
    };

    calculateScore();
  }, [cookieCount, hasLocalStorage, hasHijacking, hasFingerprinting, domainCount]);

  return (
    <div>
      <h2>Privacy Scoring</h2>
      <p>Your privacy score: {score}</p>
    </div>
  );
};

export default PrivacyScoring;
