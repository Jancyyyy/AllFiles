// When to Use Each:
// Use if-else when you have multiple conditions, complex logical expressions, or need more flexibility in the conditions.

// Use switch when you have a single expression with multiple possible values to check, and you want a cleaner and more concise syntax.
//if-“If” statements: where if a condition is true it is used to specify execution for a block of code.
// syntax:-if (condition) {
//     //  block of code to be executed if the condition is true
//   }
if(10>5){
    console.log("if block");
}
//if-else
/*
if(condition){
    //code will excute if the condition is true;
}else{
    //code will excute if the condition is false;
   
}*/
//“Else” statements: where if the same condition is false it specifies the execution for a block of code.
if("cat"==="dog"){
    console.log("if-block");
}
else{
    console.log("if-else-block");
}
//if else-else:
//“Else if” statements: this specifies a new test if the first condition is false.
let a=-2;
if(a==0){
    console.log("if-block");
}
else if(a>0){
    console.log("else-if-block");
}
else{
    console.log("else-block");
}
//conitional operator '?'
let b=-2;
let result=b>0?"true":"false";
console.log(result);
//mutlipe -'?'
let res=(b>a)? "b is greater than a"
:(b<a)? "b is less than a"
:(a==b)? "a is equal to b"
:"a is not a number";
console.log(res);