define("views/ChatView", ["backbone", "underscore", "cocktail", "mixins/storage"], function(Backbone, _, Cocktail, storage){

    var ChatView = Backbone.View.extend({

        tagName: 'div',

        mixins: ["storage"],

        template: _.template($("#appTemplate").html()),

        initialize: function(){
            console.log(this);
        },

        render: function(){
            this.setItem("viewParam", {});
            this.$el.html(this.template({}));
            return this;
        }
    });

    Cocktail.mixin(ChatView, window.appMixins.storage);

    return ChatView;
});