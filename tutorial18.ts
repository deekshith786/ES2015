// for array to get destructured we use [] then fot the objects we use {}

// we can also create alias in the destructre
let employess ={
    Firstname: "chandler",
    Lastname: "ross",
    Gender: "male"
}

let {Firstname: f, Lastname: l, Gender: g} = employess

console.log(f);
console.log(l);
console.log(g);
