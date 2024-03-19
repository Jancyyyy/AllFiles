
// consuming custom module

//require('./custommodule');

// // pattern 1
// require('./custommodule');
// foo();

// // pattern 2
// var funName = require('./custommodule');
// funName();

// // pattern 3
// var moduleName = require('./custommodule');
// moduleName.fun();

// // pattern 4
// var buz = require('./custommodule');
// buz.log();

// // pattern 5
// var bazModule = require('./custommodule');
// bazModule.Baz.log();

// // pattern 6
// var Employee = require('./custommodule');
// var emp = new Employee();
// console.log(emp.Id+' '+emp.Name+' '+emp.City);

// pattern 7
var empModule = require('./custommodule');
var emp = new empModule.Employee();
console.log(emp.Id+' '+emp.Name+' '+emp.City);