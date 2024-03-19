const prompt = require("prompt-sync")();
function findlargestnumber(numbers){
    let largestnumber=numbers[0];
    for(let i=1;i<numbers.length;i++){
        if(numbers[i]>largestnumber){
            largestnumber=numbers[i];
        }
    }
    return largestnumber;
}
let input=prompt("enter the numbers:");
let numbers=input.split(',').map(Number);
let res=findlargestnumber(numbers);
console.log(res);


