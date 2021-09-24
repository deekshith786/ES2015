
// in the previous js 

// let printAllColors = () => { for (let i in arguments) console.log(arguments[i]); }


// let message = "list of colors";
// printAllColors(message, "red");
// printAllColors(message, "red", "blue");
// printAllColors(message, "red", "blue", "green");





// now in es6 we have REST operator which is as follows

// let printAllColors = (message, ...any-name-of-choice) => { for (let i in arguments) console.log(arguments[i]); }

let printAllColors = (message, ...colors) => {console.log(message); console.log(colors); for (let i in colors) console.log(colors[i]); }

// this colors wil convert the arguments into a list of array and then we iterate through  that array in the for loop

let message = "list of colors";
printAllColors(message, "red");
printAllColors(message, "red", "blue");
printAllColors(message, "red", "blue", "green");

// REST operator is used to reperesnt the variable number of parameters into an array