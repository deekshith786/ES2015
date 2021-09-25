// Destrcturing in es2015
// destructuring an Array

let allemployees: Array<string> = ["chandler", "bing", "male"];

// let [fname, lname, male] = allemployees;
let [...names] = allemployees;
let [fname, lname, gender="male"] = allemployees;


console.log(fname);
console.log(lname);
console.log(gender);

// console.log(names);

// if any value is not allocated 1: 1 in the array then it will take valueasundefined
// if we want only any single value from the left hand side then we can just place the commans
// we can also use the rest operator  
// we can also use the default value in the destructure