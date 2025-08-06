// Backend Connection Test Script
// Run this with: node test-backend-connection.js

import axios from 'axios';

const BACKEND_URL = process.env.VITE_BACKEND_URL || 'https://web-production-69a9.up.railway';

console.log('🔧 Testing Backend Connection...');
console.log('📡 Backend URL:', BACKEND_URL);
console.log('🌍 Node Environment:', process.env.NODE_ENV);

async function testEndpoints() {
  const endpoints = [
    { name: 'Base API', url: BACKEND_URL },
    { name: 'Signup', url: `${BACKEND_URL}/signup` },
    { name: 'Signin', url: `${BACKEND_URL}/signin` }
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`\n🧪 Testing ${endpoint.name}: ${endpoint.url}`);
      
      if (endpoint.name === 'Base API') {
        // Test GET request for base API
        const response = await axios.get(endpoint.url, {
          timeout: 10000,
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'Brainly-Frontend-Test'
          }
        });
        console.log(`✅ ${endpoint.name}: Status ${response.status}`);
        console.log(`📄 Response:`, response.data);
      } else {
        // Test POST request with dummy data
        const response = await axios.post(endpoint.url, {
          username: 'test_user_' + Date.now(),
          password: 'test_password_123'
        }, {
          timeout: 10000,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'User-Agent': 'Brainly-Frontend-Test'
          }
        });
        console.log(`✅ ${endpoint.name}: Status ${response.status}`);
        console.log(`📄 Response:`, response.data);
      }
    } catch (error) {
      console.log(`❌ ${endpoint.name} failed:`);
      
      if (error.response) {
        console.log(`   Status: ${error.response.status}`);
        console.log(`   Status Text: ${error.response.statusText}`);
        console.log(`   Response Data:`, error.response.data);
        console.log(`   Headers:`, error.response.headers);
      } else if (error.request) {
        console.log(`   Request was made but no response received`);
        console.log(`   Request:`, error.request);
      } else {
        console.log(`   Error Message:`, error.message);
      }
      
      if (error.code) {
        console.log(`   Error Code: ${error.code}`);
      }
    }
  }
}

// Test CORS and basic connectivity
async function testCORS() {
  console.log('\n🌐 Testing CORS Configuration...');
  
  try {
    const response = await axios.options(BACKEND_URL, {
      timeout: 5000,
      headers: {
        'Origin': 'https://brainly-frontend.netlify.app',
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type'
      }
    });
    console.log('✅ CORS preflight successful');
    console.log('📄 CORS Headers:', response.headers);
  } catch (error) {
    console.log('❌ CORS preflight failed:', error.message);
  }
}

// Run the tests
async function runTests() {
  try {
    await testEndpoints();
    await testCORS();
    console.log('\n🏁 Backend connection test completed!');
  } catch (error) {
    console.error('💥 Test runner error:', error);
  }
}

runTests();
