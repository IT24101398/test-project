const express = require('express');

const app = express();

// Middleware
app.use(express.json());

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running in dev mode on port ${PORT}`);
});

module.exports = app;
