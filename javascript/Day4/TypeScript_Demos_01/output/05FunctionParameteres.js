"use strict";
function Mult(x, y) {
    if (x === void 0) { x = 1; }
    if (y === void 0) { y = 1; }
    return x * y;
}
console.log(Mult(4, 5));
console.log(Mult(4));
console.log(Mult());
