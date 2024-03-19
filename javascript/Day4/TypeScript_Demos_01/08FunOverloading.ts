
// function hello(){
//     console.log('Hello World!');
// }

// function hello(name:string){
//     console.log(`Hello ${name}`);
// }

// still duplicate function error

// Overloading of the function

function hello():void;
function hello(name:string):void;

function hello(...args:string[]){
    if(args.length === 0){
        console.log('Hello World!');
    }else if(args.length === 1){
        console.log(`Hello ${args[0]}`)
    }else
        throw new Error('Invalid Number of Arguments!');
}

hello();
hello('Abhijeet');
//hello('Abhijeet','Synechron'); // Compile time error