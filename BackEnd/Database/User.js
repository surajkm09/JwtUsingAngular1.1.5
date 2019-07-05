var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost:27017/userData', {useNewUrlParser: true});



var  userSchema = mongoose.Schema({

        firstName:{
            type:String ,
            required:true , 

        }, 
        lastName:{
            type:String ,
            required:true , 
            
        } , 
        userName:{
            type:String ,
            required:true , 
            
        } , 
        hash:String , 
        salt:String


    }) ;
    userSchema.methods.setPassword = function(password){
        this.salt =crypto.randomBytes(16).toString('hex');
        this.hash = crypto.pbkdf2Sync(password,this.salt,1000,64,'sha512').toString('hex');

    }

    userSchema.methods.validPassword = function(password){
        var hash = crypto.pbkdf2Sync(password,this.salt,1000,64,'sha512'); 
        return this.hash === hash ;
    }
    userSchema.methods.generateJWT =function(){
        var expiry = new Date();
        expiry.setDate(expiry.getDate()+7);
        return jwt.sign({
            _id:this._id,
            firstName:this.firstName , 
            lastName:this.lastName,
            userName:this.userName , 
            exp :parseInt(expiry.getTime/1000)  
        },"root");
    }
var User = mongoose.model("User",userSchema,"user"); 

module.exports = User ; 