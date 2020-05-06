const express = require('express')
const app = express()
const helmet = require('require')

app.use(helmet())
app.use(urlencoded({extended:false}))
app.use(express.static('public'))
app.use(json())

app.listen(3000)