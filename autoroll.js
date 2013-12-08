// initialise autoroll functionality
var autorollInit = function(){

$( document ).ready(function() {

  $("#autoroll-show").on("click", function(){
    if($('#autoroll-form').is(':visible')){
        $('#autoroll-form').hide();        
    } else {
        $('#autoroll-form').show()
    }
  });
  
  console.log('autoroll initialised');
}
  
}
