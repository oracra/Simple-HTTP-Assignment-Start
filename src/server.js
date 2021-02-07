const http = require('http');
console.log('hello world');

const helloFunciont = () => {
    console.log('hello funciton')
}

//What the server needs
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    if(request.url === '/favicon.ico'){
        console.log('favicon request');
    }

    response.writeHead(200, {'Content-Type': 'text/plain'});
    console.log('request received');

    response.write("hi");
    response.end();
};

http.createServer(onRequest).listen(port);