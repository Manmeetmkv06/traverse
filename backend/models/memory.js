const mongoose = require("mongoose");

const memorySchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ type: String, required: true }],
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Memory", memorySchema);
