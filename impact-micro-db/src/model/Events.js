const mongoose = require('mongoose');

const { Schema } = mongoose;

const EventsSchema = new Schema({
  name: {
    type: String,
    required: 'Please fill Alarm name',
    trim: true,
  },
  time: {
    type: String,
  },
  type: {
    type: String,
  },
  status: {
    type: String,
  },
  tag: {
    type: String,
  },
  handleTime: {
    type: String,
  },
  handler: {
    type: String,
    default: 'SCM',
  },
  description: {
    type: String,
    default: 'SystemLog',
  },
});

const initColl = () => {
  if (mongoose.models.Events) {
    return mongoose.model('Events');
  }
  return mongoose.model('Events', EventsSchema);
};
module.exports = initColl();
