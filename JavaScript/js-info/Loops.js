/*LOOPS:execute a block of code as long as certain condition is true.
for:-
while-:
do-while:-
*/
/*//For-loops through a block of code a number of times.
// for(initialization;ConditionRule;increment){}
for(i=0;i<5;i++){
    console.log(i);
}
//infinite loop that is '0' 
for(i=0;i<5;){
    console.log(i);
}
//This will give error
for(;;i++){
    console.log(i);
}
//inifinite loop starts from 0 to so on.... it will increment
for(i=0;;i++){
    console.log(i);
}

let i = 0; // we have i already declared and assigned
for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}
//
let i = 0;
for (; i < 3;) {
  alert( i++ );
}
//infinite loop
for (;;) {
  // repeats without limits
}
*/
//-----------------------------------------------------------------------
// while
// while (condition) {
//     // code
//     // so-called "loop body"
//   }
// let i=3;
// while(i){//(i!=0)
//     console.log(i);
//     i--;
// }
// let i1 = 0;
// while (i1 < 3) { // shows 0, then 1, then 2
//   alert( i1 );
//   i1++;
// }
//---------------------------------------------------------------------
// do-while-
//do{
//   loop body
// }while(condition)
// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<3);
//----------------------------------------------------------------
//break:It stops the whole loop.
//continue:It stops the current iteration and forces the loop to start a new one (if the condition allows).
for (let i = 0; i < 10; i++) {
    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
    console.log(i); // 1, then 3, 5, 7, 9
  }
  //without continue;
  for(let j=0;j<10;j++){
    if(j%2){
        console.log(j);
    }
  }