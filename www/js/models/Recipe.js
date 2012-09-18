Recipe = Backbone.Model.extend({

  initialize: function () {
  },

  idAttribute: '_firebase_name',

  urlRoot : '/recipes',

  schema : {
    name : { validators: ['required'] },
    ingredients : { type: 'List', listType: 'Text' }
  },

  defaults: {
    "name" :  "",
    "ingredients" : []
  }

});