const express = require('express');

//express app
const app = express();

//listen for requests
const server = app.listen(3000);

//get requests
app.get('/',(req, res)=>{
    //instead of res.write() and res.end(), you may use res.send()
    //which comes in handy with express
    //it inferes the type of conten we send back (json/html)
    //manually sets the status code for us
    
    res.sendFile('../views/index.html', {root: __dirname});
});

app.get('/about',(req, res)=>{
    res.sendFile('../views/about.html', {root: __dirname});
});

