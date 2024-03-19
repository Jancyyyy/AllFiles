//mom-mom
const prompt=require("prompt-sync")();
function ispalin(str){
    // let lowercasestring=str.toLowerCase();//Mom=mom
    // let length=lowercasestring.length;//3
    // for(let i=0;i<Math.floor(length/2);i++){//2
    //     if(lowercasestring[i]!==lowercasestring[length-i-1]){
    //         return false;
    //     }
    // }
    // return true;
    const splitstr=str.split('');
    const revstr=splitstr.reverse();
    const joinstr=revstr.join('');
    if(joinstr==str)
    console.log("palin");
  else
    console.log("not a palin")
}
let str=prompt('enter the string: ');
ispalin(str);
// if(ispalin(str)){
//     console.log("palindrome");
// }
// else{
//     console.log("Not palindrome");   
// }