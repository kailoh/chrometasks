var React = require('react'),
Plan = require('./plan.jsx'),
ModelMixin = require('./modelMixin.jsx')

module.exports = React.createClass({
    mixins: [ModelMixin],
    getBackboneCollections: function() {
        return [this.props.collection];
    },
    getBackboneModel: function() {
        return this.props.model;
    },
    render: function() {
        return (
            <form>
                <input type="text" name="title" id="inputText" placeholder="New Task Title" />
                <button>Submit</button>
            </form>
        )
    }
})
