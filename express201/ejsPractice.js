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

function validated(req,res,next){
    res.locals.validated = true;
    next()
}

app.use(validated)

app.get('/',(req,res,next)=>{
    res.render('index',{
        msg:"test"
    })
})

app.listen(3000)