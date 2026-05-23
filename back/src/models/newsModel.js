const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  news_id: {
    type: String,
    unique: true,
    sparse: true,
    index: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    default: ''
  },
  reporter_name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  strict: false
});

module.exports = mongoose.model('News', newsSchema);
