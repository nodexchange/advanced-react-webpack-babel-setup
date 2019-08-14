const mongoose = require('mongoose');

const { Schema } = mongoose;

const EventsSchema = new Schema({
  title: {
    type: String,
    required: 'Please fill Alarm name',
    trim: true,
  },
  ts: {
    type: String,
  },
  date: {
    type: String,
  },
  desc: {
    type: String,
  },
  link: {
    type: String,
  },
  sponsors: {
    type: Array,
  },
  picture: {
    type: String,
    default: 'SCM',
  },
  status: {
    type: String,
    default: 'SystemLog',
  },
  price: {
    type: Number,
  },
  currency: {
    type: String,
    default: '£',
  },
});

const initColl = () => {
  if (mongoose.models.Events) {
    return mongoose.model('Events');
  }
  return mongoose.model('Events', EventsSchema);
};
module.exports = initColl();
