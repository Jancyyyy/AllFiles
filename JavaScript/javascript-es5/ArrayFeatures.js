// var i=2;
// while(i<6){
//     console.log(i);
//     ++i;
// }
 
//isArray():
var data=["jancy",1,2,3]
console.log(Array.isArray(data))

//Map():
var data1=[1,2,5]
// data1.map(
//     function(ele){
//         console.log(ele)
//     }
// )
var op=data1.map(
    function(ele){
        return ele+1;
    }
)
console.log(op);

//filter():based on the it will return the value
var data2=[1,2,3,4,5,6]
var op1=data2.filter(
    function(ele1){
        return ele1>2;
    }
)
console.log(op1)

//forEach
var data3=[1,2,9,7,6,6]
data3.forEach(
    function(ele2){
        console.log(ele2);
    }
)
//Every()-
var data4=[1,2,3,4,5,6]
var op2=data4.every(
    function(ele3){
        return ele3>0//each and every value should be greater than the given condition then it returns true if not false
    }
)
console.log(op2)
//Some()-any one of the value should be greater than the given condition then it returns true if not false
var data5=[1,2,3,4,5,6];
var op3=data5.some(
    function(ele4){
        return ele4>6
    }
)
console.log(op3)
//IndexOf()-
var data6=[1,2,3,4,5,6];
console.log(data6.indexOf(2))
//LastIndexOf
var data7=[1,2,3,4,3,6];
console.log(data7.lastIndexOf(3))