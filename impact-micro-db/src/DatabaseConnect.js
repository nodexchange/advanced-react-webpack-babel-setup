const mongoose = require('mongoose');

const setup = () => {
  console.log('db setup');
  mongoose.Promise = global.Promise;
  mongoose.connection.on('error', err => {
    console.log(`[error] DB : ' ${err}`);
  });
  mongoose.connection.on('connecting', () => {
    console.log(`[connecting] DB`);
  });
  mongoose.connection.on('connected', () => {
    console.log(`[connected] DB`);
  });
  mongoose.connection.on('disconnected', () => {
    console.log(`[disconnected] DB`);
  });
};
const connect = url => {
  return mongoose.connect(url).catch(err => {
    console.log(err);
  });
};
const disconnect = () => mongoose.connection.close();

module.exports = {
  setup,
  connect,
  disconnect,
};
