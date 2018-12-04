$(document).ready(function() {
  $('input[name=rowSelect]').on("click", function() {
    var row =  $(this).parent().parent().html();
    var nombre = row.split("<td>")[2].split("</td>")[0];
    var fabricante = row.split("<td>")[3].split("</td>")[0];
    $('#nombre').val(nombre);
    $('#fabricante').val(fabricante);
  });
});

/*
$(document).ready(function() {
  $('input[name=rowSelect]').on("click", function() {
    var selected = $(this).val();
    var index = $(this).parent().parent().index('tr');
    var nombre = $(this).parent().parent().find('.NOMBRE');
    alert(nombre);
    $('#nombre').val(item['ID']);
  });
});
*/
