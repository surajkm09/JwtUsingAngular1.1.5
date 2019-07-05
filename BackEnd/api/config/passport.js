const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../Database/User');


passport.use(new LocalStrategy({
     usernameField:'userName'
},function(userName,password,done){
    User.findOne({userName:userName},function(err,user){
        if(err)
        {
            return done(err);
        }
        if(!user)
        {
            return done(null,false,{message:"user not Found !!"})
        }
        if(!user.validPassword(password))
        {
            return done(null,false,{message:"password is wrong "}) 
        }
        return done(null ,user)
    })
}




))

