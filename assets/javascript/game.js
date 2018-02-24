//global variables
var wins = 0;
var losses = 0;

var randomOneValue;
var randomTwoValue;
var randomThreeValue;
var randomFourValue;

var keepTrackScore = 0;
var randomInt = 0;

//functions

function variableReset() {

    $( "#displayCrysOne" ).unbind( "click" );
    $( "#displayCrysTwo" ).unbind( "click" );
    $( "#displayCrysThree" ).unbind( "click" );
    $( "#displayCrysFour" ).unbind( "click" ); 
  
  
    randomOneValue = Math.floor(Math.random() * 12) + 1 ;
    randomTwoValue = Math.floor(Math.random() * 12) + 1 ;
    randomThreeValue = Math.floor(Math.random() * 12) + 1 ;
    randomFourValue = Math.floor(Math.random() * 12) + 1 ;
  
    keepTrackScore = 0;
    randomInt = 0;
  
    $("#userPoints").html(keepTrackScore);
  
  
    gameClicks();
  
  };

  function gameClicks() {

    var randomInt = Math.floor(Math.random() * 120) + 18;
    document.getElementById("number-to-guess").innerHTML = randomInt;
    console.log("random: "+randomInt);
  
  
    $("#displayCrysOne").on("click", function() {
    keepTrackScore = keepTrackScore + randomOneValue;
    $("#userPoints").html(keepTrackScore);
    checker();
    console.log("Crystal one value: "+ randomOneValue);
    console.log("keeptrackscore: " + keepTrackScore);
    }) 
  
    $("#displayCrysTwo").on("click", function() {
    keepTrackScore = keepTrackScore + randomTwoValue;
    $("#userPoints").html(keepTrackScore);
    checker();
    console.log("Crystal two value: "+ randomTwoValue);
    console.log("keeptrackscore: " + keepTrackScore);
  
    }) 
  
    $("#displayCrysThree").on("click", function() {
    keepTrackScore = keepTrackScore + randomThreeValue;
    $("#userPoints").html(keepTrackScore);
    checker();
    console.log("Crystal three value: "+ randomThreeValue);
    console.log("keeptrackscore: " + keepTrackScore);
  
    }) 
  
    $("#displayCrysFour").on("click", function() {
    keepTrackScore = keepTrackScore + randomFourValue;
    $("#userPoints").html(keepTrackScore);
    checker();
    console.log("Crystal four value: "+ randomFourValue);
    console.log("keeptrackscore: " + keepTrackScore);
  
    }) 
  
  
  function checker() {
  
    if (randomInt === keepTrackScore) {
      wins++;
      console.log(wins);
      console.log("user win");
      $("#result").html("You win!");
      variableReset();
      keepTabsVariables();
    }
    if (keepTrackScore > randomInt) {
      losses++;
      console.log(losses);
      console.log("user lost");
      $("#result").html("You Lose!");
      variableReset();
      keepTabsVariables();
    }
  }
  
  
  };
  
  function keepTabsVariables () {
    $("#winScore").html(wins);
    $("#lossScore").html(losses);
  };

variableReset();
keepTabsVariables();
