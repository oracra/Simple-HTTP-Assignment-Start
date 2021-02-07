const http = require('http');
const fs = require('fs');

// What the server needs
const port = process.env.PORT || process.env.NODE_PORT || 3001;
const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const onRequest = (request, response) => {
  if (request.url === '/favicon.ico') {
    console.log(request.url);
  }

  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

http.createServer(onRequest).listen(port);
console.log(`listening on 127.0.0.1:${port}`);
