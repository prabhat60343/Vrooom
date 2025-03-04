require('dotenv').config(); // Load environment variables

const http = require('http');
const app = require('./app'); // Ensure 'app.js' exists in the same directory

const PORT = process.env.PORT || 3000;

// Create HTTP Server
const server = http.createServer(app);

// Start Server
server.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});

// Error Handling
server.on('error', (err) => {
    console.error(`❌ Server Error: ${err.message}`);
});

