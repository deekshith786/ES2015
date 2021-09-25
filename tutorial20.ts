// for of loop 

let colors: Array <string> = ["red", "green", "blue"];

// general method in js
for(let i in colors)
    console.log(colors[i]);
    
// in the es2015 this directly gives the element instead of iterating through the index
for(let i of colors)
    console.log(i);


let myname = "deekshith"
for(let letter of myname)
    console.log(letter);
    