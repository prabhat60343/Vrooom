const dotenv = require('dotenv');
dotenv.config(); 
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
connectToDb();
app.use(cors()); 
app.use(express.json()); 

// Test Route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

module.exports = app;
