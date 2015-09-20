define([], function(){
    window.appMixins = window.appMixins || {};
    return window.appMixins.storage = {
        setItem: function(name, data){
            window.localStorage.setItem(name, JSON.stringify(data));
            console.log("ls set", name, data);
        },
        getItem: function(name){
            console.log("ls get", name);
            return JSON.parse(window.localStorage.getItem(name));
        }
    };
});