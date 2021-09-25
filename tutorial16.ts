// in es2015 it is possible to have spaces between in object properties
// but the only condition is we need to enclose it in the double quotes 
// and when we call it we need to used [] brackets instead of . notation
let ln = "last name";
let allpersons = {
    "first name": "chandler",
    [ln]: "bing"
};

console.log(allpersons["first name"]);
