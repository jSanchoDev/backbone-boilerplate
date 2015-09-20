define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");

  // Defining the application router.
  var Router = Backbone.Router.extend({
    routes: {
      "*path": "home"
    },

    home: function() {
      console.log("Welcome to your / route.");

        var messages = [];
        var socket = io.connect('http://localhost:3700');
        var field = document.getElementById("field");

        socket.on('message', function (data) {
            if(data.message) {
                messages.push(data.message);
                var html = '';
                for(var i=0; i<messages.length; i++) {
                    html += messages[i] + '<br />';
                }
            } else {
                console.log("There is a problem:", data);
            }
        });
    }
  });

  module.exports = Router;
});
