const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const customerRoutes = require('./src/routes/customerRoutes');
const orderRoutes = require('./src/routes/orderRoutes');
const segmentRoutes = require('./src/routes/segmentRoutes');
const campaignRoutes = require('./src/routes/campaignRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working' });
});

// Routes
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/segments', segmentRoutes);
app.use('/api/campaigns', campaignRoutes);