System.register("app/main/main.controller", [], function(exports_1) {
  var MainController;
  return {
    setters: [],
    execute: function() {
      MainController = (function() {
        function MainController() {
          this.greeting = "hello boys!";
        }
        return MainController;
      })();
      exports_1("MainController", MainController);
    }
  };
});

System.register("app/index.module", ["app/main/main.controller"], function(exports_1) {
  var main_controller_1;
  return {
    setters: [function(main_controller_1_1) {
      main_controller_1 = main_controller_1_1;
    }],
    execute: function() {
      angular.module('demo', []).controller('MainController', main_controller_1.MainController);
    }
  };
});

//# sourceMappingURL=build.js.map