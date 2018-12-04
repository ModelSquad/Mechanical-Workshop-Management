var express = require('express');
var router = express.Router();
var loginController = require('.././controllers/loginController.js');
var queryController = require('.././controllers/queryController.js');
var addController = require('.././controllers/actionButtonsController.js');// = require('.././controllers/addController.js');
var dialog = require('dialog');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mechanical Workshop Management APP' });
});

router.post('/', loginController.postLogin);

router.get('/panel', function(req, res, next) {
  if(!req.session.email){
    res.redirect('/');
  }
  else{
    res.render('panel', {rows: []});
  }

});

router.get('/Chapa', function(req, res, next) {

  if(!req.session.email){
    res.redirect('/');
  }
  else if (req.session.rol!=='invitado'){
    queryController.loadData("Chapa", function(data) {
      return res.render('panel', {rows: data});
    });
  } else {
    res.render('panel', {rows: []}); dialog.err('No tienes permisos para esto');
  }
});

router.get('/Iluminacion', function(req, res, next) {
  if(!req.session.email){
    res.redirect('/');
  }else if (req.session.rol!=='invitado'){
    queryController.loadData("Iluminacion", function(data) {
      return res.render('panel', {rows: data});
    });
  } else {
    res.render('panel', {rows: []}); dialog.err('No tienes permisos para esto');
  }
});

router.get('/Sensores', function(req, res, next) {
  if(!req.session.email){
    res.redirect('/');
  }
  else if (req.session.rol!=='invitado'){
    queryController.loadData("Sensores", function(data) {
      return res.render('panel', {rows: data});
    });} else {
      res.render('panel', {rows: []}); dialog.err('No tienes permisos para esto');
    }
  });

  router.get('/Cristales', function(req, res, next) {
    if(!req.session.email){
      res.redirect('/');
    }else if (req.session.rol!=='invitado'){
      queryController.loadData("Cristales", function(data) {
        return res.render('panel', {rows: data});
      });
    } else {
      res.render('panel', {rows: []}); dialog.err('No tienes permisos para esto');
    }
  });

  router.get('/Pintura', function(req, res, next) {
    if(!req.session.email){
      res.redirect('/');
    }else if (req.session.rol!=='invitado'){
      queryController.loadData("Pintura", function(data) {
        return res.render('panel', {rows: data});
      });
    } else {
      res.render('panel', {rows: []}); dialog.err('No tienes permisos para esto');
    }
  });

  router.get('/Otros', function(req, res, next) {
    if(!req.session.email){
      res.redirect('/');
    }else if (req.session.rol!=='invitado'){
      queryController.loadData("Otros", function(data) {
        return res.render('panel', {rows: data});
      });
    } else {
      res.render('panel', {rows: []}); dialog.err('No tienes permisos para esto');
    }
  });

  router.get('/Motor', function(req, res, next) {
    if(!req.session.email){
      res.redirect('/');
    }else if (req.session.rol!=='invitado'){
      queryController.loadData("Motor", function(data) {
        return res.render('panel', {rows: data});
      });
    } else {
      res.render('panel', {rows: []}); dialog.err('No tienes permisos para esto');
    }
  });

  /* BUTTONS */

  router.post('/action',  addController.addElement);

  /* EXIT APLICATION == RETURN TO HOME PAGE */
  router.get('/exit', function(req, res, next){
    req.session.destroy();
    res.redirect('/');
  });

  module.exports = router;
