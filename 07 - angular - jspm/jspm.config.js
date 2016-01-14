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
      "app/main/main.controller"
    ]
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.8"
  }
});
