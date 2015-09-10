var React = require('../bower_components/react/react.js'),
Plan = require('./plan.jsx'),
CollectionMixin = require('./collectionmixin.jsx')

module.exports = React.createClass({
    mixins: [CollectionMixin],
    getBackboneCollections: function() {
        return [this.props.collection];
    },
    render: function() {
        var rows = [];
        this.props.collection.forEach(function(plan) {
            rows.push(<Plan key={plan.get('value').get(_id')}
            reactKey={plan.get('_id')}
            title={plan.get('title')}></Plan>);
        }.bind(this));
        return (
            <div>
                {rows}
            </div>
        )
    }
})
