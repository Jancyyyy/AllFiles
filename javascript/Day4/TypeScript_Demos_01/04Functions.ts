// Functions are same way we do it in ECMAScript
// Function Declaration Syntax
// Function Expression Syntax
// Arrow Function

// TypeScript - any / never/ unknown / void

// let result:any; // dynamic result

// function get(n){
//     if(n%2==0){
//         return 10;
//     }else{
//         return 'ten';
//     }
// }

// result = get(50);
// console.log(result)
// console.log(typeof result)

// let mult = (x:number,y:number):void =>{console.log('Multiplication is '+x*y)};
// mult(4,5);
// let multII = (x:number,y:number):number =>x*y;
// console.log('Result is '+multII(4,5));

// function iterate():never{
//     let i = 1;
//     while(true){
//         console.log(i++);
//     }
// }

// iterate();