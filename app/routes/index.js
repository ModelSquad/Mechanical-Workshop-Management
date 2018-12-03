var express = require('express');
var router = express.Router();
var loginController = require('.././controllers/loginController.js');
var queryController = require('.././controllers/queryController.js');
var addController = require('.././controllers/actionButtonsController.js');// = require('.././controllers/addController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mechanical Workshop Management APP' });
});

router.post('/', loginController.postLogin);

router.get('/panel', function(req, res, next) {
  res.render('panel', {rows: []});
});

router.get('/Chapa', function(req, res, next) {
  queryController.loadData("Chapa", function(data) {
    return res.render('panel', {rows: data});
  });
});

router.get('/Iluminacion', function(req, res, next) {
  queryController.loadData("Iluminacion", function(data) {
    return res.render('panel', {rows: data});
  });
});

router.get('/Sensores', function(req, res, next) {
  queryController.loadData("Sensores", function(data) {
    return res.render('panel', {rows: data});
  });
});

router.get('/Cristales', function(req, res, next) {
  queryController.loadData("Cristales", function(data) {
    return res.render('panel', {rows: data});
  });
});

router.get('/Pintura', function(req, res, next) {
  queryController.loadData("Pintura", function(data) {
    return res.render('panel', {rows: data});
  });
});

router.get('/Otros', function(req, res, next) {
  queryController.loadData("Otros", function(data) {
    return res.render('panel', {rows: data});
  });
});

router.get('/Motor', function(req, res, next) {
  queryController.loadData("Motor", function(data) {
    return res.render('panel', {rows: data});
  });
});

/* BUTTONS */

router.post('/action',  addController.addElement);
/* EXIT APLICATION == RETURN TO HOME PAGE */
router.get('/exit', function(req, res, next){
  res.redirect('/');
});

module.exports = router;
