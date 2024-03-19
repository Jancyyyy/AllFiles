const prompt=require("prompt-sync")();
function lcm(){
    let num1=prompt("enter a number");
    let num2=prompt("enter a number");
    let max=(num1>num2)?num1:num2;
    while(true){
    if(max%num1==0 && max%num2==0){
        console.log(max);
        break;
    }
    max++;
}
}
lcm();
//4,6== 2(2,3),2(1,1)
// //
/*BEGIN          
NUMBER n1 , n2 , lcm;
OUTPUT "Enter first Number:";
INPUT n1
OUTPUT "Enter second Number:";
INPUT n2
lcm = (n1 > n2) ? n1 : n2;
WHILE (true) THEN
 IF (lcm % n1 == 0 && lcm % n2 == 0) THEN
      OUTPUT "The LCM of "+n1+"and "+n2+" is "+ lcm;
                    BREAK WHILE;
 END IF
 ++lcm;
END WHILE
END*/



















