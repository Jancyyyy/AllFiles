"use strict";
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);
console.log(Color['Blue']);
console.log(Color[2]);
