// index.js
const express = require('express');

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.get('/test', (req, res) => {
  res.send('Наш сервер запущен корректно');
});

app.listen(port, () => {
  console.log(`api сервис запущен на PORT: ${port}`);
  console.log(`api сервис запущен на HOST: ${host}`);
});
