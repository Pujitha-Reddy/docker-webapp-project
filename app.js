const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from my Dockerized App!</h1><p>Version 2 — Auto-deployed with GitHub Actions CI/CD!</p>');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
