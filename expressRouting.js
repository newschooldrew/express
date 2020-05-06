const express = require('express')
const app = express();

// app methods 
//      get, post, delete, put
//          :params (path, callback)        
//      all is 
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to the home page </h1>')
})

app.listen(3000)