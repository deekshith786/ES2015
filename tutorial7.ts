for( let i=0; i<5;i++)
    setTimeout(function(){console.log(i);}, 1000)

// let keyword is block scope and not hoisted

// const keyword is also block scope and not hoisted as well
// const keyword cannot be changed once assigned and they must be initialized when declared

let number1;
const number2 = 15;

// object with const keyword
const obj1 = {
      name:"deekshith"
};
console.log(obj1.name);

// this cannot be done as its a constant
// obj1 = {}

// this is possible, we cannot assign the new object to the obj1 because of const but can the value can be changed 
obj1.name = "dixit"


 
