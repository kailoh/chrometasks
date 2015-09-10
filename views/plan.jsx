var React = require('../bower_components/react/react.js')

module.exports = React.createClass({
    render: function() {
        return (
            <div className="row">
                <p>{this.props.title}</p>
            </div>
        )
    }
})
