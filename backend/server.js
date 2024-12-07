
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const mongoose = require("mongoose");

const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const memoryRoutes = require("./routes/memoryRoutes");



const app = express();
const PORT = 5000;

// MongoDB Connection
const DB_URI = "mongodb://localhost:27017/traverse"; // Replace with your MongoDB URI
mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use("/api/memories", memoryRoutes);
app.use("/uploads/memories", express.static("uploads/memories"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
