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

module.exports = router;
