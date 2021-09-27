// in js
var x = 10;
var y = "deekshith";
var z = true;

//in es2015 declaration
var m: number = 10;
var n: string; 

// typescript automatically gets the information of the varaible type by inferance

// n = 10;   this is not possible as n is a type string 

var info: any;
info = 10;
info = true;
info = "hello"
