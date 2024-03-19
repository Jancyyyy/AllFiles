// var arr1:Array<number>;
// arr1 = [1,2,3,4,5];
// //var empList:Array<Employee>;
var empList;
empList = [
    { id: 1, name: "Manish", city: "Pune" },
    { id: 2, name: "Ramakant", city: "Delhi" },
    { id: 3, name: "Abhijeet", city: "Pune" },
    { id: 4, name: "Subodh", city: "Mumbai" },
    { id: 5, name: "Abhishek", city: "Mathura" }
];
// console.log('array.forEach')
// empList.forEach((item,index)=>{
//     console.log(`${index}      ${JSON.stringify(item)}`);
// })
// console.log('for in loop')
// for(const index in empList){
//     console.log(`${index}      ${JSON.stringify(empList[index])}`);
// }
// console.log('for of loop')
// for(const item of empList){
//     console.log(`${JSON.stringify(item)}`);
// }
// console.log('for of loop with entries()')
// for(const item of empList.entries()){
//     console.log(`${JSON.stringify(item)}`);
// }
// console.log('for of loop with entries() and index')
// for(const [index,item] of empList.entries()){
//     console.log(`${index}       ${JSON.stringify(item)}`);
// }
// let r1 = empList.find(e => e.id === 4);
// console.log(r1);
// let r2 = empList.findIndex(e => e.id === 4);
// console.log(r2);
// var names = empList.map(e => e.name.toUpperCase());
// console.log(names);
var ids = empList.map(function (e) { return e.id; });
console.log(ids);
