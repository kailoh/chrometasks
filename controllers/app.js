var Backbone = require('../bower_components/backbone/backbone.js'),
React = require('../bower_components/react/react.js'),
PlansCollection = require('../models/plansCollection.js'),
Plans = require('../views/plans.jsx'),
_ = require('../bower_components/underscore/underscore.js')

var sendAuthentication = function (xhr) {
    var token = '';
    xhr.setRequestHeader('Authorization', ("Bearer " + token));
}

var collection = new PlansCollection();
collection.fetch({
    beforeSend: sendAuthentication,
    success: function() {
        React.render(
            <Plans collection={collection}/>,
            document.getElementById('mainContent')
        );
    }
});
