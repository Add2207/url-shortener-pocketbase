import pb from '../services/pocketbaseClient.js';

export async function getActiveStats(req, res) {
  try {
    const now = new Date().toISOString();
    const result = await pb.collection('urls').getFullList({
      filter: `expiration > "${now}"`
    });

    const dateMap = {};

    result.forEach(entry => {
      const date = new Date(entry.createdAt).toDateString();
      dateMap[date] = (dateMap[date] || 0) + 1;
    });

    const stats = Object.entries(dateMap).map(
      ([date, count]) => `${count} made on ${date}`
    );

    res.json({ total: result.length, stats });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
}
