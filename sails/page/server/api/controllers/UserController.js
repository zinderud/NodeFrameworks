/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: function(req, res, next){

    User.create(req.params.all(), function UserCreated(err, user) {
      if(err) return next(err);

      if(user){
        res.json(200, {user: user, token: jwToken.issue({id: user.id})});
      }
    });
  }
};

