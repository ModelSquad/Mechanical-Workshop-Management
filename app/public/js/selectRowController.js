$(document).ready(function() {
  $('input[name=rowSelect]').on("click", function() {
    var selected = $(this).val();
    alert($(this).index());
    $('#nombre').val(item['ID']);
  });
});
