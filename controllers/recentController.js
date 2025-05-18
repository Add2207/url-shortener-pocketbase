import pb from '../services/pocketbaseClient.js';

export async function getRecentUrls(req, res) {
  try {
    const urls = await pb.collection('urls').getList(1, 5, {
      sort: '-createdAt'
    });

    const result = {};
    urls.items.forEach(item => {
      result[item.shortCode] = item.originalUrl;
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recent URLs' });
  }
}
