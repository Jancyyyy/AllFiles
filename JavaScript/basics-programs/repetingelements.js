let arr=[6,9,15,6,13,9,11,15];
let index=0,repArr=[];
const length=arr.length;
function Repeating(arr){
    for(let i=0;i<length-1;i++){
        for(let j=1+1;j<length;j++){
            if(arr[i]===arr[j]){
                repArr[index]=arr[i];
                index++
            }
        }
    }
    return repArr;
}
let res=Repeating(arr);
console.log(res);
// Repeating(arr);