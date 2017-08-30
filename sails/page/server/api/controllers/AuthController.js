/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  index: function (req, res) {
    var login = req.param('login');
    var password = req.param('password');

    if(!login || !password){
      res.json(401, {err: "Login and password required"});
    }

    User.findOne({login: login}, function (err, user) {
      if(!user){
        res.json(401, {err: "Invalid login or password"});
      }
      console.log(user);
      if(password === user.password){
        res.json({
          user: user,
          token: jwToken.issue({id : user.id })
        });
      } else{
        return res.json(401, {err: 'invalid login or password'});
      }
    })
  }
}
