const http = require('http');
//this server object is not used yet..
const server = http.createServer((req, res) => {
    console.log("request received");
});
//yet the server is not initiated, running, or even listening

//create a listener on port 3000
//localhost is default value
//feedback function is just for logging
server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000');
});

//open the browser at localhost:3000
//and watch the terminal updates