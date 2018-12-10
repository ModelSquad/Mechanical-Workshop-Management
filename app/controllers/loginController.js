var connectionInfo = require('../database/connection.js')
var mysql = require('mysql')

module.exports = {

  postLogin : function(req, res, next){
    var usuario = req.body.user;
    var password = req.body.pass;
    var info = req.body.txt1;
    var connection = mysql.createConnection(connectionInfo);
    connection.query('SELECT * FROM `dbo.tUsuario` WHERE `nombre` = ?', usuario, function(err, rows, fields) {
      connection.end();
      if(!err) {
        if(rows.length > 0) {
          var userDB = rows[0];
          if(userDB.password === password) {
            req.session.email = usuario;
            req.session.password = password;
            req.session.rol = rows[0].rolName;
            return res.redirect('/panel');
          } else {
            req.flash('mensajeError','Usuario o contraseña incorrecta');
            return res.redirect('/');
          }
        } else {
          req.flash('mensajeError','Usuario o contraseña incorrecta');
          return res.redirect('/');
        }
      } else {
       throw err;
      }
    });

  }

}
