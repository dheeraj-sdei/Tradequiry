const mongoose = require('mongoose');
let jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    Username: String,
    EmailId: String,
    Company: String,
    Password: String,
    oldPassword:String,
    Password_confirmation:String,
    Age:String,
    Phone:String,
    Address:String,
    Position:String,
    Gender: String,
    secretToken : String,
    isVerified: Boolean,
    
}, {timestamps: true});

userSchema.methods.generateAuthToken = function(){
    // const token = jwt.sign({ _id : this.id , exp: Math.floor(Date.now() / 1000) + (60 * 60)*2  },process.env.secret);
    const token = jwt.sign({ _id : this.id },'jwtPrimaryKey');
    return token;
}

module.exports = mongoose.model('user', userSchema);
