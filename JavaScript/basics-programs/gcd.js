const prompt=require("prompt-sync")();
// let highest;

function gcd(){
    let highest,i;
    let num1=prompt("enter first number");
    let num2=prompt("enter second number");
     for(let i=0;i<=num1 && i<=num2;i++){//6,8 
        if(num1%i==0 && num2%i==0)
        highest=i;
     }
    console.log(highest);

}
gcd();

/*
1:let a,b be the numbers
2:
*/