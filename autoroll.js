// initialise autoroll functionality
var autorollInit = function(){


  $("#autoroll-show").on("click", function(){
    if($('#autoroll-form').is(':visible')){
        $('#autoroll-form').hide();        
    } else {
        $('#autoroll-form').show()
    }
  });
  
  $("#onWinReturnToBase").on('click', function(){
    if($("#onWinMultiplier").prop('disabled')){
        $("#onWinMultiplier").prop('disabled', false);    
    } else {
        $("#onWinMultiplier").prop('disabled', true);    
    }

  });
  
  $("#onLoseReturnToBase").on('click', function(){
    if($("#onLoseMultiplier").prop('disabled')){
//        enabled_css.backgroundColor = $('#onLoseMultiplier').css('background-color');
        $("#onLoseMultiplier").prop('disabled', false);
        $('#onLoseMultiplier').css('background-color', 'red');
        $('#onLoseMultiplier').css('color', 'yellow');
    } else {
        $("#onLoseMultiplier").prop('disabled', true);    
    
  });


  console.log('autoroll initialised');

}
