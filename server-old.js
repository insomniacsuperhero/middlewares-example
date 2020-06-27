const express = require('express')
const app = express();


function m1(req,res,next){
    console.log('pre-middleware 1');
    next()
    console.log('post-middleware 1');
}

function m2(req,res,next){
    console.log('pre-middleware 2');
    next()
    console.log('post-middleware 2');
}
function m3(req,res,next){
    console.log('pre-middleware 3');
    next()
    console.log('post-middleware 3');
}
/*
function m4(req,res,next){
   next() 
   console.log('middleware 4');
    
}
function m5(req,res,next){
    console.log('middleware 5');
    next()
}*/

app.get('/hello',m1,m2,m3,(req,res)=>{
    console.log('pre-send request')
    res.send('Hello World')
    console.log('post-send request')
})
app.listen(4343,()=>{
    console.log('server started on http://localhost:4343')
})