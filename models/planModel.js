var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    idAttribute: 'id',
    urlRoot: 'https://graph.microsoft-ppe.com/alpha/me/plans/',
});
