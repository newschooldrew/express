const express = require('express')
const path = require('path')

const helmet = require('helmet')
const app = express()

const cookieParser = require('cookie-parser')

app.use(helmet())
//serves up public files
app.use(express.static('public'))
//creates req.body
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(cookieParser())

app.set('view engine','ejs')
app.set('views',path.join(__dirname, 'views'))

app.param('id',(req,res,next,id)=>{
    console.log(id);
    next()
})

app.use((req,res,next)=>{
    if(req.query.msg === "fail"){
        res.locals.msg = 'Sorry. This username and password combo does not exist'
    } else{
        res.locals.msg = ''
    }
    next()
})

app.get('/',(req,res,next)=>{
    res.send('index')
})

app.get('/login',(req,res,next)=>{
    console.log(req.query)
    res.render('login')
})

app.post('/process_login',(req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;
    if (password === "me"){
        // res.cookie(cookie, value)
        res.cookie('username',username);
        res.redirect('/welcome');
    } else{
        res.redirect('/login?msg=fail')
    }
})

app.get('/welcome',(req,res,next)=>{
    res.render("welcome",{
        username:req.cookies.username
    })
})

app.get('/story/:id',(req,res,next)=>{
    res.send(`<h1>story ${req.params.id}</h1>`)
})

app.get('/story/:storyId',(req,res,next)=>{
    res.send(`<h1>story ${req.params.storyId}</h1>`)
})

app.get('/story/:storyId/:description',(req,res,next)=>{
    res.send(`<h1>story ${req.params.storyId}</h1><h1> ${req.params.description}</h1>`)
})

app.get('/statement',(req,res,next)=>{
    // download()
    // what you want the file to download as
    // sets content disposition headers to attachment
    if(!res.headersSent){
        res.download(path.join(__dirname,'userStatements/BankStatementChequing.png'))
    }
})

app.get('/logout',(req,res,next)=>{
    //cookie to clear by name
    res.clearCookie('username')
    res.redirect('/login')
})

app.listen(3000)