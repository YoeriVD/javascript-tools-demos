define(["require", "exports", './greeter', './util', './calculator'], function (require, exports, greeter_1, util_1, calculator_1) {
    var greeter = new greeter_1.Greeter("John", "Ghost");
    util_1.print(greeter.nowYouSeeMe);
    util_1.print(greeter.greet());
    //let seconds = 0;
    //let interval = window.setInterval(() => print("Second: " + ++seconds), 1000);
    var calculator = new calculator_1.Calculator("XYZ123");
    util_1.print(calculator.toString());
    util_1.print('the sume of 3 and 4 is: ' + calculator.sum(3, 4));
});
