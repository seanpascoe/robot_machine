var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Robot = Robot.model('Robot');


/* GET home page. */
router.get('/', function(req, res, next) {
 Robot.find( function ( err, robots) {
   res.render('robots', { robots : robots });
 });
});
router.post('/', function(req, res, next) {
  new Movie ({
    title:req.body.name,
    description:req.body.description,
    updated_at: Date.now()
  }).save (function(err, robot, count) {
    res.redirect('/robots');
  });
});






module.exports = router;
