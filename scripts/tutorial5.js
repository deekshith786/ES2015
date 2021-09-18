function greetPerson(name) {
    var greet;
    if (name === 'deekshith') {
        greet = "hello deekshith";
    }
    else {
        greet = "hi there";
    }
    //this doesnt work becasuse the let keyword is not hoisted
    //var has funtional scope and let has block scope
    console.log(greet);
    var x = 11;
    var y = 22;
    if (x == 11) {
        var x = 111; // var keyword funtional scope
        var y_1 = 222; // let keyword block scope 
        console.log(x);
        console.log(y_1);
    }
    console.log(x);
    console.log(y);
    // let varible cannot be used before declatarion because it doesnt support hoisting
    // let varible cannot be re-declared but it can be in differnt block
    // is valid
    var a = 10;
    var a = 20;
    // not valid
    var p = 30;
    // let p = 40;
}
greetPerson("deekshith");
//# sourceMappingURL=tutorial5.js.map