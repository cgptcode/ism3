const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

const MONGODB_URI = 'YOUR_MONGODB_URI_HERE'; // Replace with your MongoDB URI

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected...');
})
.catch(err => {
    console.error('Failed to connect to MongoDB:', err);
});

app.get('/test', (req, res) => {
    res.send('Test route is working!');
});
