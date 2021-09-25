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
var firstname = "deekshith";
var lastname = "bing";
var person = {
    firstname: firstname,
    lastname: lastname
};
var creatfunction = function (firstname, lastname, age) {
    var fullname = firstname + " " + lastname;
    return { fullname: fullname, firstname: firstname, lastname: lastname, isSenior: function () { return age > 60; } };
};
var obj = creatfunction("ram", "srinu", 82);
console.log(obj.firstname);
console.log(obj.lastname);
console.log(obj.fullname);
console.log(obj.isSenior());
//# sourceMappingURL=tutorial15.js.map