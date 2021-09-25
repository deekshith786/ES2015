// Destrcturing in es2015
// destructuring an Array
var allemployees = ["chandler", "bing", "male"];
// let [fname, lname, male] = allemployees;
var names = allemployees.slice(0);
var fname = allemployees[0], lname = allemployees[1], _a = allemployees[2], gender = _a === void 0 ? "male" : _a;
console.log(fname);
console.log(lname);
console.log(gender);
// console.log(names);
// if any value is not allocated 1: 1 in the array then it will take valueasundefined
// if we want only any single value from the left hand side then we can just place the commans
// we can also use the rest operator  
// we can also use the default value in the destructure
//# sourceMappingURL=tutorial17.js.map