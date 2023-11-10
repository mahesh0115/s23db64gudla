var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dumbells', { title: 'Search Results Dumbells' });
});

module.exports = router;