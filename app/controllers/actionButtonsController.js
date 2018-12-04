var mysql = require('mysql');
var connectionInfo = require('.././database/connection.js');
var dialog = require('dialog');

module.exports = {
  addElement : function(req, res, next){
    var name = req.body.nombre;
    var manufacturer = req.body.fabricante;
    var action = req.body.boton; //get the action: add, update or delete
    var errorOcurred = false;

    if(action==="add"){
      if(name === '' || manufacturer === '') {
        dialog.err('No dejes ningún campo vacío');
        res.redirect('back');
        return;
      }

      console.log(action);
      var connection = mysql.createConnection(connectionInfo);
      var id_tipo;
      var nombreTipo = req.get('referer').split('/')[3];
      connection.query('SELECT * FROM `dbo.tTipoPieza` WHERE NOMBRE=\'' + nombreTipo + '\'', function(err, result, field) {
        if(result[0] === undefined) {
          dialog.err('Selecciona un tipo antes');
          errorOcurred = true;
          return;
        }
        id_tipo = result[0]['ID_TIPO'];
      });

      if(errorOcurred) {
        res.redirect('back');
        return;
      }

      connection.query('SELECT MAX(ID) AS id FROM `dbo.tPiezas`',function(err, result, fields) {
      if(!err){
        id = result[0].id;
        var values = {};
        values.ID = id+1;
        values.NOMBRE = name;
        values.FABRICANTE = manufacturer;
        values.ID_TIPO = id_tipo;
        console.log(values);

          //var values = {id: id+1,name : name, manufacturer : manufacturer, tipo : name};
        connection.query('INSERT INTO `dbo.tPiezas` SET ?',[values],function(err, result, fields) {
            if (!err) {
                    console.log('Successfully added information.');
                    console.log(err);
                } else {
                    console.log(result);
                    console.log(err);
                    console.log('Was not able to add information to database.');
                }
            connection.end();
          });

          }
        });

        res.redirect('back');
        }
        else if(action==="update"){
          var connection = mysql.createConnection(connectionInfo);
          var id_tipo;
          var nombreTipo = req.get('referer').split('/')[3];
          connection.query('SELECT * FROM `dbo.tTipoPieza` WHERE NOMBRE=\'' + nombreTipo + '\'', function(err, result, field) {
            if(result[0] === undefined) {
              dialog.err('Selecciona un tipo antes');
              errorOcurred = true;
              return;
            }
            id_tipo = result[0]['ID_TIPO'];
          });

          if(errorOcurred) {
            res.redirect('back');
            return;
          }
          var values = {};
          //values.ID = coger id de la tabla;
          values.NOMBRE = name;
          values.FABRICANTE = manufacturer;
          values.ID_TIPO = id_tipo;
          console.log(values);

              //var values = {id: id+1,name : name, manufacturer : manufacturer, tipo : name};
          connection.query('UPDATE `dbo.tPiezas` SET ?',[values],function(err, result, fields) {
               if (!err) {
                       console.log('Successfully updated information.');
                       console.log(err);
               } else {
                      console.log(result);
                      console.log(err);
                      console.log('Was not able to update information to database.');
               }
               connection.end();
          });
        res.redirect('back');

        }
        else if(action==="delete"){
          console.log(action);
            var connection = mysql.createConnection(connectionInfo);
            var id = req.body.rowSelect;
            if(id == undefined){
              alert("select a row");
            }
            connection.query('DELETE  FROM `dbo.tPiezas` where ID = ' + id, function(err, result, fields){
              if (!err) {
                      console.log('Successfully removed information.');
                  } else {
                      console.log(result);
                      console.log(err);
                      console.log('Was not able to remove information from database.');
                  }
            });
          return res.redirect('back');
        }

  }

  }
