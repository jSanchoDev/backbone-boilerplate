define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
    var Cocktail = require("cocktail");



  // Defining the application router.
  var Router = Backbone.Router.extend({
    routes: {
      "*path": "home"
    },

    home: function() {
      console.log("Welcome to your / route.");
    }
  });

  module.exports = Router;
});
