// Type Assertions
// Type Assertion is explicitly telling the compiler that we want to treat the entity as
// a different type.

var data1:any = 'Hello, I am a string';

console.log(data1)
console.log(typeof data1)

console.log(data1.toUpperCase());

// var length = (<string>data1).length;
// console.log(length);


var length = (data1 as string).length;
console.log(length);

console.log((data1 as string).toLowerCase());