const mongoose = require('mongoose');
const db = require("../config/db");
const bcrypt = require('bcrypt');

const patientSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender:{
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other'],
    },
    contact:{
        type: String,
        required: true,
    },
    imagePath:{
        type: String,
        required: true,
    },
    videoPath:{
        type: String,
        required: true,
    },
    medicalHistory:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

patientSchema.pre('save', async function(){
    try{
        var user = this;
        const salt = await(bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(user.password, salt);

        user.password = hashpass;
    }catch(err){
        throw err;
    }
})

const userModel = db.model('Patient', patientSchema);

module.exports = userModel;