const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,  'index.html'));
});

// Route for /qr
app.get('/qr', (req, res) => {
  res.sendFile(path.join(__dirname,  'qr.html'));
});

// Route for /pair
app.get('/pair', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pair.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
