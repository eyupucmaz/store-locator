const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const PORT = process.env.PORT || 3000;
const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Routes
app.use('/api/v1/stores', require('./routes/stores'));

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
