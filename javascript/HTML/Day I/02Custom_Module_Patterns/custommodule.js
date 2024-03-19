
// // simple module
// console.log('Hello World from the custom module!');

// // pattern 1 - define a global
// foo = function(){
//     console.log('Inside foo!');
// }

// // pattern 2
// // export an anonymous function
// module.exports = function(){
//     console.log('Anonymous Function!');
// }

// // pattern 3
// // export an named function
// module.exports.fun = function(){
//     console.log('Function fun - Named function!');
// }

// // pattern 4 - export an anonymous object
// var Buz = function(){};
// Buz.prototype.log = function(){
//     console.log('Buz!');
// }
// module.exports = new Buz();


// // pattern 5 - export a named object
// var Baz = function(){};
// Baz.prototype.log = function(){
//     console.log('Baz!');
// }
// module.exports.Baz = new Baz();

// // pattern 6 - exporting an anonymous class
// module.exports = function(){
//     this.Id = 100;
//     this.Name = 'Ashish';
//     this.City = 'Mumbai'
// }

// // pattern 7 - exporting a named class
// module.exports.Employee = function(){
//     this.Id = 100;
//     this.Name = 'Ashish';
//     this.City = 'Pune'
// }

// var greet = function(){
//     console.log('Hello World!');
// }
// module.exports.greet = greet;

// Anonymous exports - simple client interface
// Named exports - one Module, many exported things

