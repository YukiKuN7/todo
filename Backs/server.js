const express = require('express');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// In a real application, you would connect to a database
// For now, we'll use a simple array to simulate a database.
const users = [];

// A basic route for user registration
app.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    if (users.find(user => user.username === username)) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash the password with bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
      username,
      password: hashedPassword
    };

    users.push(newUser);
    console.log('Registered User:', newUser);

    res.status(201).json({ msg: 'User registered successfully' });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));