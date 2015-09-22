define(["mixins/storage"], function(storage){

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
                //console.log("Message received", data.message);
            } else {
                //console.log("There is a problem:", data);
            }
        });

        var addMessage = function(text){
            socket.emit('send', { message: text });
        };

        storage.setItem("param", { param: 1 });
        storage.setItem("param1", 10);
        var result = storage.getItem("param");
        var result1 = storage.getItem("param1");

        console.log("result", result);
        console.log("result1", result1);

        return {
          say: addMessage
        }
    };

    return ChatCore();
});