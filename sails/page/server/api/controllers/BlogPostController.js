/**
 * BlogPostController
 *
 * @description :: Server-side logic for managing blogposts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: function (req, res, next) {

    BlogPost.create(req.params.all(), function BlogPostCreated(err, blogPost) {
      if(err) return next(err);

      if(blogPost){
        res.json(200, {post: blogPost});
      }
    });
  }
};

