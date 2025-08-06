// Debug component to verify environment variables in production
// Add this temporarily to your landing page to verify the fix

import React from 'react';
import { BACKEND_URL, APP_NAME, APP_VERSION, DEV_MODE } from '../Config';

export const DebugInfo: React.FC = () => {
  const envInfo = {
    'Backend URL': BACKEND_URL,
    'App Name': APP_NAME,
    'App Version': APP_VERSION,
    'Dev Mode': DEV_MODE,
    'Build Mode': import.meta.env.MODE,
    'Hostname': window.location.hostname,
    'Origin': window.location.origin,
    'Config': 'HARDCODED ✅',
  };

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs max-w-sm z-50">
      <h3 className="font-bold text-yellow-300 mb-2">🔧 Debug Info</h3>
      <div className="space-y-1">
        {Object.entries(envInfo).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="text-gray-300">{key}:</span>
            <span className="text-green-300 ml-2 break-all">
              {typeof value === 'string' ? value : String(value)}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 text-xs text-gray-400">
        ✅ = Environment variables loaded correctly<br/>
        ❌ = Missing environment variables in Netlify
      </div>
    </div>
  );
};

export default DebugInfo;
