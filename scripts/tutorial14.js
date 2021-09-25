// spread opeator in ES2015
// It is completely opposite of the REST opertor 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// REST = combines varirable number of Elemets as single Array
// SPREAD = takes an array and splits them into individual elements  
var displaycolors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    // console.log(colors);
    for (var i in colors)
        console.log(colors[i]);
};
// Array of colors 
var colorsArray = ['orange ', 'yellow', 'red'];
displaycolors.apply(void 0, __spreadArray(["using the SPREAD operator"], colorsArray, false));
// Both of them look completely identical in the syntax manner
// REST operator is declared during the declaration of the function
// SPREAD operator is declared during the function call
//# sourceMappingURL=tutorial14.js.map