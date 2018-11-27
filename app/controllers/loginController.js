var connectionInfo = require('../database/connection.js')
var mysql = require('mysql')

module.exports = {

  postLogin : function(req, res, next){
    var usuario = req.body.user;
    var password = req.body.pass;
    var info = req.body.txt1;

    var connection = mysql.createConnection(connectionInfo);
    function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
    connection.query('SELECT * FROM `dbo.tUsuario` WHERE `nombre` = ?', usuario, function(err, rows, fields) {
      connection.end();
      if(!err) {
        if(rows.length > 0) {
          var userDB = rows[0];
          if(userDB.password === password) {
            return res.redirect('/home');
          } else {
            info='Usuario o constraseña incorrecto';
            //podemos hacer que se recarge la pagina con el info cambiado.
            wait(10000);
            return res.redirect('/');
          }

        } else {
          throw err;
        }
      } else {
       throw err;
      }
    });

  }

}
