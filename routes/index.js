var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Robot = Robot.model('Robot');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Robot World' });
});

module.exports = router;
