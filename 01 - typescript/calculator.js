define(["require", "exports"], function (require, exports) {
    var Calculator = (function () {
        function Calculator(serial) {
            this.serial = serial;
        }
        Calculator.prototype.toString = function () {
            return this.serial;
        };
        Calculator.prototype.sum = function (a, b) {
            return (a + b);
        };
        return Calculator;
    })();
    exports.Calculator = Calculator;
});
