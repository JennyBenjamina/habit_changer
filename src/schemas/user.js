const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    // required: true,
    maxlength: 20,
  },
  lastName: {
    type: String,
    maxlength: 20,
  },
  username: {
    type: String,
    // required: true,
    maxlength: 20,
  },
  email: {
    type: String,
    // required: true,
    match: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    index: {
      unique: true,
      collation: { locale: 'en', strength: 2 },
    },
  },
  password: {
    type: String,
    // required: true,
  },
  role: {
    type: String,
    // required: true,
    enum: ['admin', 'user'],
    default: 'user',
  },
});

module.exports = mongoose.model('User_full_infos', userSchema);
