const User = require('../Database/User');



module.exports.register =function(req,res){

    var user = new User() ;
    

    console.log(req.body);
    user.firstName = req.body.user.firstName ; 
    user.lastName = req.body.user.lastName ; 
    user.userName = req.body.user.userName; 

    user.setPassword(req.body.user.password);
    user.save((err)=>{
        if(err){
            console.log("error has occurred");
            console.log(err);

        }
        var token ;
        token = user.generateJWT();
        res.status(200);
        res.json({"token":token});
    });

}