//console.log('Hello World!');

// function Employee(){
//     this.Id = 1;
//     this.Name = 'Abhijeet';
//     this.City = 'Pune';
// }

var empModule = require('./01employee');
var emp = new empModule.Employee();
console.log('Id '+emp.Id+' Name '+emp.Name+' City '+emp.City);

// 3 Types of Modules in Node

// core module - something which comes along with node installation.
        // acquire that with require function and use it
// third party module - someone has created and published it 
        // you need to install it, acquire it and use it
// custom module - someone has to create it explicitly
        // you need to acquire it and use it

        