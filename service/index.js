const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

app.post('/api/data', (req, res) => {
  const newData = req.body;
  res.status(201).json(newData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
