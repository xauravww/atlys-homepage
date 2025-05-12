const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());

const cards = require('./data/cards.json');

app.get('/api/cards', (req, res) => {
  res.json(cards);
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});