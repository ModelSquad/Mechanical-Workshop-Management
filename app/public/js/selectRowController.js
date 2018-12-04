$(document).ready(function() {
  $('input[name=rowSelect]').on("click", function() {
    var selected = $(this).val();
    alert(selected);
    $('#nombre').val(item['ID']);
  });
});
