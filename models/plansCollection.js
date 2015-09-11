var model = require('./planModel'),
    Backbone = require('backbone');

module.exports = Backbone.Collection.extend({
    model: model,
    url: 'https://graph.microsoft-ppe.com/alpha/me/plans',

    parse: function(data) {
        return data.value;
    }
});
