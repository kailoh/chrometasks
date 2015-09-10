module.exports = {

    // Whenever there may be a change in the Backbone data, trigger a reconcile.
    componentDidMount: function() {
        this.getBackboneCollections().forEach(function(collection) {
            collection.on('add remove change sort', this.forceUpdate.bind(this, null), this)
        }, this);
    },

    // Ensure that we clean up any dangling references when the component is destroyed.
    componentWillUnmount: function() {
           this.getBackboneCollections().forEach(function(collection) {
            collection.off(null, null, this);
        }, this);
    }

};
