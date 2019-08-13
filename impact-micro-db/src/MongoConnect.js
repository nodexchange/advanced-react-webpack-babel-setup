const { MongoClient } = require('mongodb');

const connect = url => {
  MongoClient.connect(url)
    .then(db => {
      // <- db as first argument
      console.log(db);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = connect;
