module.exports =  App.TagsView = Ember.TextField.extend({


    didInsertElement: function() {
        Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
    },

    processChildElements: function() {
        var preload_data = this.get('_parentView.controller').get('alltags');
    /*    this.get('_parentView.controller').get('alltags').then(function(tags) {
            console.log(tags);
        });*/
        console.log(preload_data);
        this.$().select2({
            width:'100%',
            multiple: true
            ,query: function (query){
                var data = {results: []};

                preload_data.forEach(function(item, index, enumerable){


                    if(query.term.length == 0 || this.text.toUpperCase().indexOf(query.term.toUpperCase()) >= 0 ){
                        data.results.push({id: item.get('id'), text: item.get('title') });
                    }

                });



                query.callback(data);
            }
        });
    },

    willDestroyElement: function () {
        this.$().select2("destroy");
    }



});
