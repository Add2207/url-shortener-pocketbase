import pb from '../services/pocketbaseClient.js';
import generateShortCode from '../utils/generateShortCode.js';

export async function batchShorten(req, res) {
  const { urls } = req.body;

  if (!Array.isArray(urls)) {
    return res.status(400).json({ error: 'URLs must be an array' });
  }

  try {
    const now = new Date().toISOString();
    const results = [];

    for (const url of urls) {
      const record = await pb.collection('urls').create({
        originalUrl: url,
        shortCode: generateShortCode(),
        createdAt: now,
        expiration: null
      });
      results.push({
        shortCode: record.shortCode,
        url: record.originalUrl
      });
    }

    res.status(201).json(results);
  } catch (error) {
    console.error('Batch shortening error:', error);
    res.status(500).json({ error: 'Batch shortening failed', details: error.message });
  }
}

