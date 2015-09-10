var model = require('./planModel'),
    Backbone = require('../bower_components/backbone/backbone.js');

module.exports = Backbone.Collection.extend({
    model: model,
    url: 'https://graph.microsoft-ppe.com/alpha/me/plans',
});
