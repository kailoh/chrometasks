module.exports = {

    // Whenever there may be a change in the Backbone data, trigger a reconcile.
    componentDidMount: function() {
        this.getBackboneModel().on('change', this.forceUpdate.bind(this, null), this);
    },

    // Ensure that we clean up any dangling references when the component is destroyed.
    componentWillUnmount: function() {
        this.getBackboneModel().off(null, null, this);
    }

};
