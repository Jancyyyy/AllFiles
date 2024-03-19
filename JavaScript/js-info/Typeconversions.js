//String Conversion
let value="true";
console.log(typeof value);//string
value=String(true);
//or value="true";
console.log(typeof value);

//Numeric  conversion
let str='123';
console.log(typeof str);//string
str=Number(str);
console.log(typeof str);//number
//boolean conversion
console.log(Boolean(1));//true
console.log(Boolean(0));//false-null,undefined,NaN, " "-space(false)
console.log(Boolean('hello'));//true
console.log(Boolean(""));//false