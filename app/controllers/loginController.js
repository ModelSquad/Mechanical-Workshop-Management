var connectionInfo = require('../database/connection.js')
var mysql = require('mysql')

module.exports = {

  postLogin : function(req, res, next){
    var usuario = req.body.user;
    var password = req.body.pass;

    var connection = mysql.createConnection(connectionInfo);
    connection.query('SELECT * FROM `dbo.tUsuario` WHERE `nombre` = ?', usuario, function(err, rows, fields) {
      connection.end();

      if(!err) {
        if(rows.length > 0) {
          var userDB = rows[0];
          if(userDB.password === password) {
            return res.redirect('/home');
          } else {
            throw err;
          }

        } else {
          throw err;
        }
      } else {
       throw err;
      }
      throw err;
    });

  }

}
