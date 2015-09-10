var Backbone = require('../bower_components/backbone/backbone.js'),
React = require('../bower_components/react/react.js'),
PlansCollection = require('../models/plansCollection.js'),
Plans = require('../views/plans.jsx'),
_ = require('../bower_components/underscore/underscore.js')

var sendAuthentication = function (xhr) {
    var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjF6bmJlNmV2ZWJPamg2TTNXR1E5X1ZmWXVJdyIsImtpZCI6IjF6bmJlNmV2ZWJPamg2TTNXR1E5X1ZmWXVJdyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC1wcGUuY29tLyIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MtcHBlLm5ldC80NTJhOGVjZC02Y2YyLTQ5ODQtODk2My1kZGYyOTIyYzBlOGIvIiwiaWF0IjoxNDQxODU2MjgwLCJuYmYiOjE0NDE4NTYyODAsImV4cCI6MTQ0MTg2MDE4MCwidmVyIjoiMS4wIiwidGlkIjoiNDUyYThlY2QtNmNmMi00OTg0LTg5NjMtZGRmMjkyMmMwZThiIiwib2lkIjoiOWIyYjQxYzEtYzhlZi00ZGJlLTg5NTgtZDk4NmU5YTBhYzc1IiwidXBuIjoiQXpUZXN0QHBsaXRlMi5jY3NjdHAubmV0IiwicHVpZCI6IjEwMDMwMDAwOERGMzQ5MjYiLCJzdWIiOiI0Zmc3QVE2bllpNlJuaFNCaHJkUGUzNXBSLTJneUhHUkdWSzh6ZzgtUHNnIiwiZ2l2ZW5fbmFtZSI6IkF6VGVzdCIsImZhbWlseV9uYW1lIjoiQXpUZXN0IiwibmFtZSI6IkF6VGVzdCIsImFtciI6WyJwd2QiXSwidW5pcXVlX25hbWUiOiJBelRlc3RAcGxpdGUyLmNjc2N0cC5uZXQiLCJhcHBpZCI6Ijg5Y2I1NTdiLTk4MTQtNDMyNy1iZjFmLTlkODNjN2U3NmRhMCIsImFwcGlkYWNyIjoiMCIsInNjcCI6IkRpcmVjdG9yeS5BY2Nlc3NBc1VzZXIuQWxsIERpcmVjdG9yeS5SZWFkIERpcmVjdG9yeS5Xcml0ZSBHcm91cC5SZWFkLkFsbCBHcm91cC5SZWFkV3JpdGUuQWxsIFRhc2tzLlJlYWQuQWxsIFRhc2tzLlJlYWRXcml0ZS5BbGwgVXNlci5SZWFkIFVzZXIuUmVhZFdyaXRlLkFsbCIsImFjciI6IjEiLCJpcGFkZHIiOiIxNjcuMjIwLjEwMi43NiJ9.NKh1aAgxnHxev5e5BuOQWVvXEGZnbDfjsc_x5ICXXr9Ew1lhH2tPwMrWqAccCLWQfLrVfoKjvt4yKVtX5tOhlBkXo15DHjCMJiP2wgvx6rAcgchDw1Sy9K7aVjJaXuhrqX60lPOjUGIgfZjG9smqrLTosE4FcZcdym8XO7vKAyBiS5314X8LFwiaC-2JdcoAPXfTT2oTC9Qvoasd88EaRmKnTsrmRzsxHQEH04iLmFt3yDnYBdtM9addDmjl7l4kJEgwl5wCjYo6YviIP_BdrXupHb56NIxnbY9Yt2y5L8dna1LI6KdBRBAdco5Bujz9C-hf9u9rCN-EwaOg-XMj4A';
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