define(["require", "exports"], function (require, exports) {
    "use strict";
    var text = document.getElementById('log');
    function print(line) {
        text.value += (line + '\n');
    }
    exports.print = print;
});
