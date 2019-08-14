const Events = require('../model/Events');

exports.exec = async item => {
  const event = new Events(item);
  await event.save();
};
