// Variables created are optionally typesafe

// // Untyped data, not typesafe and will not get intellisence
// var data;
// data = 10;
// // data = "Abhijeet";

// // Implicitly Typed - Typed Inference
// var data = 10;
// //data = 'Abhijeet';

// // Explicitly Typed
// var age:number;
// age = 10;
// //age = 'ten';

// let city:string;
// city='Pune';

// function add(x:number,y:number):number{
//     return x+y;
// }

// console.log(add(4,5));

// let a:Array<number>;
// let s:symbol;
// let p:Promise<number>;

// a = new Array<number>();
// s = Symbol('Hello');
// p = new Promise((resolve,reject)=>{});


const obj = {
    name:'Sachin'
}

console.log(obj.name);
obj.name='Sourav';
console.log(obj.name);

//obj = {};