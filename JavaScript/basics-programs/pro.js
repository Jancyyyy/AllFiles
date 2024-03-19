// Array:https://www.geeksforgeeks.org/set-vs-map-in-javascript/
var arr=
[{id:'1',
name:'raj'},
{id:'2',
name:'karan'},
{id:'3',
name:'raj2'},
{id:'4',
name:'raj4'},
{id:'5',
name:'raj4'},
{id:'8',
name:'maya'},
{id:'7',
name:'maya'},
{id:'8',
name:'sania'}
]
//printing the unique names in an array
//set is used to store elements uniquely
//the data is stored as a key-value pair 

    // let uniqueNames=new Set(arr.map(item=>item.name))
    // let uniqueArray=[...uniqueNames];
    // console.log(uniqueArray)

//Printing the objects that have unique name

//     const unique={};
//     array.forEach((item) =>{
//         if(!unique[item.name]){
//             unique[item.name]=item;
//         }
//     });
//     return Object.values(unique);
// const uniqueArray = toPrintUniqueValues(arr);
// console.log(uniqueArray);

//Insertion

// 1.Adding to the Beginning of the Array
// var newobj={id:'10',name:'Jancy'}
// arr.unshift(newobj);
// console.log(arr);

// 2.Inserting at the specific index
// var newObj={id:'6',name:"Aditya"}
// arr.splice(7,0, newObj);

// 3.Adding ta the end of the Array
// var newObj={id:'11',name:"Nitya"}
// arr.push(newObj);

//Searching an element

// 1.By using an id
// const key='8';
// const searchid=arr.find(obj=>obj.id===key);
// console.log(searchid);

// 2.By using name
// const key="sania";
// const searchname=arr.find(obj=>obj.name===key);
// console.log(searchname);

//Sorting an array

// 1.Sorting using id
// arr.sort((a,b)=>a.id.localeCompare(b.id));//
// console.log(arr);

// 2.sorting by name
// arr.sort((a,b)=>a.name.localeCompare(b.name));
// console.log(arr);


automatic designs