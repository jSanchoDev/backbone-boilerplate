define([], function(){

    var ChatCore = function(){

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
                console.log("Message received", data.message);
            } else {
                console.log("There is a problem:", data);
            }
        });

        var addMessage = function(text){
            socket.emit('send', { message: text });
        };

        return {
          say: addMessage
        }
    };

    return ChatCore();
});