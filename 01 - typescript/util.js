define(["require", "exports"], function (require, exports) {
    var text = document.getElementById('log');
    function print(line) {
        text.value += (line + '\n');
    }
    exports.print = print;
});
