const prompt=require("prompt-sync")();
function prime(){
    let number=prompt("enter a number");
    if(number==1){
        console.log("the number is prime number")
    }
    else if(number>1){
        for(i=2;i<number;i++){
            //6
           if(number%i==0){//6 - 0
            console.log("its not prime");
            return ;
           }
        }
        console.log("prime");
    }
}
prime();