define("views/ChatView", ["backbone", "underscore"], function(Backbone, _){

    var ChatView = Backbone.View.extend({

        tagName: 'div',

        template: _.template($("#appTemplate").html()),

        initialize: function(){
            //this.listenTo(this.model, "change", this.render);
        },

        render: function(){
            this.$el.html(this.template({}));
            return this;
        }
    });

    return ChatView;
});