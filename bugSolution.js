const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate userId (check if it's a number and exists)
  if (isNaN(userId) || userId <= 0) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ... database query to fetch user data
  // ... error handling for database query failure
  db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (!results.length) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ user: results[0] });
  });
});