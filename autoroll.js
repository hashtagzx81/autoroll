// initialise autoroll functionality
var autoroll = {};

var autorollInit = function(){

  autoroll.enabled_input_backgroundColor = $('#onLoseMultiplier').css('background-color');
  autoroll.enabled_label_color = $('#onLoseMultiplierLabel').css('color');
  
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
        $("#onWinMultiplierLabel").prop('disabled', false);    
        //$('#onWinMultiplier').css('background-color', autoroll.enabled_input_backgroundColor);
        //$('#onWinMultiplierLabel').css('color', 'autoroll.enabled_label_color');
} else {
        $("#onWinMultiplier").prop('disabled', true);
        $("#onWinMultiplierLabel").prop('disabled', true);
        //$('#onWinMultiplier').css('background-color', 'grey');
        //$('#onWinMultiplierLabel').css('color', 'grey')
    }

  });
  
  $("#onLoseReturnToBase").on('click', function(){
    if($("#onLoseMultiplier").prop('disabled')){
        $("#onLoseMultiplier").prop('disabled', false);
        $("#onLoseMultiplierLabel").prop('disabled', false);
        //$('#onLoseMultiplier').css('background-color', autoroll.enabled_input_backgroundColor);
        //$('#onLoseMultiplierLabel').css('color', 'autoroll.enabled_label_color');
    } else {
        $("#onLoseMultiplier").prop('disabled', true);    
        $("#onLoseMultiplierLabel").prop('disabled', true);    
        //$('#onLoseMultiplier').css('background-color', 'grey');
        //$('#onLoseMultiplierLabel').css('color', 'grey')
    }    
  });


  // disable onLose checkbox
  //$('#onLoseReturnToBase').click();
  console.log('autoroll initialised');

}
