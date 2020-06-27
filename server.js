const express = require('express')
const app = express()

app.use('/',express.static(__dirname+'/public'))
/*
function decrypt(req,res,next){
    for(let q in req.query){
        let data = req.query[q];
        if(Number(data)>'a' && data<'z'){
            data = data.toUpperCase()
        }
        else if(data>'A' && data<'Z'){
            data = data.toLowerCase()
        }
        req.query[q] = data;
    }
    console.log('=========')
    console.log(req.query)
    console.log('=========')
    next()
}
*/
function decode(req,res,next){
    for (let q in req.query) {
        let data  = req.query[q]
        data = new Buffer(data,'base64').toString("ascii")
        req.query[q] = data
    }
    
    next()
}

app.get('/eval',decode,(req,res)=>{
    let data = ''    
    for(let q in req.query){
        data+=req.query[q];
    }
    let ans  = eval(data);
    res.send(new String(ans))
})

app.listen(4545,()=>{
    console.log('server started on http://localhost:4545')
})