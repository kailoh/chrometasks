var React = require('react'),
ModelMixin = require('./modelMixin.jsx'),
$ = require('jquery')

module.exports = React.createClass({
    mixins: [ModelMixin],
    getBackboneModel: function() {
        return this.props.model;
    },
    handleClick: function() {
        var text = $('#inputText').val();
        this.props.handleClick(text);
    },
    render: function() {
        return (
            <div>
                <form>
                    <input type="text" name="title" id="inputText" placeholder="New Task Title" />
                </form>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
})
