var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Robot = Robot.model('Robot');


/* GET home page. */
router.get('/', function(req, res, next) {
 Robot.find( function ( err, movies, count ) {
   res.render('robots', { robots: robots });
 });
});

router.get('/delete/:robotName', function(req, res, next) {
  redisClient.srem("robots", req.params.robotName);
  res.redirect('/robots');
});
module.exports = router;
