//string comparisons
console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true
//comp of diff types
console.log('2'>1);//true
console.log(true==0);//false
console.log(false==0)//true
//strict equality
console.log( '' == false ); // true
console.log( 0 == false ); // true
//=== checks type also not only numbers
console.log( 0 === false ); // false, because the types are different
console.log( null === undefined ); // false
console.log( null == undefined ); // true
console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true
