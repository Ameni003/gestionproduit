const mongoose = require('mongoose');

// This function connects to our database
const connectDB = async () => {
    try {
        // Try to connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (err) {
        // If there's an error, show it
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;