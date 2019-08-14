const Events = require('../model/Events');

exports.exec = async (query, items) => {
  const docs = await Events.find(query).exec();
  // eslint-disable-next-line no-param-reassign
  items.results = docs;
  return docs;
};
