function greetPerson(name){
    
    let greet;
    if(name === 'deekshith'){
        greet = "hello deekshith";
    } else{
       greet = "hi there";
    }
    //this doesnt work becasuse the let keyword is not hoisted
    //var has funtional scope and let has block scope
    console.log(greet);
    

    var x = 11
    var y = 22
    if(x == 11)
    {
        var x = 111; // var keyword funtional scope
        let y = 222; // let keyword block scope 
        console.log(x);
        console.log(y);        
    }
    console.log(x);
    console.log(y);

    // let varible cannot be used before declatarion because it doesnt support hoisting
    // let varible cannot be re-declared but it can be in differnt block

    // is valid
    var a = 10
    var a = 20

    // not valid
    let p = 30;
    // let p = 40;
}

greetPerson("deekshith");