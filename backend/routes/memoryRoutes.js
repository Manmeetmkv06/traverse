
const express = require("express");
const multer = require("multer");
const Memory = require("../models/memory");
const router = express.Router();

// Multer configuration for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/memories"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// Add a new memory
router.post("/", upload.array("images", 5), async (req, res) => {
  try {
    const { user, title, description } = req.body;
    const imagePaths = req.files.map((file) => file.path);

    const newMemory = new Memory({
      user,
      title,
      description,
      images: imagePaths,
    });

    await newMemory.save();
    res.status(201).json({ message: "Memory created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating memory", error });
  }
});

// Get all memories
router.get("/", async (req, res) => {
  try {
    const memories = await Memory.find().sort({ createdAt: -1 });
    res.status(200).json(memories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching memories", error });
  }
});

module.exports = router;
