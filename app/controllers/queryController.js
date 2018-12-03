var mysql = require('mysql');
var connectionInfo = require('.././database/connection.js')

module.exports = {
  loadData : function(tipo, callback){
    var connection = mysql.createConnection(connectionInfo);
    var rows;
    connection.query('SELECT * FROM `dbo.tPiezas` WHERE `ID_TIPO` IN (SELECT `ID_TIPO` FROM `dbo.tTipoPieza` WHERE `NOMBRE` = ?)', tipo, function(err, selectedRows, fields) {
      connection.end();
      if(err)
        callback([]);
      else {
        callback(selectedRows);
      }
    });
  }
}
