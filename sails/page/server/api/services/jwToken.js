/**
 * jwToken
 *
 * @description :: JSON Webtoken Service for sails
 * @help        :: See https://github.com/auth0/node-jsonwebtoken & http://sailsjs.org/#!/documentation/concepts/Services
 */

var jwt = require('jsonwebtoken');
var tokenSecret = "thebestsecret";

module.exports.issue = function(payload) {
  return jwt.sign(
    payload,
    tokenSecret,
    {
      // expiresInMinutes: 180
    }
  );
};

module.exports.verify = function (token, callback) {
  return jwt.verify(
    token,
    tokenSecret,
    {},
    callback
  );
}


