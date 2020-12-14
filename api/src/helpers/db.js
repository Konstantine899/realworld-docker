// src/helpers

const mongoose = require('mongoose');
const { db } = require('../configuration/index');

module.exports.connectDb = () => {
  mongoose.connect(db, { useNewUrlParser: true });
  return mongoose.connection;
};
