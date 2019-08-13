const Events = require('../model/Events');

exports.getPopulatedUsers = async query => {
  const docs = await Events.find(query).exec();
  return docs;
};
