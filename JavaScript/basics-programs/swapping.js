const prompt=require("prompt-sync")();
function swapping(){
    let a=prompt("enter a number");
    let b=prompt("enter b number");
    console.log("Before swapping",a,b);
    let temp;
    temp=a;
    a=b;
    b=temp;
    // a=a+b;
    // b=a-b;
    // a=a-b;
    // [a,b]=[b,a];
    // a=a^b;
    // b=a^b;
    // a=a^b;
    console.log("After swapping",a,b);
}
swapping();

/*1.Read first number, a.
2.Read second number,b.
3.Consider a temporary variable, temp.
4.Assign temp with a's value, temp=a.
5.Assign a with b's value, a=b.
6.Assign b with t's value, b=temp.
7.Print a,b*/


