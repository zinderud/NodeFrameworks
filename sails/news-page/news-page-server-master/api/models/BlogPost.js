/**
 * BlogPost.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    schema: true,

    name: {
      type: 'string',
      required: true
    },

    bloggerId: {
      type: 'integer',
      required: true
    },

    description: {
      type: 'string',
      required: true
    },

    content: {
      type: 'string',
      required: true
    },

    points: {
      type: 'integer',
      defautsTo: function () {
        return 0;
      }
    },

    toJSON: function () {
      return this.toJSON();
    }
  }
};

