var Backbone = require('backbone'),
React = require('react'),
PlansCollection = require('../models/plansCollection.js'),
Plans = require('../views/plans.jsx'),
TaskModel = require('../models/taskModel.js'),
NewTask = require('../views/newTask.jsx'),
_ = require('underscore')


//https://dlmknahcjhphemkenmlokpjlpicgnbbg.chromiumapp.org/#access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjF6bmJlNmV2ZWJPamg2TTNXR1E5X1ZmWXVJdyIsImtpZCI6IjF6bmJlNmV2ZWJPamg2TTNXR1E5X1ZmWXVJdyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC1wcGUuY29tLyIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MtcHBlLm5ldC80NTJhOGVjZC02Y2YyLTQ5ODQtODk2My1kZGYyOTIyYzBlOGIvIiwiaWF0IjoxNDQxOTQyMTY1LCJuYmYiOjE0NDE5NDIxNjUsImV4cCI6MTQ0MTk0NjA2NSwidmVyIjoiMS4wIiwidGlkIjoiNDUyYThlY2QtNmNmMi00OTg0LTg5NjMtZGRmMjkyMmMwZThiIiwib2lkIjoiOWIyYjQxYzEtYzhlZi00ZGJlLTg5NTgtZDk4NmU5YTBhYzc1IiwidXBuIjoiQXpUZXN0QHBsaXRlMi5jY3NjdHAubmV0IiwicHVpZCI6IjEwMDMwMDAwOERGMzQ5MjYiLCJzdWIiOiI0Zmc3QVE2bllpNlJuaFNCaHJkUGUzNXBSLTJneUhHUkdWSzh6ZzgtUHNnIiwiZ2l2ZW5fbmFtZSI6IkF6VGVzdCIsImZhbWlseV9uYW1lIjoiQXpUZXN0IiwibmFtZSI6IkF6VGVzdCIsImFtciI6WyJwd2QiXSwidW5pcXVlX25hbWUiOiJBelRlc3RAcGxpdGUyLmNjc2N0cC5uZXQiLCJhcHBpZCI6Ijg5Y2I1NTdiLTk4MTQtNDMyNy1iZjFmLTlkODNjN2U3NmRhMCIsImFwcGlkYWNyIjoiMCIsInNjcCI6IlRhc2tzLlJlYWQuQWxsIFRhc2tzLlJlYWRXcml0ZS5BbGwgVXNlci5SZWFkIiwiYWNyIjoiMSIsImlwYWRkciI6IjE2Ny4yMjAuMTAzLjIwMyJ9.a98oziKa0zSizcRWnRELVyCduvm2sq7f1rwvgN21PLGG9j3yWsUHgd8bMe3-8EfYxD7rtCYVyll3OI2qDev5gwJLTXwyE1bpZywQrPcn-8iuxWoDGgrZa3gJmM2wVVn_Sxr-M0st5mJLSJFp_61GCdBdRoynuzo21vueKEsowhlZpgtq1XjtgS3YkqHHvCgcjvKQSSPGUjKdsRsaZX4jDJK2fSQQz_AadRFsadyEqlEpwERjXztTtFKBcC8XI3o1b0duU9z7iSbVjRCNOKFZcKrHUgAHycidQimUrQiQXC9REQ3Xu6t8oUPbC1Sa4SSOZPHFwa4B5lf7mxU8f93Y2Q&token_type=Bearer&expires_in=3599&session_state=ea17ed23-9747-4786-995f-bca61c8e3fb7

var sendAuthentication = function (xhr) {
    var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjF6bmJlNmV2ZWJPamg2TTNXR1E5X1ZmWXVJdyIsImtpZCI6IjF6bmJlNmV2ZWJPamg2TTNXR1E5X1ZmWXVJdyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC1wcGUuY29tLyIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MtcHBlLm5ldC80NTJhOGVjZC02Y2YyLTQ5ODQtODk2My1kZGYyOTIyYzBlOGIvIiwiaWF0IjoxNDQxOTQyMTY1LCJuYmYiOjE0NDE5NDIxNjUsImV4cCI6MTQ0MTk0NjA2NSwidmVyIjoiMS4wIiwidGlkIjoiNDUyYThlY2QtNmNmMi00OTg0LTg5NjMtZGRmMjkyMmMwZThiIiwib2lkIjoiOWIyYjQxYzEtYzhlZi00ZGJlLTg5NTgtZDk4NmU5YTBhYzc1IiwidXBuIjoiQXpUZXN0QHBsaXRlMi5jY3NjdHAubmV0IiwicHVpZCI6IjEwMDMwMDAwOERGMzQ5MjYiLCJzdWIiOiI0Zmc3QVE2bllpNlJuaFNCaHJkUGUzNXBSLTJneUhHUkdWSzh6ZzgtUHNnIiwiZ2l2ZW5fbmFtZSI6IkF6VGVzdCIsImZhbWlseV9uYW1lIjoiQXpUZXN0IiwibmFtZSI6IkF6VGVzdCIsImFtciI6WyJwd2QiXSwidW5pcXVlX25hbWUiOiJBelRlc3RAcGxpdGUyLmNjc2N0cC5uZXQiLCJhcHBpZCI6Ijg5Y2I1NTdiLTk4MTQtNDMyNy1iZjFmLTlkODNjN2U3NmRhMCIsImFwcGlkYWNyIjoiMCIsInNjcCI6IlRhc2tzLlJlYWQuQWxsIFRhc2tzLlJlYWRXcml0ZS5BbGwgVXNlci5SZWFkIiwiYWNyIjoiMSIsImlwYWRkciI6IjE2Ny4yMjAuMTAzLjIwMyJ9.a98oziKa0zSizcRWnRELVyCduvm2sq7f1rwvgN21PLGG9j3yWsUHgd8bMe3-8EfYxD7rtCYVyll3OI2qDev5gwJLTXwyE1bpZywQrPcn-8iuxWoDGgrZa3gJmM2wVVn_Sxr-M0st5mJLSJFp_61GCdBdRoynuzo21vueKEsowhlZpgtq1XjtgS3YkqHHvCgcjvKQSSPGUjKdsRsaZX4jDJK2fSQQz_AadRFsadyEqlEpwERjXztTtFKBcC8XI3o1b0duU9z7iSbVjRCNOKFZcKrHUgAHycidQimUrQiQXC9REQ3Xu6t8oUPbC1Sa4SSOZPHFwa4B5lf7mxU8f93Y2Q';
    xhr.setRequestHeader('Authorization', ("Bearer " + token));
}

var handlePlanClick = function(planId) {
    var model = new TaskModel({planId: planId});
    var handleTaskClick = function(text) {
        model.save({title: text}, {
            beforeSend: sendAuthentication,
            success: function() {
                console.log('success')
            }, error: function() {
                console.log('failure')
            }
        });
        console.log('handleTaskClick');
        console.dir(model);
    }
    React.render(
        <NewTask model={model} handleClick={handleTaskClick}/>,
        document.getElementById('mainContent')
    );
}

var collection = new PlansCollection();
collection.fetch({
    beforeSend: sendAuthentication,
    success: function() {
        React.render(
            <Plans collection={collection} handleClick={handlePlanClick}/>,
            document.getElementById('mainContent')
        );
    }
});
