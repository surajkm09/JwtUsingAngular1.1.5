const http =require('http');

const app = require('./BackEnd/app');




const server = http.createServer(app);


server.listen(3333); 

server.on('listening',()=>{
    console.log('server has started ');
}); 

server.on('error',(err)=>{
    console.error(err);
    
});