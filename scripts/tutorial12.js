// default parameters
// this cannot be happend  in js
// let getValue = (value) => console.log(value);
// getValue()
// in es6 we can achieve this using the default parameters
var percentBonus = function () { return 0.1; };
var getnewvalue = function (value, bonus) {
    if (value === void 0) { value = 125; }
    if (bonus === void 0) { bonus = value * percentBonus(); }
    return console.log(value + bonus);
};
getnewvalue();
getnewvalue(500);
getnewvalue(111, 222);
//# sourceMappingURL=tutorial12.js.map