[Friday 2:39 PM] Abhijeet Gole
PS D:\> node just

Sourav

{ street: 'M G Road', city: 'Kolkata', state: 'West Bengal' }

PS D:\>
[Friday 2:44 PM] Abhijeet Gole
 
let customer = {
    name:'Sourav',
    address:{
        street:'M G Road',
        city:'Kolkata',
        state:'West Bengal'
    }
}
 
// let {name,address} = customer;
 
// console.log(name);
// console.log(address);
 
let {
    address:{city:city},
    address:{state:state}
} = customer;
console.log(city);
console.log(state);
 
var {x=99,y=88} = {x:123};
console.log('x '+x+' y '+y)
 
var list =[11,22];
 
var [a=1,b=2,c=3,d] = list;
 
console.log(a === 11);
console.log(b === 22);
console.log(c === 3);
console.log(d === undefined);