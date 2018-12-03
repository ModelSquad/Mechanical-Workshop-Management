$(document).ready(function(){
    $('#material').change(function(){
      $("#hiddenText").val(this.value)
      window.location.href= this.value;



    });


});
