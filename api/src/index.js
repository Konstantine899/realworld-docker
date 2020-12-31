// api/src/index.js
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const { connectDb } = require('./helpers/db');
const { host, port, db, authApiUrl } = require('./configuration');
const app = express();

const postSchema = new mongoose.Schema({
  name: String,
});

const Post = mongoose.model('Post', postSchema);

const startServer = () => {
  app.listen(port, () => {
    console.log(`api сервис запущен на PORT: ${port}`);
    console.log(`api сервис запущен  на HOST: ${host}`);
    console.log(`Адрес БД!: ${db}`);

    // Post.find(function (err, posts) {
    //   if (err) return console.error(err);
    //   console.log('posts', posts);
    // });

    const silence = new Post({ name: 'Silence' });
    silence.save(function (err, savedSilence) {
      if (err) return console.error(err);
      console.log('savedSilence with volumes!', savedSilence);
    });
  });
};

app.get('/test', (req, res) => {
  res.send('Наш сервер запущен корректно');
});

app.get('/testapidata', (req, res) => {
  try {
    res.json({
      testapidata: true,
    });
  } catch (e) {
    console.log(e);
  }
});

app.get('/testwithcurrentuser', (req, res) => {
  try {
    axios.get(authApiUrl + '/currentUser').then((responce) => {
      res.json({
        testwithcurrentuser: true,
        currentUserFromAuth: responce.data,
      });
    });
  } catch (e) {
    console.log(e);
  }
});

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer);
