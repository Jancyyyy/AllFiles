const prompt=require("prompt-sync")();
function Factorial(){
    let n=prompt("enter a number: ");
    if(n<0){
        console.log("no negative numbers")
    }
    else if(n==0){
        console.log("1");
    }
    else {
        fact=1;
        for(i=1;i<=n;i++){
            fact=fact*i;//1*2*3*4*5
        }
        console.log(fact);
    }
}
Factorial();

/*INPUT number

SET factorial := 1, i := 1

WHILE i <= number DO

COMPUTE factorial := factorial * i

INCREASE i by 1

END LOOP

PRINT factorial

*/