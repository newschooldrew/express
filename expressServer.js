// const http = require('http');
// const fs = require('fs')
// // req
// //      all of the data in the headers
// //      who made the request, what page was requested
// // res
// //      what we're sending back

// const server = http.createServer((req,res) => {
//         // you get req whenever server.listen gets hit
//         if(req.url === '/'){
//         // HTTP
//             // 1. Start Line
//             // 2. Headers
//             // 3. Body
//             // writeHead params(statusCode, object for mime-type)
//         res.writeHead(200,{'content-type':'text/html'})
//         // res.write('<h1>Home Page</h1>')
//         const homepageHTML = fs.readFileSync('node.html');
//         res.write(homepageHTML)
//         res.end();
//     } else{
//         res.writeHead(404,{'content-type':'text/html'})
//         res.write('<h4>Wrong page homie</h4>')
//         res.end();        
//     }
// })

// server.listen(3000)