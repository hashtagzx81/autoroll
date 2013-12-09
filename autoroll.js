// initialise autoroll functionality
var autoroll = {};

autoroll.init = function(){

  $("#autoroll-show").on("click", function(){
    if($('#autoroll-form').is(':visible')){
        $('#autoroll-form').hide();        
    } else {
        $('#autoroll-form').show()
    }
  });

  $("#autoroll-start").on("click", function(){
    if($('#autoroll-start').text() == "Start"){
        
        var base = Number($("#autoroll-base").val());
        var odds = Number($("#autoroll-odds").val());
        var onWinReturnToBase = $('#onWinReturnToBase').prop('checked');
        var onWinMultiplier = Number($("#onWinMultiplier").val());
        var onLoseReturnToBase = $('#onLoseReturnToBase').prop('checked');
        var onLoseMultiplier = Number($("#onLoseMultiplier").val());
        var isLow = 
            $('input[name="high-low"]:checked').val() == "low" 
                ? true 
                : false;

        var max_rolls = Number($("#autoroll-max-rolls").val());

        // validation for input fields
        if(
            isNaN(base) || 
            isNaN(odds) || 
            isNaN(max_rolls) || 
            isNaN(onWinMultiplier) || 
            isNaN(onLoseMultiplier)
        )
          return;

        $('#autoroll-start').text("Stop");
        
        autoroll.base = base.toFixed(8);
        autoroll.odds = odds.toFixed(4);
        autoroll.highLow = isLow ? 0 : 1;
        autoroll.onWin = onWinReturnToBase ? true : onWinMultiplier;
        autoroll.onLose = onLoseReturnToBase ? true : onLoseMultiplier;
        autoroll.maxRolls = max_rolls;
        autoroll.rolls = 0;
        autoroll.bet = autoroll.base;
        autoroll.roll();
        
    } else {
        $('#autoroll-start').text("Start");
        autoroll.stop();
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

}

autoroll.roll = function(){

    // ripped from glib_dice_roll
    if((autoroll.bet<mDiceBetMin) || (autoroll.bet>mDiceBetMax)){
        TheGamingLib.UI.MessageBox.Alert(
            'Invalid bet range!',
            ('Minimum bet: '
                +mDiceBetMin.toFixed(8)
                +'<br/> Maximum bet: '
                +mDiceBetMax.toFixed(8)
            ),
            {topOffset:-70}
        );
        return false;
    }
    
    mDiceRolling=true;

    var url = mDiceApiUrl
        +'&action=roll&stat=on&seed='+mDiceFairCS
        +'&cur='+mGLibUserCurUse
        +'&roll='+autoroll.highLow
        +'&target='+autoroll.odds
        +'&bet='+autoroll.bet

/* using a customised ajax request + callback
    TheGamingLib.Ajax.getDataReturnText(
        (mDiceApiUrl+'&action=roll&stat=on&seed='+mDiceFairCS+'&cur='+mGLibUserCurUse+'&roll='+tp+'&target='+rol+'&bet='+bet), 
        glib_dice_roll_data
    );
*/

    $.ajax({url:url}).done(autoroll.response);

}

autoroll.response = function(data, textStatus, jqXHR){

    // update displays
    glib_dice_roll_data(jqXHR.responseText);

    var e = JSON.parse(data);

    if(e.status!=1){
        console.log(r.message);
        TheGamingLib.UI.MessageBox.Alert(
            'Message',e.message,{topOffset:-70}
        );
        alert("There was a problem with the roll. Stopping auto-roll.");
        $("#autoroll-start").click();   // turn off auto-roll
        return;
    }

    autoroll.rolls++;
    
    if(autoroll.rolls >= autoroll.maxRolls){
        $("#autoroll-start").click();   // turn off auto-roll
        return;    
    }

    if(e.game_won == 0){
        // onLose
        autoroll.bet = 
            autoroll.onLose === true
                ? autoroll.bet = autoroll.base:
                autoroll.bet *= autoroll.onLose;
        
    } else if(e.game_won > 0){
        // onWin
        autoroll.bet = 
            autoroll.onWin === true
                ? autoroll.bet = autoroll.base:
                autoroll.bet *= autoroll.onWin;
        
    } else {
        throw new Error("Not sure how we got here! game_won=" + e.game_won);
    }

    // reduce to 8 decimal places after floating-point multiplication
    autoroll.bet = Number(autoroll.bet).toFixed(8);

    autoroll.roll();

}

autoroll.stop = function(){
console.log('to be implemented');
}
