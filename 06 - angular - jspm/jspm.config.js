System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*",
    "app/*": "dist/*"
  },
  bundles: {
    "build.js": [
      "app/index.module",
      "github:angular/bower-angular@1.4.8",
      "app/main/main.controller",
      "github:angular/bower-angular@1.4.8/angular"
    ]
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.8"
  }
});
