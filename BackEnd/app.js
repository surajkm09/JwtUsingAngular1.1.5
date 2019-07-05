const  express = require('express'); 
const app = express() ;
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const register = require('./api/register')

const passport = require('passport');


app.use(passport.initialize());

app.use(bodyParser.json());
app.use(fileUpload());
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin' , 'http://localhost:4200');
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  res.append('Access-Control-Allow-Credentials', true);
 
  next();
});

app.post('/api/user/register',(req,res)=>{
    register.register(req,res);

});
app.get('/api/user/profile',(req,res)=>{

});

app.post('/api/user/login',(req,res)=>{

});



module.exports = app ; 