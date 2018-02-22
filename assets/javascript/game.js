// GLOBAL VARIABLES
var wins = 0;
var losses = 0;
var score = 0;

var targetNum = 0;
var randomOneValue = Math.floor(Math.random() * 12) + 1 ;
var randomTwoValue = Math.floor(Math.random() * 12) + 1 ;
var randomThreeValue = Math.floor(Math.random() * 12) + 1 ;
var randomFourValue = Math.floor(Math.random() * 12) + 1 ;

var keepTrackScore = 0;

//FUNCTIONS

//randomizer number


function randomInt() {
    document.getElementById("number-to-guess").innerHTML = Math.floor(Math.random() * 120) + 18;
};


function gameClicks() {
  
  var randomInt = Math.floor(Math.random() * 120) + 18;
  document.getElementById("number-to-guess").innerHTML = randomInt;

  $("#displayCrysOne").on("click", function() {
  keepTrackScore = keepTrackScore + randomOneValue;
  $("#userPoints").html(keepTrackScore);
  console.log(randomOneValue);
  console.log(keepTrackScore);
  }) 

  $("#displayCrysTwo").on("click", function() {
  keepTrackScore = keepTrackScore + randomTwoValue;
  $("#userPoints").html(keepTrackScore);
  console.log(randomTwoValue);
  console.log(keepTrackScore);
  }) 

  $("#displayCrysThree").on("click", function() {
  keepTrackScore = keepTrackScore + randomThreeValue;
  $("#userPoints").html(keepTrackScore);
  console.log(randomThreeValue);
  console.log(keepTrackScore);
  }) 

  $("#displayCrysFour").on("click", function() {
  keepTrackScore = keepTrackScore + randomFourValue;
  $("#userPoints").html(keepTrackScore);
  console.log(randomFourValue);
  console.log(keepTrackScore);
  }) 

};

function checker() {
  if (randomInt === keepTrackScore)
  
};



function keepTabsVariables () {
  $("#winScore").html(wins);
  $("#lossScore").html(losses);
  $("#userPoints").html(keepTrackScore);
}



//main process

randomInt();
gameClicks();
keepTabsVariables();
