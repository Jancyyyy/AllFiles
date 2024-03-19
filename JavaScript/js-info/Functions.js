// //function declaration
// //It is a resuable block of code that perform specific task.
// function showmessage(){
//     console.log('hello ');
// }
// showmessage();
// //-----------------------------------------------------
// //local variables
// function showMessage() {
//     let message = "Hello, I'm JavaScript!"; // local variable
  
//     console.log( message );
//   }
//   showMessage(); // Hello, I'm JavaScript!
//   console.log( message ); // <-- Error! The variable is local to the function
// //----------------------------------------------------
//   //outer variables
//   let userName1 = 'John';

// function showMessage1() {
//   let message1 = 'Hello, ' + userName1;
//   console.log(message1);
// }

// showMessage1(); // Hello, John
// //------------------------------------------------------------------------
//Returning a value:
function sum(a,b){
    return a+b;
}
// let res=sum(2,3); console.log(res);
console.log(sum(2,3));
//we can return more than multiple lines
// syntax:return (
//     some + long + expression
//     + or +
//     whatever * f(a) + f(b)
//     )

// Function Declaration
function sum(a, b) {
    return a + b;
  }
  // Function Expression
let sum = function(a, b) {
    return a + b;
  };
  