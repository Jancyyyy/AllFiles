// string type
// symbol type.
// A “symbol” represents a unique identifier.
// let id-Symbol();//syntax//
let id=Symbol();// id is a symbol with the description "id"
let id1 = Symbol("id");
console.log(typeof id1);
let id2 = Symbol("id");
console.log(typeof id2);
console.log(id1 == id2); // false
