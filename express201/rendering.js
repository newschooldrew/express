const express = require('express')
const path = require('path')

const helmet = require('helmet')
const app = express()

app.use(helmet())
//serves up public files
app.use(express.static('public'))
//creates req.body
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.set('view engine','ejs')
app.set('views',path.join(__dirname, 'views'))

app.use('/',(req,res,next)=>{
    res.render('index')
})

app.listen(3000)