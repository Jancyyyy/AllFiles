// Enum allow us to define a set of named constants.
// Enum - Enumeration - improve the readability of your program.

// in TypeScript

// Numerice Enum
// String Enum
// Heterogenous Enum - Combination of Numeric and String

// function Open(mode:string){
//     console.log(`File Opened in "${mode}" mode`);
// }

// function Open(mode:string){
//     switch(mode){
//         case 'Read':
//         case 'Write':
//         case 'ReadWrite':
//             console.log(`File Opened in "${mode}" mode`);
//             break;
//         default:
//             throw new Error('Wrong File Mode!');
//     }
// }

// Open('Read')
// Open('Write')
// Open('ReadWrite')
// Open('Sachin')

/*// Numeric Enum
//enum Mode{Read,Write,ReadWrite};
//enum Mode{Read,Write=10,ReadWrite};

// String Enum
// enum Mode{Read='Read',Write='Write',ReadWrite='ReadWrite'}

//Heterogenous Enum
enum Mode{Read='Read',Write=20,ReadWrite='ReadWrite',Close='Close'}


function Open(mode:Mode){
    console.log(`File Opened in "${mode}" mode`);
}

Open(Mode.Read)
Open(Mode.Write)
Open(Mode.ReadWrite)*/


enum Color{
    Red = 'RED',
    Green = 1,
    Blue
}

console.log(Color.Red)
console.log(Color.Green)
console.log(Color.Blue)

console.log(Color['Blue']); // 2
//Reverse Mapping
console.log(Color[2]); // Blue


