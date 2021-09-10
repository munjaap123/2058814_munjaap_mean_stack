let http = require("http");
let server = http.createServer((request, response) => {

    response.end("Welcome to http module simple example");
    response.end("<b>Welcome to http module simple example</b>");
});

server.listen(9090, ()=>console.log("Server is running on port number 9090"))

