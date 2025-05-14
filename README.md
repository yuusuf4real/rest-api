# Simple REST API with Express.js

## ✅ Features

- Basic CRUD operations (Create, Read, Update, Delete)
- In-memory item storage (no DB required)
- Express middleware and error handling
- Validation for request data
- RESTful route structure

## 🚀 Setup Instructions

1. Unzip the project folder
2. Open terminal and run:

```bash
npm install
npm start
```

3. Use Postman or browser to test:

```
GET     http://localhost:3000/           → Hello World
GET     http://localhost:3000/items      → Get all items
GET     http://localhost:3000/items/1    → Get item with ID 1
POST    http://localhost:3000/items      → Add item (JSON body)
PUT     http://localhost:3000/items/1    → Update item with ID 1
DELETE  http://localhost:3000/items/1    → Delete item with ID 1
```

## 📬 Sample POST request in Postman

**POST** http://localhost:3000/items

**Body (JSON):**
```json
{
  "name": "New Item",
  "description": "This is a new item"
}
```

**Response:**
```json
{
  "id": 3,
  "name": "New Item",
  "description": "This is a new item"
}
```
