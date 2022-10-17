const http = require('http');
const app = require('./app');

const PORT = process.env.POST || 5000;

const server = http.createServer(app);

server.listen(PORT,console.log(`server listen on port ${PORT}`));