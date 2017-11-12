var _ = require('underscore');
var Backbone = require('backbone');
var Monitor = function(collection) {
    _.extend(this, Backbone.Events);
    this.listenTo(collection, 'all', function(eventName) {
        console.log(formatOutput(eventName));
    });

    function formatOutput(message){
        var date = new Date();
        return '[' + date.toLocaleTimeString() + '.' + date.getMilliseconds() + '] ' + message;
    }
}
module.exports = Monitor;
