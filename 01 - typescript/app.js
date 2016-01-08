define(["require", "exports", './greeter', './util'], function (require, exports, greeter_1, util_1) {
    "use strict";
    var greeter = new greeter_1.Greeter("John", "Ghost");
    util_1.print(greeter.nowYouSeeMe);
    util_1.print(greeter.greet());
    var seconds = 0;
    var interval = window.setInterval(function () { return util_1.print("Second: " + ++seconds); }, 1000);
});
