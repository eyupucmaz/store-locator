const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load env vars
dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 3000;
const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

app.get('/api/v1/stores', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
