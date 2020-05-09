const express = require('express')
let userRouter = express.Router();

userRouter.get('/',(req,res,next)=>{
    res.json({
        msg:"user router works"})
})

module.exports = userRouter