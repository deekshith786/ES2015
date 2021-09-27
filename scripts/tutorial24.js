// Regular class declaration eith a constrcutor  
var myClass = /** @class */ (function () {
    function myClass(myName, yourName) {
        this.myName;
        this.yourName;
    }
    return myClass;
}());
;
// class with  constrcutor having varaibles declared inside
var yourClass = /** @class */ (function () {
    function yourClass(ftName, ltName) {
        this.ftName = ftName;
        this.ltName = ltName;
        console.log(this.ftName + this.ltName);
    }
    return yourClass;
}());
//# sourceMappingURL=tutorial24.js.map