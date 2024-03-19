/*An object can be created with figure brackets 
{…} with an optional list of properties.
A property is a “key: value” pair
where key is a string (also called a “property name”),
and value can be anything.


object syntaxs:
// let user={};// "object constructor" syntax
// let user1 = new Object();// "object literal" syntax*/

// let user={
//     name:'jancy',
//     age:22,
//     "company jancy":true,
// }
// console.log(user)
// //delete a property in user
// delete user["name"];
// console.log(user)
//Computed properties:
//We can use square brackets in an object literal, when creating an object. That’s called computed properties.
// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };
// alert( bag.apple ); // 5 if fruit="apple"
//without shorthand
function user(name,age){
    return{
        name:name,
        age:age,
    };
}
let userr=user('jancy',22);
console.log(userr);
//with shorthand
function user1(name1,age1){
    return{
        name1,
        age1,
    };
}
let userr1=user1('jancyyyyyy',22);
console.log(userr1)
//property names limitations
let obj={
    for:1,
    let:2,
    return:3
}
console.log(obj.for+obj.let+obj.return)
//in property
let names={n:'jancy',a:22};
console.log("n" in names);
let key="a";
console.log("a" in names)
//use of in is
//most of the time the comparison with undefined works fine. But there’s a special case when it fails, but "in" works correctly.
let obj1={
    test:undefined,
}
console.log(obj1.test)
console.log("test" in obj1)
//for...in loop
let user2={
    name2:'jancy',
    age2:22,
    working:true,
}
for(let key in user2){
    console.log(key);
    console.log(user2[key])
}
//will we get numbers in order=yes
let codes={
    "+3":'zensar',
    "+41":"congizant",
    "+6":'wipro',
    "+1":'accenture',
    "+0":'tcs',
}
for(let key1 in codes){
// console.log(key1)
// console.log(codes[key1])
console.log(+key1)

}