const http = require('http');
const url = require('url');
const fs = require('fs');


// const pages = 
const server = http.createServer(function (req, res) {
  // const currentUrl= url.parse(req.url, true);
    
    if (req.url === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write('File Not Found')
            } else {
                res.write(data);
            }
            res.end();
        })
    } else if(req.url==='/contact-me'){
        fs.readFile('./contact-me.html', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'})
                res.write('File Not Found')
            }else {
                res.write(data)
            }
            res.end()
        })
    } else if(req.url ==='/about'){
        fs.readFile('./about.html', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'})
                res.write('File Not Found')
            }else {
                res.write(data)
            }
            res.end()
        })

    } else if (req.url === '/index.css') {
        fs.readFile('./index.css', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write('File Not Found')
            } else {
                res.write(data)
            }
            res.end();
        })
    }
    else if (req.url === '/normalize.css') {
        fs.readFile('./normalize.css', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write('File Not Found')
            } else {
                res.write(data);
            }
            res.end();
        })
    }
    else {
        fs.readFile('./404.html', (err, data)=> {
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.write('File not found')
            res.end()
        })
    }
});









    // if (currentUrl.pathname==='/'){
    //     fs.readFile('/index.html', (err, data) => {
    //         if (err) {
    //             res.writeHead(404)
    //             res.write('File Not Found')
    //         } else {
    //             res.write(data);
    //         }
    //         res.end()
            // if (err){
            //     res.writeHead(404, {'Content-Type': 'text/html'});
            //     // console.log(err);
            // }
            // // res.writeHead(200, {'Content-type':'text/html'});
            // res.write(data);
            // // res.write('Hello, I am a webserver !');
            // // res.end();
    //     });
    // }
    // else if(currentUrl.pathname==='contact'){
    //     res.write('Hello, I am a contact page !');
    //         res.end();
    //     // currentUrl=contact.html;
    // }
    // else {
    //     res.writeHead(404, {'Content-type':'text/plain'});
    //     res.write('Hello, You seem to be lost!');
    //     res.end();
    // };
  // var q = url.parse(req.url, true);
  // var filename = "." + q.pathname;
  // fs.readFile(filename, function(err, data) {
  //   if (err) {
  //     res.writeHead(404, {'Content-Type': 'text/html'});
  //       console.log(q.pathname);
  //     return res.end("404 Not Found");
  //   }
  //   res.writeHead(200, {'Content-Type': 'text/html'});
  //   res.write(data);
  //   console.log(q.pathname);
//     return res.end();
//   // });
// })
server.listen(8000, ()=>{
    console.log('opened server on', server.address());
});




// const http = require('http');
// const url = require('url');

// var adr = 'http://localhost:8000';
// const ten= url.parse(adr, true);
// //create a server object:
// const server= http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   // console.log(req.url);
//   // if(req.url==="/"){
//   //   res.write('Hello Home!');
//   // }
//   // else if(req.url==="/about"){
//   //   res.write('Hello about!');
//   // }
//   // else if(req.url==="/contact"){
//   //   res.write('Hello contact!');
//   // }
//   // else{
//   //   res.write('Hello 404!');
//   // }
// })
// server.listen(8000); //the server object listens on port 8080










// // Load HTTP module
// const http = require("http");
// const url = require("url");

// const hostname = "127.0.0.1";
// const port = 8000;

// console.log(hostname);

// // Create HTTP server 
// const server = http.createServer((req, res) => {
//    // Set the response HTTP header with HTTP status and Content type
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    // res.write(req.url);
//    // Send the response body "Hello World"
//    res.end('Hello World\n');
// });

// // Prints a log once the server starts listening
// server.listen(port, hostname, () => {
// //    console.log(`Server running at http://${hostname}:${port}/`);
// })

// // server.listen('');


