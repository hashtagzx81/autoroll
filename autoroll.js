// initialise autoroll functionality
var autorollInit = function(){

  $("#autoroll-show").on("click", function(){
    if($('#autoroll-form').is(':visible')){
        $('#autoroll-form').hide();        
    } else {
        $('#autoroll-form').show()
    }
  });
  
}
