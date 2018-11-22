var mysql = require('mysql')

var connection = mysql.createConnection({
  host  : 'localhost',
  port  : 3306,
  user  : 'jaysusm',
  password : 'password',
  database : 'TrabajoGI1819'
});

module.exports = connection;
