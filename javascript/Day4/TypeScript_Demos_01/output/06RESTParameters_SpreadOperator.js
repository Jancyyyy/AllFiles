"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function Average() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length > 0) {
        var sum = args.reduce(function (a, n) { return a + n; });
        return sum / args.length;
    }
    else
        return 0;
}
console.log(Average());
console.log(Average(1));
console.log(Average(1, 2));
console.log(Average(1, 2, 3));
console.log(Average(1, 2, 3, 4));
console.log(Average(1, 2, 3, 4, 5));
console.log(Average(1, 2, 3, 4, 5, 6));
var numbers = [10, 20, 30, 40];
console.log(numbers);
console.log.apply(console, __spreadArray([], __read(numbers), false));
