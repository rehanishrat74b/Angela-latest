$(document).ready(function () {
  $(document).keypress(function (event) {
    if (!gameStarted) {
      gameStarted = true;
      $("h1").text("Level 0");
      nextSequence();
    }
  });
});


var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var gameStarted=false;
var level = 0;

function nextSequence(){
  var randomNumber=Math.floor(Math.random() *3 );
  var randomChosenColour =buttonColours[randomNumber];


  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  animatePress(randomChosenColour);
  playSound(randomChosenColour);
  level++;
  
  $("h1").text("Level " + level);
}

function animatePress(randomChosenColour){
  $("#" + randomChosenColour).addClass("pressed");
  setTimeout(function () { $("#" + randomChosenColour).removeClass("pressed") }, 100);

}


function playSound(file){
  const mySound = new Audio("sounds/" + file + ".mp3");
  mySound.play();
}

$(".btn").on('click', function () {
  var userChosenColour =this.id;
  if (gameStarted){
    userClickedPattern.push(userChosenColour);    
    animatePress(userChosenColour);
    playSound(userChosenColour);    
    
    checkAnswer(userClickedPattern.length-1);

  }
  

  //console.log(userClickedPattern);
});

function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel]==gamePattern[currentLevel]){
    console.log("success " + userClickedPattern[currentLevel]);

    if(userClickedPattern.length==gamePattern.length){
      setTimeout(function () { nextSequence(); userClickedPattern=[];}, 1000);     

    }

  }
  else { 
    console.log("false " + userClickedPattern[currentLevel]);
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200)
    playSound("wrong");
    $("h1").text("Game Over. Press any key to restart.");
    gameStarted=false;
    userClickedPattern=[];
    level=0;
  }
}