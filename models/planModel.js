var Backbone = require('../bower_components/backbone/backbone.js');

module.exports = Backbone.Model.extend({
    idAttribute: '_id',
    urlRoot: 'https://graph.microsoft-ppe.com/alpha/me/plans/',
});
