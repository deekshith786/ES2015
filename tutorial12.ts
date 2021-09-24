// default parameters

// this cannot be happend  in js

// let getValue = (value) => console.log(value);
// getValue()

// in es6 we can achieve this using the default parameters
let percentBonus = () => 0.1;
let getnewvalue = (value=125, bonus=value*percentBonus() ) => console.log(value + bonus);
getnewvalue()
getnewvalue(500);
getnewvalue(111,222); 

