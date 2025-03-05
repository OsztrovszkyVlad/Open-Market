const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});