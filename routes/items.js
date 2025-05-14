const express = require('express');
const router = express.Router();

// In-memory data store
let items = [];
let idCounter = 1;

// GET /items - Get all items
router.get('/', (req, res) => {
  res.json(items);
});

// GET /items/:id - Get item by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);

  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  res.json(item);
});

// POST /items - Create a new item
router.post('/', (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  const newItem = {
    id: idCounter++,
    name,
    description,
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT /items/:id - Update an item by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;

  const itemIndex = items.findIndex(i => i.id === id);
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  items[itemIndex] = { id, name, description };
  res.json(items[itemIndex]);
});

// DELETE /items/:id - Delete an item by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex(i => i.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  const deletedItem = items.splice(itemIndex, 1);
  res.json({ message: 'Item deleted', item: deletedItem[0] });
});

module.exports = router;
