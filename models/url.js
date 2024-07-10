const mongoose = require('mongoose');

const urlSchmea = new mongoose.Schema({
  shortId: {
    type: String,
    require: true,
    unque: true,
  },
  redirectURL:{
    type: String,
    require: true,
  },
  visitHistory: [{timestamp:{type: Number}}],
}, {timestamps: true}
);

const URL = mongoose.model('URL', urlSchmea);

module.exports = URL;