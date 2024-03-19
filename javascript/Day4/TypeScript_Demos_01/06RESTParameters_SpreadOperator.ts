
// let numArr: number[] = [11,22,33,44,55];
// let [a,b] = numArr;

// console.log('a '+a+' b '+b)

// let emp = {id:1,name:'Rahul',city:'Bengaluru'};

// let {id,city} = emp;
// console.log('id '+id+' city '+city)


// ... is called REST Parameters - rest all arugments / parameters are received by args only
// because ... (REST Parameter).
function Average(...args:number []){
    if(args.length > 0){
        let sum = args.reduce((a,n) => a+n);
        return sum / args.length;
    }
    else 
        return 0;
}

console.log(Average());
console.log(Average(1));
console.log(Average(1,2));
console.log(Average(1,2,3));
console.log(Average(1,2,3,4));
console.log(Average(1,2,3,4,5));
console.log(Average(1,2,3,4,5,6));

// REST Parameter - Whenever ... (eclipse) is on the left hand side of an assignment operator
    // i.e. REST Parameter

//------------------------ Spread Operator
// Spread Operator
// Whenever ... (eclipse) is on the right hand side of an assignment operator
// i.e. Spread Operator

var numbers = [10,20,30,40];

console.log(numbers);
console.log(...numbers);

//console.log(Average(...numbers));