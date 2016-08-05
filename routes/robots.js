var express = require('express');
var router = express.Router();
var redis = require('redis');
var redisClient = redis.createClient();


/* GET home page. */
router.get('/', function(req, res, next) {
  redisClient.smembers("robots", function( err, robotData) {
    res.locals.robotArray = robotData;
    res.render('robots', { title: 'Robots' });
  });
});

router.get<('/delete/:robotName', function(req, res, next) {
  redisClient.srem("robots", req.params.robotName);
  res.redirect('/robots');
});
module.exports = router;
