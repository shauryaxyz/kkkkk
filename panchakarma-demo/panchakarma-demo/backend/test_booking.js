// Simple test script to exercise POST /api/bookings
// Run: cd backend && npm install && npm run test-booking

const axios = require('axios');

(async function runTest() {
  try {
    const res = await axios.post('http://localhost:4000/api/bookings', {
      clinicId: 'test-clinic',
      clinicName: 'Test Clinic',
      patientName: 'Automated Test',
      patientPhone: '9999999999',
      startAt: new Date().toISOString()
    });

    console.log('Test booking response:', res.data);
  } catch (err) {
    console.error('Test booking failed:', err.toString());
  }
})();
