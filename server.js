const express = require('express');
const app = express();
const PORT = 3000;

const itemsRouter = require('./routes/items');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/items', itemsRouter);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
