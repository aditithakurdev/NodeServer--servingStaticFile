const http = require("http");
const path = require('path')
// path module \
const fs = require('fs')
//for reading fs module 

const PORT = 7000;

const server = http.createServer((req, res) => {
    let filepath;
    // url  route check === home -- 
    if (req.url === '/home') {
        // then you have server static foldder index.html 
        filepath = path.join(__dirname, 'static', 'index.html');
        console.log("yaha tk aaya tha");   // nodeserevr-serverin/static/index.html
        console.log(filepath);
        console.log("yaha crooss jr gya ");
    }

    fs.readFile(filepath, (err, readData) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" })
            res.write("File not found")
            res.end()

        } else {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(readData)
            res.end()
        }
    });

    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("Hello from Http Web Server");
    // res.end();
});

server.listen(PORT);

