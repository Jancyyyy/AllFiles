var arr1;
arr1 = [1, 2, 3, 4, 5];
// var arr2:number[];
// arr2 = [10,20,30,40,50];
for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
    var ele1 = arr1_1[_i];
    console.log(ele1);
}
// for(let ele2 of arr2){
//     console.log(ele2)
// }
// // Type Alias
// type Employee = {
//     id:number,
//     name:string,
//     city:string
// }
// //var empList:Array<Employee>;
// var empList:Employee [];
// empList = [
//     { id: 1, name: "Manish", city: "Pune" },
//     { id: 2, name: "Ramakant", city: "Delhi" },
//     { id: 3, name: "Abhijeet", city: "Pune" },
//     { id: 4, name: "Subodh", city: "Mumbai" },
//     { id: 5, name: "Abhishek", city: "Mathura" }
// ];
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
// var ids = empList.map(e => e.id);
// console.log(ids);
