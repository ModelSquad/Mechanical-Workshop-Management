var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ex', { title: 'Mechanical Workshop Management APP' });
});

module.exports = router;
