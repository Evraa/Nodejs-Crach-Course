const express = require('express');
const path = require('path');

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
    res.sendFile(path.resolve('../views/index.html'));
});

app.get('/about',(req, res)=>{
    // res.sendFile('../views/about.html', {root: __dirname});
    res.sendFile(path.resolve('../views/about.html'));
});


//REDIRECT
app.get('/about-us',(req, res)=>{
    res.redirect('/about');
});

//404 page
// if the code got to this point down here
// then use will be used.

app.use((req, res)=>{
    //you need to manully state its an error status code.
    res.status(404).sendFile(path.resolve('../views/404.html'));
});

