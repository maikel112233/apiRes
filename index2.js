const httpModule = require('./modules/http-module');
const http = require('http');
const hostname = '127.0.0.1';
const port ='8180';

http.createServer(httpModule.handle_request).listen(port, '127.0.0.1');
console.log(`Iniciando server http Node.js en http://:${hostname}:${port}`);
