const express = require('express')
const app = express();
const helmet = require('helmet')

app.use(helmet())

app.use(express.static('public'))
//parses requests with JSON payloads
// meaning requests with the type:JSON
app.use(express.json())
//parses requests with url encoded payloads
// meaning requests with the type:urlencoded
app.use(express.urlencoded({extended:false}))

// these two get the url and parse it in JSON format//
// they create req.body //

app.post('/ajax',(req,res)=>{
    console.log(req.body);
    //stringifies the response
    res.json("test");
})

app.listen(3000)