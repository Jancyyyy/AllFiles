//objects methods "this":
let user={
    name:'jhon',
    age:22,
}
user.func1=function(){
    // function func1(){
    console.log("hiiii")
}
// console.log(user.func1)
// user.func1=func1;
user.func1();
//----------------------------------------
let user1={
    name:'nitya',
    age:22,
}
function func2(){
    console.log('Hellooooo');
}
user1.func2=func2;
user1.func2();
/*//method shorthand 
//these objects do same
user2={
    func3:function(){
        console.log("Hello");
    }
};
// method shorthand looks better, right?
user2={
    func3(){
        console.log("Hello");
    }
}*/

//this in objects
// "this" refers to "current object
let user3={
    name:'nitya',
    age:22,

func4(){
    // "user" instead of "this"
    //alert(user.name); 
    console.log(this.name);
}
}
let admin=user3;
console.log(admin);
user3=null;
console.log(user3);
admin.func4();
// user3.func4();//ypeError: Cannot read property 'name' of null
//------------------------------------------------------
//if there are having 2 this
let u={name:'jancy'};
let u1={name:'nitya'};
function func(){
    console.log(this.name);
}
// using same function in two objects
u.f=func;
u1.f=func;
u.f();
u1.f();
//-------------------------------------------------
//Arrow functions have no “this”
let user4={
    name:"jancy",
    func5(){
        let arrow=()=>{console.log(this.name)}
        arrow()
    }
}
user4.func5();