// readline - provides an interface for reading data from a Readable 
// stream (process.stdin) one line at a time

const readline = require('readline');
//console.log(readline);

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// r1.question("Enter a number ",(input) =>{
//     console.log(`You entered ${input}`);
//     r1.close();
// })

//console.log('\nlast line!');

// r1.question("Enter a first number ",(input1) =>{
//     r1.question("Enter a second number ",(input2) =>{
//         var sum = parseInt(input1) + parseInt(input2);
//         console.log(`Result is: ${sum}`);
//     r1.close();
//     })
// })

// // ------ Implement this with promises
// function enterNumberOne() {
//     return new Promise((resovle, reject) => {
//         r1.question("Enter a fisrt number ", (input) => {
//             var num = parseInt(input);
//             resovle(num);
//         })
//     })
// }


// function enterNumberTwo(n1) {
//     return new Promise((resovle, reject) => {
//         r1.question("Enter a second number ", (input) => {
//             var num = parseInt(input);
//             resovle([n1, num]);
//         })
//     })
// }

// function add([n1,n2]){
//     var sum = n1+n2;
//     console.log(`Result is : ${sum}`);
//     r1.close();
// }

// enterNumberOne().then(enterNumberTwo).then(add);

// ------------------ Async Await
function enterNumber(message) {
    return new Promise((resovle, reject) => {
        r1.question(message, (input) => {
            var num = parseInt(input);
            resovle(num);
        })
    })
}

( async function(){
    var n1 = await enterNumber('Enter a first number: ');
    var n2 = await enterNumber('Enter a second number: ');
    var sum = n1+n2;
    console.log(`Result is : ${sum}`);
    r1.close();
})();