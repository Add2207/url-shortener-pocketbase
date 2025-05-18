import pb from './services/pocketbaseClient.js';

async function addTestData() {
  try {
    // Clear previous entries if needed (optional)
    // const allRecords = await pb.collection('urls').getFullList();
    // for (const record of allRecords) {
    //   await pb.collection('urls').delete(record.id);
    // }

    // Create some test URLs with various expiration dates
    const testUrls = [
      {
        originalUrl: 'https://google.com',
        shortCode: 'abc123',
        createdAt: new Date('2025-05-17T10:00:00Z').toISOString(),
        expiration: new Date('2025-12-31T23:59:59Z').toISOString(), // active (future)
      },
      {
        originalUrl: 'https://example.com',
        shortCode: 'def456',
        createdAt: new Date('2025-05-18T12:00:00Z').toISOString(),
        expiration: new Date('2025-06-30T23:59:59Z').toISOString(), // active (future)
      },
      {
        originalUrl: 'https://expired.com',
        shortCode: 'xyz789',
        createdAt: new Date('2024-12-01T08:00:00Z').toISOString(),
        expiration: new Date('2025-01-01T00:00:00Z').toISOString(), // expired (past)
      },
      {
        originalUrl: 'https://noexpiry.com',
        shortCode: 'noexp1',
        createdAt: new Date('2025-05-18T14:00:00Z').toISOString(),
        expiration: null, // no expiration
      },
    ];

    for (const data of testUrls) {
      const record = await pb.collection('urls').create(data);
      console.log('Created:', record);
    }

    console.log('Test data added successfully.');
  } catch (error) {
    console.error('Error adding test data:', error);
  }
}

addTestData();
