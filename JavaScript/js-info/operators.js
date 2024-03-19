//operand=2+3 (2,3) are operands
//unary:which require one operand
//++,--,!
//binary:which require two operands
//arithmetic operators(+,-,/,%,*,**(pow))
// console.log(2**2)///4
//comparison operators(<,>,>=,<=)
//assignment operators(=)
//operand:which require three operands
// conditional operator(?...)
// conditional expression-true or false
console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"
console.log('1' + 2 + 2); // "122" and not "14"
console.log( 2 + 2 + '1'); // "41" 
console.log(2 + '1'+ 2); // "212"
console.log( '6' / '2' ); // 3, converts both operands to numbers
console.log( 6 - '2' ); // 4, converts '2' to a number
/*let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
console.log( +apples + +oranges ); // 5

// the longer variant
// console.log( Number(apples) + Number(oranges) ); // 5*/
let counter = 1;
let a = ++counter; // (*)
console.log(a); // 2

let counter1 = 1;
let a1 = counter1++; // (*) changed ++counter1 to counter1++
console.log(a1); // 1

let counter2 = 1;
counter2++; // 
++counter2;
console.log(counter2); // 3
