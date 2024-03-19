"use strict";
var Program = (function () {
    function Program() {
    }
    Program.main = function (arg) {
        console.log("Hello, ".concat(arg));
    };
    return Program;
}());
Program.main('Zensar');
