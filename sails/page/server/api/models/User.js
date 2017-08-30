/**
 * User.js
 *
 * @description :: User model
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    schema: true,

    login: {
      type: 'string',
      required: true,
      unique: true
    },

    photoUrl: {
      type: 'string',
      required: true
    },

    encryptedPassword: {
      type: 'string'
    },

    points: {
      type: 'integer',
      defaultsTo: function () {
        return 0;
      }
    },

    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      delete obj.confirmation;
      delete obj.encriptedPassword;
      delete obj._csrf;
      return obj;
    }

  }
};

