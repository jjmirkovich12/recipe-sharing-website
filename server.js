const express = require('express');
const cors = require('cors'); // Import cors

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS

// Route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World! The server is running.');
});

// Route to send a test message
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend sucker!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
