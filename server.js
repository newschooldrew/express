// express is a 3rd party module
const express = require('express')

//path is a native nodeJS module
const path = require('path')

const app = express();

app.use(express.static('public'))
//all 
// 1. route
// 2. callback
app.all('/',(req,res)=>{
    // express handles basic headers and end
    // require full path
    console.log(path.join(__dirname + '/node.html'))
    res.sendFile(path.join(__dirname + '/node.html'))
})

app.listen(3000) 
console.log("server is listening on port 3000")