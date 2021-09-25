var _a;
// in es2015 it is possible to have spaces between in object properties
// but the only condition is we need to enclose it in the double quotes 
// and when we call it we need to used [] brackets instead of . notation
var ln = "last name";
var allpersons = (_a = {
        "first name": "chandler"
    },
    _a[ln] = "bing",
    _a);
console.log(allpersons);
//# sourceMappingURL=tutorail16.js.map