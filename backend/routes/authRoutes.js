
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data.json');

// Helper function to read data
const readData = () => {
  try {
    return JSON.parse(fs.readFileSync(dataFilePath));
  } catch (error) {
    throw new Error('Failed to read data');
  }
};

// Helper function to write data
const writeData = (data) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    throw new Error('Failed to write data');
  }
};

// Register route
router.post('/register', (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const data = readData();
    const existingUser = data.users.find((user) => user.email === email);

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    data.users.push({ username, email, password });
    writeData(data);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    next(error);
  }
});

// Login route
router.post('/login', (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = readData();
    const user = data.users.find((user) => user.email === email && user.password === password);

    if (user) {
      res.status(200).json({ message: 'Login successful', user });
    } else {
      res.status(400).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;

