import './config.js'

import express from 'express';
import shortenRoutes from './routes/shortenRoutes.js';
import recentRoutes from './routes/recentRoutes.js';
import batchRoutes from './routes/batchRoutes.js';
import statsRoutes from './routes/statsRoutes.js';

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('URL Shortener Backend is running!');
});


app.use('/shorten', shortenRoutes);
app.use('/urls', recentRoutes);
app.use('/stats', statsRoutes);
app.use('/urls', batchRoutes);

console.log('POCKETBASE_URL in app.js:', process.env.POCKETBASE_URL);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
