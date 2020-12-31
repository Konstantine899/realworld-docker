// auth/src/index.js
const express = require('express');
const axios = require('axios');
const { port, host, db, apiUrl } = require('./configuration');
const { connectDb } = require('./helpers/db');

const app = express();

app.get('/test', (req, res) => {
  res.send('Наш сервер запущен корректно с помощью auth');
});

app.get('/api/currentUser/', (req, res) => {
  res.json({
    id: '1234',
    email: 'foo@gmail.com',
  });
});

app.get('/testwithapidata', (req, res) => {
  axios.get(apiUrl + '/testapidata').then((response) => {
    res.json({
      testapidata: response.data.testapidata,
    });
  });
});

const startServer = () => {
  app.listen(port, () => {
    console.log(`api сервис запущен на PORT: ${port}`);
    console.log(`api сервис запущен  на HOST: ${host}`);
    console.log(`Адрес БД!: ${db}`);
  });
};

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer);
