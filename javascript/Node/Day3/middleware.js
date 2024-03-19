const express = require('express');
var app = express(); 
const logger = require('morgan');
const favicon = require('serve-favicon');

app.set('view engine','pug');

var books = 
[
    {id:1,name:'A better india',isbn:'1574',author:'Naryana',pages:'130'},
    {id:2,name:'A passage to india',isbn:'1234',author:'foster',pages:'120'},
    {id:3,name:'Death of a city',isbn:'4321',author:'amrita',pages:'100'},
    {id:4,name:'a suitable boy',isbn:'1345',author:'vikram',pages:'130'},
    {id:5,name:'Oliver twist',isbn:'3456',author:'charles Darwin',pages:'120'}
]

// // provide custom middleware to the app
// app.use((req,res,next)=>{
//     console.log('Request - Middleware One!')
//     next();
//     console.log('Response - Middleware One!')
// })

// requestTime middleware
const requestTime = function(req,res,next){
    req.requestTime = new Date().toLocaleTimeString();
    next();
    console.log('Requested at :- '+req.requestTime);
}

// using requestTime middleware along express application - app
app.use(requestTime);

app.use(logger('dev'));
app.use(favicon(__dirname + "/public/images/favicon.png"));

// controller
app.get('/',function(req,res){
    // let someText = "Hello World!<br/>";
    // someText += "<b>Requested at:</b> "+req.requestTime;
    // res.send(someText);
    res.render('pug/home');
})

// controller
app.get('/user',function(req,res){
    //throw new Error('Just to check morgan - dec color status!');
    // pushing model's data to the view - model - user object
    res.render('pug/user',{id:6,name:'happy',isbn:'1895',author:'Darwin',pages:'170'});
})

app.get('/employees',function(req,res){
    // pushing model's data to the view - model - user object
    res.render('pug/employees',{pageTitle:'Books View',empList:books});
})

const server = app.listen(9876,function(){
    const host = server.address().address;
    const port = server.address().port;
    console.log('This app listening at http:%s',port);
})
