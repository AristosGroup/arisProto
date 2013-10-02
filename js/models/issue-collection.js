define([
    'chaplin',
    'models/issue'
], function(Chaplin, Issue) {

    var Issues = Chaplin.Collection.extend({
        model: Issue,

        initialize: function() {
            Chaplin.Collection.prototype.initialize.apply(this, arguments);

            // Initialize the SyncMachine
            _.extend(this, Chaplin.SyncMachine);

            // Will be called on every state change
            this.syncStateChange(this.announce.bind(this));

            this.fetch();
        },

        // Custom fetch method which warrents
        // the sync machine
        fetch: function() {
            // Set the machine into `syncing` state
            this.beginSync();

            // Do something interesting like calling
            // a 3rd party service


            var $this = this;
            $.ajax({
                type: "GET",
                url: 'http://pm.proaristos.ru/issues.json?key=1ba9eddec017876adbb2156aafccdc027791bda0',
                data: {},
                success: function(data) {

                    $this.processPosts(data);
                },
                dataType: 'json'
            });
        },

        processPosts: function(response) {
            // Exit if for some reason this collection was
            // disposed prior to the response

            if (this.disposed) return;

            console.log(response);
            // Update the collection
            this.reset((response && response.issues) ? response.issues : []);

            // Set the machine into `synced` state
            this.finishSync();
        },

        announce: function() {
            console.debug(this.syncState());
        }
    });
    return Issues;
});

