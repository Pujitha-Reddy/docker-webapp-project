const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from my Dockerized App!</h1><p>Running on EC2</p>');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
