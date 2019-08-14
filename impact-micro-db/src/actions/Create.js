const Events = require('../model/Events');

exports.create = async item => {
  const event = new Events(item);
  await event.save();
};
