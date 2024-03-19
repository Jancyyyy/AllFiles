//Stringify()-it will convert object into json
var data={
    name:'janu',
    age:22
}
console.log(data)//{ name: 'janu', age: 22 }
var json=JSON.stringify(data);
console.log(json);//{"name":"janu","age":22}