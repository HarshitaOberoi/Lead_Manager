const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Ensure this is present and before routes

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Lead Schema
const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  status: {
    type: String,
    enum: ['New', 'Engaged', 'Proposal Sent', 'Closed-Won', 'Closed-Lost'],
    default: 'New',
  },
  createdAt: { type: Date, default: Date.now },
});

const Lead = mongoose.model('Lead', leadSchema);

// Routes
app.post('/leads', async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const { name, email, status } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    const lead = new Lead({ name, email, status });
    await lead.save();
    res.status(201).json(lead);
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ error: 'Email already exists' });
    } else {
      console.error('Error adding lead:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }
});

app.get('/leads', async (req, res) => {
  try {
    const leads = await Lead.find();
    res.json(leads);
  } catch (err) {
    console.error('Error fetching leads:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));