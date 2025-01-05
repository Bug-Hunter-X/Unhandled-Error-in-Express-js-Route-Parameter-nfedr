const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  // ... other code to fetch user data based on userId
  res.json({ user: /* ... user data ... */ });
});