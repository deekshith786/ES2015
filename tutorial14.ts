// spread opeator in ES2015
// It is completely opposite of the REST opertor 

// REST = combines varirable number of Elemets as single Array
// SPREAD = takes an array and splits them into individual elements  

let displaycolors = (message, ...colors) => {
    console.log(message);
    // console.log(colors);
    for( var i in colors)
        console.log(colors[i]);
    }

// Array of colors 

const colorsArray = ['orange ', 'yellow', 'red'];
displaycolors("using the SPREAD operator", ...colorsArray)

// Both of them look completely identical in the syntax manner
// REST operator is declared during the declaration of the function
// SPREAD operator is declared during the function call

