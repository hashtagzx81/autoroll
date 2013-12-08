// initialise autoroll functionality
var autoroll = {};

var autorollInit = function(){

  autoroll.enabled_input_backgroundColor = $('#onLoseMultiplier').css('background-color');
  
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
        $('#onWinMultiplier').css('background-color', autoroll.enabled_input_backgroundColor);
} else {
        $("#onWinMultiplier").prop('disabled', true);
        $('#onWinMultiplier').css('background-color', 'grey');
    }

  });
  
  $("#onLoseReturnToBase").on('click', function(){
    if($("#onLoseMultiplier").prop('disabled')){
        $("#onLoseMultiplier").prop('disabled', false);
        $('#onLoseMultiplier').css('background-color', autoroll.enabled_input_backgroundColor);
    } else {
        $("#onLoseMultiplier").prop('disabled', true);    
        $('#onLoseMultiplier').css('background-color', 'grey');
    }    
  });


  console.log('autoroll initialised');

}
