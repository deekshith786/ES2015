// for of loop 
var colors = ["red", "green", "blue"];
// general method in js
for (var i in colors)
    console.log(colors[i]);
// in the es2015 this directly gives the element instead of iterating through the index
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var i = colors_1[_i];
    console.log(i);
}
var myname = "deekshith";
for (var _a = 0, myname_1 = myname; _a < myname_1.length; _a++) {
    var letter = myname_1[_a];
    console.log(letter);
}
//# sourceMappingURL=tutorial20.js.map