
// function hello_ts(name:string){
//     console.log('Hello , ',name);
// }

// hello_ts('Manish');
// //hello_ts();
// hello_ts('Manish','Mumbai');

// // Optional Parameters

// function Add(x?:number,y?:number):number{
//     x = x || 0;
//     y = y || 0;
//     return x+y;
// }

// console.log(Add(4,5));
// console.log(Add(4));
// console.log(Add());

// Default Parameters
function Mult(x:number=1,y:number=1):number{    
    return x*y;
}

console.log(Mult(4,5));
console.log(Mult(4));
console.log(Mult());