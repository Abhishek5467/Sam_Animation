const mongoose = require('mongoose');

const connection = mongoose.createConnection("mongodb://localhost:27017/patientsDB").on('open', () => {
    console.log("Connected to MongoDB successfully")
}).on('error', (err) => {
    console.log("Not able to Connect to MongoDB successfully")
})

module.exports = connection;