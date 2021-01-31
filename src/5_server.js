const http = require('http');
const fs = require('fs');

//this server object is not used yet..
const server = http.createServer((req, res) => {
    //log the request url
    console.log(req.url);

    //set the header content type
    //you may send html, json, strings...
    res.setHeader('Content-Type','text/html');

    //routing
    let path = '../views/';
    switch(req.url) {
        case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
        case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
        //rediricting from /about-us to /about
        case '/about-us':
        res.statusCode = 301;
        res.setHeader('Location', '/about');
        res.end();
        break;
        default:
        path += '404.html';
        res.statusCode = 404;
    }

    //send html response
    fs.readFile(path, (err, data) => {
        if (err) {
          console.log(err);
          res.end();
        }
        //res.write(data); //no need
        res.end(data);
      });

});
//yet the server is not initiated, running, or even listening



//create a listener on port 3000
//localhost is default value
//feedback function is just for logging
server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000');
});

//open the browser at localhost:3000
//and navigate to one of these [/about, /, /any_thing]