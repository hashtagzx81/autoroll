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

  $("#autoroll-start").on("click", function(){
    if($('#autoroll-start').text() == "Start"){
        
        var base = Number($("#autoroll-base").val()).toFixed(8);
        var onWinReturnToBase = $('#onWinReturnToBase').prop('checked');
        var onWinMultiplier = Number($("#onWinMultiplier").val());
        var onLoseReturnToBase = $('#onLoseReturnToBase').prop('checked');
        var onLoseMultiplier = Number($("#onLoseMultiplier").val());

        // validation for input fields
        if(isNaN(base) || isNaN(onWinMultiplier) || isNaN(onLoseMultiplier))
          return;

        $('#autoroll-start').text("Stop");
        
        console.log(base, onWinReturnToBase, onWinMultiplier, onLoseReturnToBase, onLoseMultiplier);
        
    } else {
        $('#autoroll-start').text("Start");
    }
  });
  
  
  // disable multiplier fields when 'return to base' selected
  $("#onWinReturnToBase").on('click', function(){
    if($("#onWinMultiplier").prop('disabled')){
        $("#onWinMultiplier").prop('disabled', false);    
        $("#onWinMultiplierLabel").prop('disabled', false);    
    } else {
        $("#onWinMultiplier").prop('disabled', true);
        $("#onWinMultiplierLabel").prop('disabled', true);
    }
  });
  $("#onLoseReturnToBase").on('click', function(){
    if($("#onLoseMultiplier").prop('disabled')){
        $("#onLoseMultiplier").prop('disabled', false);
        $("#onLoseMultiplierLabel").prop('disabled', false);
    } else {
        $("#onLoseMultiplier").prop('disabled', true);    
        $("#onLoseMultiplierLabel").prop('disabled', true);    
    }    
  });


  // disable onLose checkbox
  //$('#onLoseReturnToBase').click();
  console.log('autoroll initialised');

}
