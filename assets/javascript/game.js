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

function variableReset() {

var randomOneValue = Math.floor(Math.random() * 12) + 1 ;
var randomTwoValue = Math.floor(Math.random() * 12) + 1 ;
var randomThreeValue = Math.floor(Math.random() * 12) + 1 ;
var randomFourValue = Math.floor(Math.random() * 12) + 1 ;

var keepTrackScore = 0;
var randomInt = 0;

}


function gameClicks() {

  
  var randomInt = Math.floor(Math.random() * 120) + 18;
  document.getElementById("number-to-guess").innerHTML = randomInt;
  console.log(randomInt);

  $("#displayCrysOne").on("click", function() {
  keepTrackScore = keepTrackScore + randomOneValue;
  $("#userPoints").html(keepTrackScore);
  checker();
  console.log(randomOneValue);

  }) 

  $("#displayCrysTwo").on("click", function() {
  keepTrackScore = keepTrackScore + randomTwoValue;
  $("#userPoints").html(keepTrackScore);
  checker();
  console.log(randomTwoValue);

  }) 

  $("#displayCrysThree").on("click", function() {
  keepTrackScore = keepTrackScore + randomThreeValue;
  $("#userPoints").html(keepTrackScore);
  checker();
  console.log(randomThreeValue);

  }) 

  $("#displayCrysFour").on("click", function() {
  keepTrackScore = keepTrackScore + randomFourValue;
  $("#userPoints").html(keepTrackScore);
  checker();
  console.log(randomFourValue);

  }) 

console.log(keepTrackScore);
console.log(randomInt);

function checker() {

if (randomInt === keepTrackScore) {
  wins++;
  console.log("user win");
  variableReset();
  gameClicks();
}
else if (keepTrackScore > randomInt) {
  losses++;
  console.log("user lost");
  variableReset();
  gameClicks();
}
};

};
/*
function checker() {

  if (randomInt === keepTrackScore) {
    wins++;
    console.log("user win");
    variableReset();
  }
  else if (keepTrackScore > randomInt) {
    losses++;
    console.log("user lost");
    variableReset();
  }
}; */



function keepTabsVariables () {
  $("#winScore").html(wins);
  $("#lossScore").html(losses);
  $("#userPoints").html(keepTrackScore);
}



//main process
variableReset();
gameClicks();
keepTabsVariables();