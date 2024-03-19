// // 1 simple response

// const express = require('express');
// var app = express(); 

// app.get('/',function(req,res){
//     res.send('<h1>Hell World using Express!</h1>');
// })

// const server = app.listen(9876,function(){
//     const host = server.address().address;
//     const port = server.address().port;
//     console.log('This app listening at http:%s',port);
// })


// // 2 Dealing with views - jade/ pug 

// const express = require('express');
// var app = express(); 

// app.set('view engine','pug');

// // controller
// app.get('/',function(req,res){
//     res.render('pug/home');
// })

// // controller
// app.get('/user',function(req,res){
//     // pushing model's data to the view - model - user object
//     res.render('pug/user',{Id:101,Name:'Sachin'});
// })

// var employees = 
// [
//     {id:1,name:'Devanand'},
//     {id:2,name:'Avinash'},
//     {id:3,name:'Nakul'},
//     {id:4,name:'Sneha'},
//     {id:5,name:'Nikita'}
// ]

// app.get('/employees',function(req,res){
//     // pushing model's data to the view - model - user object
//     res.render('pug/employees',{pageTitle:'Employees View',empList:employees});
// })

// const server = app.listen(9876,function(){
//     const host = server.address().address;
//     const port = server.address().port;
//     console.log('This app listening at http:%s',port);
// })

// 3 Dealing with views - ejs 

const express = require('express');
var app = express(); 

app.set('view engine','ejs');

// controller
app.get('/',function(req,res){
    res.render('ejs/home',{myHeader:'My Page Header!'});
})

// controller
app.get('/user',function(req,res){
    // pushing model's data to the view - model - user object
    res.render('ejs/user',{Id:102,Name:'Rahul'});
})

// for static resources
app.use(express.static('public'));

// model as an array
const recipes = [
	{ "Id": "1", "name": "Tawa Surmai", "url": "https://food.ndtv.com/recipe-tawa-surmai-707370" },
	{ "Id": "2", "name": "Prawn Balchao with Appams", "url": "http://food.ndtv.com/recipe-prawn-balchao-with-appams-218053" },
	{ "Id": "3", "name": "Mediterranean Watermelon Salad", "url": "http://food.ndtv.com/recipe-mediterranean-watermelon-salad-507291" },
	{ "Id": "4", "name": "Chicken Xacuti", "url": "http://food.ndtv.com/recipe-chicken-xacuti-287147" },
	{ "Id": "5", "name": "Pasta with Tangy Tomato Sauce", "url": "https://food.ndtv.com/recipe-pasta-with-tangy-tomato-sauce-952142" },
];

app.get('/recipes',function(req,res){
    // pushing model's data to the view - model - user object
    res.render('ejs/recipes',
        {
            title:"Zensar's Kitechens - Recipes",
            recipes:recipes
        });
})

app.get('/recipes/:Id',function(req,res){
    var rs;
    for(var i in recipes){
        if(recipes[i].Id === req.params.Id){
            rs = recipes[i];
            break;
        }
    }
    res.render('ejs/recipe',
        {
            title:"Favourite Recipe!",
            recipe:rs
        });
})

// Error Handling
app.use(function(req,res,next){
    var err = new Error('View Not Found!...');
    err.status = 404;
    next(err);
})

app.use(function(err,req,res,next){
    res.status(err.status || 500);
    if(!err.status){
        err.status = 500;
    }
    res.render('ejs/error',{
        message:err.message,
        status:err.status
    });
})

const server = app.listen(9876,function(){
    const port = server.address().port;
    console.log('This app listening at http:%s',port);
})