var model = require('./planModel'),
    Backbone = require('backbone');

module.exports = Backbone.Collection.extend({
    model: model,
    url: 'https://graph.microsoft-ppe.com/alpha/me/plans',

    parse: function(data) {
        console.log("parse, data.value: " + data.value);
        return data.value;
    }
});
