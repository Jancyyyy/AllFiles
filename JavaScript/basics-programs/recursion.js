const somearr=['er','dcv','er','cv','vgh','jnd','vgh'];
const unqiuearray=(array)=>(
    [...new Set(array)]
) 
console.log(unqiuearray(somearr));

// const arr={
//     name:'jancy',
//     id:2,
//     company:'zensar'
// }
// delete arr.name;
// const json= JSON.stringify(arr)
// console.log(json);