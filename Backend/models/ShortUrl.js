
const mongoose = require("mongoose");

const shortUrlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortcode: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: Date.now },
  expiryDate: { type: Date, required: true },
  clicks: [
    {
      timestamp: Date,
      referrer: String,
      geo: String 
    }
  ]
});

module.exports = mongoose.model("ShortUrl", shortUrlSchema);
