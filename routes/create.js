var express = require('express');
var router = express.Router();
var redis = require('redis');
var redisClient = redis.createClient();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('create', { title: 'Create' });
});

router.post('/', function(req, res) {
  redisClient.sadd("robots", req.body.robotName);



  
  res.redirect('/robots');
});

module.exports = router;
