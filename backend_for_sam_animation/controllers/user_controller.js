const UserService = require("../services/user.services");

exports.register = async(req, res, next) => {
    try{
        const {email, password, name, gender, age, contact, imagePath, videoPath, medicalHistory} = req.body;

        const successRes = await UserService.registerUser(email, password, name, gender, age, contact, imagePath, videoPath, medicalHistory)

        res.json({status:true, success:"User registered successfully"});
    }catch(err){
        throw err;
    }
}

module.exports = exports;