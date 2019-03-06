const User = require('../model/user.model');
const userResponse = require('../model/response.model');
let bcrypt = require('bcrypt');
let nodemailer = require('nodemailer');
let randomstring =require('randomstring');
//#region create and save user 
exports.createUser = async (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        authentication:'plain',
        auth: {
            user:'dheerajkarki27@gmail.com',
            pass:'dream@4u',
        }
        // tls: {
        //do not fail on invalid certs
        // rejectUnauthorized: false
        // }
        })
        var secretToken = randomstring.generate();
    //console.log(req.body);
     // Validate Username
     if (!req.body.Username) {
        //API return type (response format)
        var userResponse = {
            message: "Username can not be empty",
            userId: 0,
            statusCode: 200,
            userData: null
        }
        return res.status(200).send({ userResponse });
    }
    // Validate EmailId
    if (!req.body.EmailId) {
        //API return type (response format)
        var userResponse = {
            message: "EmailId can not be empty",
            userId: 0,
            statusCode: 200,
            userData: null
        }
        return res.status(200).send({ userResponse });
    }
    //Validate Password
    if (!req.body.Password) {
        //API return type (response format)
        var userResponse = {
            message: "Password can not be empty",
            userId: 0,
            statusCode: 200,
            userData: null
        }
        return res.status(200).send({ userResponse });
    }
    //Validate Password_confirmation
    if (req.body.Password !== req.body.Password_confirmation) {
        //API return type (response format)
        var userResponse = {
            message: "Password can not be match",
            userId: 0,
            statusCode: 200,
            userData: null
        }
        return res.status(200).send({ userResponse });
    }
    //validation done here
   
    let user = await User.findOne({ EmailId : req.body.EmailId });
     if(user){
    //     return res.status(400).json({
    //         code : 400,
    //         message : 'Try with new email,user already exists',
    //         data : []
    //     });
        var userResponse = {
            message: "Try with new email,user already exists",
            userId: 0,
            statusCode: 200,
            userData: []
        }
        return res.status(200).send({ userResponse });
    }
    else{
        createNewUser();
    }

    async function createNewUser(){
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.Password,salt);
       // const activationnumber = Math.floor(( Math.random() * 546795) + 54 );
        const user = new User({
           
            Username: req.body.Username,
            EmailId: req.body.EmailId,
            Company: req.body.Company,
            Password: hash,
            //activationnumber:activationnumber,
            secretToken :secretToken,
            isVerified:false,
        });
    
        // Save user details in the database
        user.save().then(result => {
                    console.log(result,"-------------------");
                  var userResponse = {
                    message: "success",
                    // userId: result._id,
                    statusCode: 200,
                    userData: result
                }
                return res.status(200).send({ userResponse });
            }).catch(err => {
                //API return type (response format)
                var userResponse = {
                    message: "error",
                    statusCode: 500,
                    userData: null
                }
                return res.status(500).send({ userResponse });
            });
                  //for send email
                  var host = req.get('host');
                  console.log(host);
                  //var link ="http://"+req.get('4529')+"/="+secretToken;
                  //let link = "http://localhost:4200/#/?secretToken=${secretToken}&email=${EmailId}";
                  let link = "http://54.71.18.74:4529/#/?secretToken=${secretToken}&email=${EmailId}"; 
                  var mailOptions = {
                      to: req.body.EmailId,
                      from: 'dheerajkarki27@gmail.com',
                      subject: 'Thank you for signing up at',
                      text:'Hello <strong></strong><br>Thank you for signing up at <a href="+host+"></a>',
                      html:'Thanks for signing up for <strong>Tradequiry</strong>.<br> make sure "'+req.body.EmailId+'" is the right email address for you.<br>Please verify you email address by clicking on this link below to continue .<br/>Click to the link <span><a href ="'+link+'">"'+link+'"</a>Thanks and Regards<br>Team <a href="'+host+'"></span>Tradequiry.'
                  
                     
                      }        
          console.log(mailOptions);
          transporter.sendMail(mailOptions, function(error,data) {
              if(error){
              console.log(error);
              res.end("error");
              }else{
                  //res.redirect('/signup');
                res.redirect('/',function(req, res){
                  User.updateOne({"email":EmailId},{$set:{"isVerified":true,"secretToken":''}},function(err,callback){
                  console.log(callback);
                  
         })
      
      })
          }})

      }}

exports.loginUser = async (req,res)=>{
    try{
        let email = req.body.EmailId;
        let password = req.body.Password;
        if(!email){
            return res.status(400).json({
                code : 400,
                message : 'Email cannot be blank',
                data : []
            });
        }
        else if(!password){
            return res.status(400).json({
                code : 400,
                message : 'Password cannot be blank',
                data : []
            });
        }
        else{
            let user = await User.findOne({ EmailId : email });
            if(user){
                bcrypt.compare(password, user.Password, (err, result)=> {
                    if(result){
                            const token = user.generateAuthToken();
                            return res.header('x-auth-token',token).json({
                                code : 200,
                                message : 'User signin success',
                                data : user,
                                token : token
                            });
                        
                    }
                    else{
                        return res.status(401).json({
                            code : 401,
                            message : 'Invalid Password',
                            data : []
                        });
                    }
                });
            }
            else{
                return res.status(404).json({
                    code : 404,
                    message : 'Email not found.Try login using a valid email address',
                    data : []
                });
            }
        }
    } catch(err){
        console.error(err);
        return res.status(500).json({
            code : 500,
            message : 'Something went wrong,Try after sometime',
            data : []
        });
    }
}

exports.loadUser = async (req, res) => {
    console.log("req.params.id", req.params.id);
    User.find({_id: req.params.id})
    .then(result => {
        //API return type (response format)
        var userResponse = {
            message: "success",
            userId: 0,
            statusCode: 200,
            userData: result
        }
        return res.status(200).send({ userResponse });
    }).catch(err => {
        //API return type (response format)
        var userResponse = {
            message: "error",
            userId: 0,
            statusCode: 500,
            userData: null
        }
        return res.status(500).send({ userResponse });
    });

}


exports.updateUser = (req, res) => {
    // Find user and update it with the request body
    console.log("aaaaaaaaaaa", req.body);

    User.findOneAndUpdate({ _id: req.body._id},
        {$set:{Username: req.body.Username,
            Phone: req.body.Phone,
            Address: req.body.Address,
            Position: req.body.Position,
            Age: req.body.Age}},{new:true})
        .then(result => {
            console.log("result", result)
            //API return type (response format)          
            var userResponse = {
                message: "success",
                userId: 0,
                statusCode: 200,
                userData: result
            }
            return res.status(200).send({ userResponse });
        }).catch(err => {
            console.log("aaaaaaaaaa", err);
            //API return type (response format)
            var userResponse = {
                message: "error",
                userId: 0,
                statusCode: 500,
                userData: null
            }
            return res.status(500).send({ userResponse });
        });
};
///forgot ///
exports.forgotPassword = async (req,res)=>{
    try{
        console.log(req.body,'  00000====');
        let email = req.body.EmailId;
        if(!email){
            return res.status(404).json({
                code : 404,
                message : 'Email cannot be blank',
                data : []
            });
        }
        //const activationnumber = Math.floor(( Math.random() * 484216) + 54 );
        var secretToken = randomstring.generate();
        let user = await User.findOne({ EmailId : email });
        console.log(user,'  00000useruseruser');
        if(user){
            let updateuser = await User.findOneAndUpdate({EmailId : email }, { $set : { secretToken : secretToken } });
                if(updateuser){
                    
                    //let link = ` http://54.71.18.74:4529/#/setpassword?secretToken=${secretToken}&email=${email}`;
                    let link = ` http://localhost:4200/#/reset-password?secretToken=${secretToken}&email=${email}`;
                    let transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                        user: 'test70870@gmail.com',
                        pass: 'Qwerty@12345'
                        }
                    });
                    let mailOptions = {
                        from: 'test70870@gmail.com',
                        to: email,
                        subject: 'Tradequiry forgot password link',
                        
                        html: "Hello,<br> Please Click on the link to reset your password.<br><a href=" + link + ">Click here to reset password of your account.</a>"
                    };
                    transporter.sendMail(mailOptions, function(error, info){
                        if(error){
                            console.log(error);
                            console.log('Email not sent...error');
                        }
                        else{
                            console.log('Email sent: ' + info.response);
                        }
                    });
    
                    return res.status(200).json({
                        code : 200,
                        message : 'Check your email and reset your password now',
                        data : []
                    });
                }
                else{
                    return res.status(404).json({
                        code : 404,
                        message : 'Email not found22',
                        data : []
                    });
                }
        }
        else{
            return res.status(404).json({
                code : 404,
                message : 'Email not found44',
                data : []
            });
        }
    } catch(err){
        console.error(err);
        return res.status(500).json({
            code : 500,
            message : 'Something went wrong,Try after sometime',
            data : []
        })
    }
}


/////Reset password///
exports.changePassword = async (req,res)=>{
    try{
         console.log(req.body,' =====');
        let oldpassword = req.body.oldPassword;
        let newpassword = req.body.Password;
        let confirmnewpassword = req.body.Password_confirmation;

        let loggedInUser = req.body._id;
        let user = await User.findOne({_id : loggedInUser,});
        if(!user){
            return res.status(404).json({
                code : 404,
                message : 'Error.You are not a valid user',
                data : []
            });
        }
        else{
            let resultPass =  await bcrypt.compare(oldpassword, user.hash);
            console.log(resultPass, 'result Pass');
            console.log(oldpassword, ' old password');
            if(!resultPass) {
                return res.status(401).json({
                    code : 401,
                    message : 'Invalid old password.Authentication failed22',
                    data : []
                });
            }
            else{
                const salt = await bcrypt.genSalt(10);
                const hash = await bcrypt.hash(newpassword,salt);
                let updateuser = await User.findOneAndUpdate({ _id : loggedInUser ,  },{ $set : { salt : salt , hash : hash } });
                if(updateuser){
                    return res.status(200).json({
                        code : 200,
                        message : 'Password changed successfully',
                        data : updateuser
                    });
                }
                else{
                    return res.status(404).json({
                        code : 404,
                        message : 'Error in changing password',
                        data : []
                    });
                }
            }
        }
    } catch(err){
        console.error(err);
        return res.status(500).json({
            code : 500,
            message : 'Something went wrong in editing user,Try after sometime',
            data : []
        });
    }
}

