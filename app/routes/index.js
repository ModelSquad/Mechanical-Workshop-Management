var express = require('express');
var router = express.Router();
var loginController = require('.././controllers/loginController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mechanical Workshop Management APP' });
});

router.post('/', loginController.postLogin);

router.get('/panel', function(req, res, next) {
  res.render('panel');
});

/* EXIT APLICATION == RETURN TO HOME PAGE */
router.get('/exit', function(req, res, next){
  res.redirect('/');
});

module.exports = router;
