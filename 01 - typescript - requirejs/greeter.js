define(["require", "exports"], function (require, exports) {
    var Greeter = (function () {
        function Greeter(nowYouSeeMe, nowYouDont) {
            this.nowYouSeeMe = nowYouSeeMe;
            this.nowYouDont = nowYouDont;
        }
        Greeter.prototype.greet = function () {
            return this.nowYouSeeMe + " " + this.nowYouDont;
        };
        return Greeter;
    })();
    exports.Greeter = Greeter;
});
