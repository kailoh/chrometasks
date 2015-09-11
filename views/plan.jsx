var React = require('react')

module.exports = React.createClass({
    handleClick: function() {
        this.props.handleClick(this.props.reactKey);
    },
    render: function() {
        return (
            <div className="row">
                <button onClick={this.handleClick}>{this.props.title}</button>
            </div>
        )
    }
})
