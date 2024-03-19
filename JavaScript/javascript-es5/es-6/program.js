//Let-outside of the box we cannot access it will show error
{
    let d=10;
    d=20
    console.log(d)
}//console.log(d)

//const-const is like constant we cannot change the value once it is assigned
const d1=10
// d1=20;
console.log(d1)

//Arrow Function-
const user=ele=> {return ele+6;}
var op=user("jancy ")
console.log(op)
//classes-




//For Of-
const arr=[1,2,3,4,5,6]
for(const a of arr){
    console.log(a)
    // console.log(arr)
}
//Default parameter-
 function user1(name,age=22){
    console.log(name+" "+age)
 }
 user1('jancy',23)

 //Rest Operator-Rest of values
 function user1(name1,...remaining){
    console.log(name1+" "+ remaining)
 }
 user1('jancy',22,123,'jancu','jgd',900,'fghb','hh')

 //Spread Operator-spread one Array values to another Array using spread Operator
 let arr1=[1,2,3];
 let arr2=[4,5,6];
 let arr3=[...arr1,...arr2]
 console.log(arr3)

 //Destructing-The data in a Array/Object if we want to assign for a specific/particular variable
 let person={
    Name:'jancy',
    Age:22,
    Mail:'janu@gmail.com'
 }
 const {Name,Age,Mail}=person;
 console.log(Mail)