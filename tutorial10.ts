//  Arrow function : provided the shorts and consize syntax for writing funtions and simplyfy the behavior of the this keyword in js
// syntax

var examplefunction = function(){
    return 10;
}
console.log(examplefunction());


// in the arrow function 

const getArrowFunction = (d, bonus) => 25*d+bonus;

console.log(getArrowFunction(2,10));

console.log(typeof getArrowFunction);

