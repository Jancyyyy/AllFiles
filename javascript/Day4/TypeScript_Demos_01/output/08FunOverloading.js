"use strict";
function hello() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 0) {
        console.log('Hello World!');
    }
    else if (args.length === 1) {
        console.log("Hello ".concat(args[0]));
    }
    else
        throw new Error('Invalid Number of Arguments!');
}
hello();
hello('Abhijeet');
