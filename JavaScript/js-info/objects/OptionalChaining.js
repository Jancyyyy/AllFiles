// let user={};
// console.log(user.address.street);//Cannot read properties of undefined (reading 'street')
//if we are getting this error we should use '?' parameter
// let user={};
// console.log(user.address?user.address.street:undefined)
// if we are having more than one it will be risky(repeated names)
// let user={};
// console.log(user.address?user.address.street?user.address.street.name:null:null);//null
// this is confusing so instead of using this '&&'
// let user={};
// console.log(user.address&&user.address.street&&user.address.street.name)//undefined
/*optional chaining'?'
value?.prop:
works as value.prop, if value exists,
otherwise (when value is undefined/null) it returns undefined.*/
// ?. syntax makes optional the value before it, but not any further.
// let user=null;
// console.log(user?.address);//undefined
// console.log(user?.address.street);//undefined
// let user=null;
// let x=0;
// // console.log(++x);//1
// console.log(x++);//0
//other variants: ?.(),?.[]
// let userAdmin={
//     admin(){
//         console.log("I am admin");
//     }
// };
// let userGuest={};
// /*Then ?.() checks the left part: if the admin 
// function exists, then it runs (that’s so for userAdmin). 
// Otherwise (for userGuest) the evaluation stops without errors.
// */
// userAdmin.admin?.();//I am admin
// userGuest.admin?.();//no output(no method)
//
let key='firstName';
let user1={
    firstName:'john'
};
let user2=null;//{};
console.log(user1?.[key]);//john
console.log(user2?.[key]);//undefined
//delete user.name if user exists
// delete user?.user1;
