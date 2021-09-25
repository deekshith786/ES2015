// traditional method of using the object in the js 

// let firstname = "deekshith"
// let lastname = "bing"

// let person = {
//     firstname: firstname,
//     lastname:lastname
// }

// console.log(person.firstname);
// console.log(person.lastname);


// in the ES6

// when the property name is same as the variable name then we can write it as single name without assigning

let firstname = "deekshith"
let lastname = "bing"

let person = {
    firstname,
    lastname
}

const creatfunction = (firstname, lastname, age) => {
    let fullname = firstname + " " + lastname;
    return { fullname, firstname, lastname, isSenior: () =>age>60 };
}

let obj = creatfunction("ram", "srinu", 82)

console.log(obj.firstname);
console.log(obj.lastname);
console.log(obj.fullname);
console.log(obj.isSenior());

