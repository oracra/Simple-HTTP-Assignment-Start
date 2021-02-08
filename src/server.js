const http = require('http');
// const fs = require('fs');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');
const imageHandler = require('./imageResponses.js');


// What the server needs
const port = process.env.PORT || process.env.NODE_PORT || 3000;
// const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const onRequest = (request, response) => {
  if (request.url === '/favicon.ico') {
    console.log(request.url);
  }
  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/page2':
      htmlHandler.getPage2(request, response);
      break;
    case '/hello':
      textHandler.getHello(request, response);
      break;
    case '/time':
      textHandler.getTime(request, response);
      break;
    case '/helloJSON':
      jsonHandler.getHelloJSON(request, response);
      break;
    case '/timeJSON':
      jsonHandler.getTimeJSON(request, response);
      break;
    case '/dankmemes':
      imageHandler.getSpongegar(request, response);
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port);
console.log(`listening on 127.0.0.1:${port}`);
