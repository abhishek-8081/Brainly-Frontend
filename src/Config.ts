// Backend URL configuration - HARDCODED for immediate deployment
// This ensures the app works without external environment variable configuration
const PRODUCTION_BACKEND_URL = "https://web-production-69a9.up.railway.app";
const LOCAL_BACKEND_URL = "http://localhost:3000";

// Use production URL by default, only use local in development mode
const isLocalDev = import.meta.env.MODE === 'development' && window.location.hostname === 'localhost';
export const BACKEND_URL = isLocalDev ? LOCAL_BACKEND_URL : PRODUCTION_BACKEND_URL;

// App configuration - HARDCODED
export const APP_NAME = "Brainely";
export const APP_VERSION = "1.0.0";
export const DEV_MODE = import.meta.env.MODE === 'development';

// Debug logging for production troubleshooting
console.log('🔧 Environment Configuration:');
console.log('📡 Backend URL:', BACKEND_URL);
console.log('🏷️ App Name:', APP_NAME);
console.log('🔢 App Version:', APP_VERSION);
console.log('🛠️ Dev Mode:', DEV_MODE);
console.log('🌍 Environment:', import.meta.env.MODE);
console.log('🔗 All Environment Variables:', {
  VITE_BACKEND_URL: import.meta.env.VITE_BACKEND_URL,
  VITE_APP_NAME: import.meta.env.VITE_APP_NAME,
  VITE_APP_VERSION: import.meta.env.VITE_APP_VERSION,
  VITE_DEV_MODE: import.meta.env.VITE_DEV_MODE,
  MODE: import.meta.env.MODE
});

// Validate backend URL
if (!BACKEND_URL.startsWith('http')) {
  console.error('❌ Invalid Backend URL:', BACKEND_URL);
} else {
  console.log('✅ Backend URL is valid');
}
