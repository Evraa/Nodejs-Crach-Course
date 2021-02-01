const express = require('express');
const path = require('path');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');
//where to look for it?
app.set('views', '../views'); //default is views


//listen for requests
const server = app.listen(3000);

//get requests
app.get('/',(req, res)=>{
    //instead of res.write() and res.end(), you may use res.send()
    //which comes in handy with express
    //it inferes the type of conten we send back (json/html)
    //manually sets the status code for us
    // res.sendFile(path.resolve('../views/index.html'));
    
    const blogs =[
        {title: 'blog 1', snippet:'snippet 1'},
        {title: 'blog 2', snippet:'snippet 2'},
        {title: 'blog 3', snippet:'snippet 3'}
    ];
    //when using views, we use render method
    res.render('index', {page_title:'home',blogs}); 
});

app.get('/about',(req, res)=>{
    // res.sendFile('../views/about.html', {root: __dirname});
    // res.sendFile(path.resolve('../views/about.html'));
    res.render('about',{page_title:'About'});
});

app.get('/blogs/create', (req, res)=>{
    res.render('create',{page_title:'Create'});
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
    // res.status(404).sendFile(path.resolve('../views/404.html'));
    res.status(404).render('404',{page_title:'Error'});
});

