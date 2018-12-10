var mysql = require('mysql');
var connectionInfo = require('.././database/connection.js');
var dialog = require('dialog');

module.exports = {
  actionElement : function(req, res, next){
    var name = req.body.nombre;
    var manufacturer = req.body.fabricante;
    var action = req.body.boton; //get the action: add, update or delete
    var errorOcurred = false;

    if(req.session.rol==='invitado'){
      dialog.err('No tienes permiso para eso');
      res.redirect('/panel');
      return;
    }

    if(action==="add"){
      if(req.session.rol === 'usuario') {
        dialog.err('No tienes permiso para eso');
        res.redirect('back');
        return;
      }
      console.log(name === '');
      console.log(name);
      if(name === '' || manufacturer === '' || name === undefined || manufacturer === undefined) {
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
          if(req.session.rol === 'usuario') {
            dialog.err('No tienes permiso para eso');
            res.redirect('back');
            return;
          }
          var connection = mysql.createConnection(connectionInfo);


          connection.query('UPDATE `dbo.tPiezas` SET `NOMBRE` = \'' + name +  '\', `FABRICANTE` = \'' + manufacturer + '\'  WHERE `ID` = ' + req.body.rowSelect,function(err, result, fields) {
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
          if(req.session.rol === 'usuario') {
            dialog.err('No tienes permiso para eso');
            res.redirect('back');
            return;
          }
          console.log(action);
            var connection = mysql.createConnection(connectionInfo);
            var id = req.body.rowSelect;
            if(typeof id == "undefined"){
              dialog.err("select a row");
              errorOcurred = true;
            }
            if(!errorOcurred){
              connection.query('DELETE  FROM `dbo.tPiezas` where ID = ' + id, function(err, result, fields){
                if (!err) {
                        console.log('Successfully removed information.');
                    } else {
                        console.log(result);
                        console.log(err);
                        console.log('Was not able to remove information from database.');
                    }
              });
            }
          return res.redirect('back');
        }

  }

  }
