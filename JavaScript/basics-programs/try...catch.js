


// //syntax

// try{
//     A try statement lets you test a block of code for errors. 
// }catch(error){
//     A catch statement lets you handle that error
// }

// 1.exception is an abnormal or unexpected condition that occurs 
//  during the runtime,and js provides various statements or a combination of 
//  statements to handle the exceptions. 


setTimeout(()=>{
    console.log('printing first line..')
},1000)
setTimeout(()=>{
    // console.log(name);
    console.log('printing second line..')
},2000)
try{
    // console.log(jancy);
    // console.log(name);
    const name=jancy();
    const name1=jancy1();

}catch(error){
    // console.log(error)
    // console.log(error.message)
    // console.log(error.name)
    console.log(error.stack)//it will show same error as error
}
catch(error1){
    console.log(error1);
}
// setTimeout(()=>{
//     console.log('printing third line..')
// },3000)
// setTimeout(()=>{
//     console.log('printing fourth line..')
// },4000)

// //2.

// try {
//     // Example of code that may throw an error
//     let result = 0 / 10; 
//     console.log('Result:', Result);
//   } catch (error) {
//     // Handling the error
//     console.error('Caught an error:', error.message);
//     // console.log(error);
//     // console.log(error.message);
//     // console.log(error.name);
//   } finally {
//     // Cleanup or additional code that runs regardless of an error
//     console.log('Cleanup or additional operations.');
//   }
  
//Types of Errors:
 
//3..Syntax Errors:
 
// These occur when the JavaScript engine encounters code that violates the language's syntax rules. They are usually detected during script parsing.
// try {
//   // Syntax error example
//   eval('alert("Hello World");');
// } catch (error) {
//   console.error('Caught a syntax error:', error.message);
// }

//4.Runtime Errors:during the execution of the program 
//they can be such as invalid operations, accessing undefined variables, or network issues.

// try {
//   // Runtime error example
//   let x = y + 10;
// } catch (error) {
//   console.error('Caught a runtime error:', error.message);
// }

//5.Logical Errors:These are the hardest to catch as they don't produce errors or exceptions. 
//Instead, they cause your program to produce incorrect results.

// try {
//   // Logical error example
//   let result = 10 / 0; 
//   console.log(result);
// } catch (error) {
//   console.error('Caught a logical error:', error.message);
// }

//Handling Error using return:
// function example(){
// try{
//     // jancy="name";
//     // console.log(jancy)
//     return jancy;
// }catch(error){
//     console.log('caught an error',error.message);
// }finally{
//     // console.log("Finally block executed")
//     return 'error occured';
// }
// // }
// const result=example();
// console.log(result);
// If/else is a control block. If apples are green - do something, else do something else. 
// Try/catch is also a control block but it handles the control of the program if an error occurs.