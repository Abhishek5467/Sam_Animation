const UserModel = require("../model/user.model");

class userService{
    static async registerUser( email, password, name, gender, age, contact, imagePath, videoPath, medicalHistory){
        try{
            const createUser = new UserModel({email, password, name, gender, age, contact, imagePath, videoPath, medicalHistory});
            return await createUser.save();
        }catch(err){
            throw err;

        }
    }
}
module.exports = userService;