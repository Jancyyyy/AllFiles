//OR
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
let a=12;
if(a%2 || a%10 ){
    console.log('a is divided');
}
// Getting the first truthy value from a list of variables or expressions.
let firstName = "";
let lastName = "";
let nickName = "SuperCoder"; 
console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder
//&&
console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

if(a%2 && a%10 ){
    console.log('a is divided');
}
//!(NOT)
console.log( !true ); // false
console.log( !0 ); // true
console.log(!null);//false
console.log(!!null);//true
alert( !!"non-empty string" ); // true