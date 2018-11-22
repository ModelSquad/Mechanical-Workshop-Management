var connection = require('../database/connection.js')

module.exports = {

  postLogin : function(req, res, next){
    var usuario = req.body.user;
    var password = req.body.pass;

    connection.connect();
    connection.query('SELECT `password` FROM `dbo.tUsuario` WHERE `nombre` = ?', usuario, function(err, rows, fields) {
      return res.redirect('/home');
      if(!err) {
        if(rows.length > 0) {
          var passwordFromDB = rows[0];

          if(password === passwordFromDB) {
            return res.redirect('/home')
          }

        } else {
          throw err;
        }
      } else {
       throw err;
      }

      connection.end();
      throw err;
    });

  }

}
