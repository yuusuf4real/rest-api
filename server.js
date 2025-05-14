const express = require('express');
const app = express();
const itemsRouter = require('./routes/items');

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Items routes
app.use('/items', itemsRouter);

// 404 error handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// 500 error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Server listen
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
