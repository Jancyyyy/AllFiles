//ci=p*(1+r/n)(nt)-p
const prompt=require("prompt-sync")();
function compoundinterest(){
    let p=prompt("enter p");
    let r=prompt("enter r");
    let n=prompt("enter n");
    let t=prompt("enter t");
    let z=Math.pow((1+(r/n)),(n*t));
    let ci=(p*z)-p;
    console.log(ci);
}
compoundinterest();