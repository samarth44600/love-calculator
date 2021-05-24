const mongoose = require("mongoose");

const CoupleSchema = mongoose.Schema({
  partner1: { type: String, min: 3 },
  partner2: { type: String, min: 3 },
  percentage: { type: String },
});

const Couple = mongoose.model("Couple", CoupleSchema);
module.exports = Couple;
