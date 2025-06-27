// controllers/shortUrlController.js
const ShortUrl = require("../models/ShortUrl");
const { nanoid } = require("nanoid");

exports.createShortUrl = async (req, res) => {
  const { url, validity = 30, shortcode } = req.body;
  if (!url) return res.status(400).json({ error: "URL is required" });

  const code = shortcode || nanoid(6);
  const expiryDate = new Date(Date.now() + validity * 60000);

  try {
    const existing = await ShortUrl.findOne({ shortcode: code });
    if (existing && !shortcode) return exports.createShortUrl(req, res);
    if (existing) return res.status(400).json({ error: "Shortcode already exists" });

    const newLink = await ShortUrl.create({ originalUrl: url, shortcode: code, expiryDate });
    res.status(201).json({ shortLink: `${req.protocol}://${req.get("host")}/${code}`, expiry: expiryDate });
  } catch (err) {
    console.error("Error creating short URL:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getStats = async (req, res) => {
  const { shortcode } = req.params;
  try {
    const short = await ShortUrl.findOne({ shortcode });
    if (!short) return res.status(404).json({ error: "Shortcode not found" });
    res.json({
      originalUrl: short.originalUrl,
      createdAt: short.createdAt,
      expiryDate: short.expiryDate,
      clicks: short.clicks,
      clickCount: short.clicks.length
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch statistics" });
  }
};
