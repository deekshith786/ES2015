// this keyword
var employee = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () { console.log(_this.id); }, 1000);
    }
};
employee.greet();
//# sourceMappingURL=tutorial11.js.map