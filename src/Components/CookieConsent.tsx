// src/components/CookieConsent.tsx
import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);
  
  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };
  
  if (!showConsent) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-lg">Cookie Notice</h3>
            <p className="text-sm">
              We use cookies and similar technologies to support this website's essential functions, as well as for analytics, personalization, and marketing purposes.
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleAccept}
              className="bg-[#D8A627] hover:bg-opacity-90 px-4 py-2 rounded text-white font-semibold transition duration-300"
            >
              Accept All
            </button>
            <button
              onClick={() => setShowConsent(false)}
              className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-white font-semibold transition duration-300"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;