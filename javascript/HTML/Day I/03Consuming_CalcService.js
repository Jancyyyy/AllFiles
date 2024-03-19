// var calcModule = require('./03CalcServiceI/calculator');
// var calc = new calcModule.Calculator();
// console.log('Addition is '+calc.addition(4,5));
// console.log('Multiplication is '+calc.multiplication(4,5));

var calcModuleI = require('./03CalcServiceI');
console.log('Addition is '+calcModuleI.add(4,5));

var calcModuleII = require('./03CalcServiceII');
console.log('Multiplication is '+calcModuleII.mult(4,5));
//console.log('Addition is '+calcModuleII.add(4,5));