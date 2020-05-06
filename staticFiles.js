const express = require('express');
const app = express();

// .app() takes the middleware you'd like to run
app.use(express.static('public'))

app.listen(3000)
console.log('server listening on port 3000....')
