const prompt=require("prompt-sync")();
function Armstrong(){
let number=prompt("Enter the number ");
    let n=number.toString().length;
    let temp=number;
    let sum=0;
    while(temp>0)
    {
        let rem=temp%10;   //3    5    1
        sum+=Math.pow(rem,n);//3^3    5^3       1^3
         temp=parseInt(temp/10);//15   1    
    }
    console.log(sum);
    if(sum==number){
        console.log("It is an Armstrong number");}
    else{
        console.log("nope")
    }
}           
Armstrong();
/*https://technologystrive.com/flow-chart/armstrong-number
Step 1: Start
Step 2: Read number from User
Step 3: Declare Variable sum, temp, number
Step 4: Initialize Variable sum=0 and temp=number
Step 5: Repeat Until temp>=0
            5.1 sum=sum + cube of last digit i.e [(number%10)*(number%10)*(number%10)]
            5.2 number=number/10
Step 6: IF sum==number
            Print "Armstrong Number"
        ELSE 
            Print "Not Armstrong Number"
Step 7: Stop
*/