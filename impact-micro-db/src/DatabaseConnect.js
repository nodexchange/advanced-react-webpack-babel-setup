const mongoose = require('mongoose');

const DatabaseConnect = (url, action) => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(url)
    .then(() => {
      console.log('CONNECTED');
      action().then(() => {
        mongoose.connection.close();
      });
    })
    .catch(err => {
      console.log(err);
    });
  mongoose.connection.on('disconnected', () => {
    console.log('CLOSED');
  });
};

module.exports = DatabaseConnect;
