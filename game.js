var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = [];

newSequence()





function newSequence() {
    var randomnumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomnumber];
    gamePattern.push(randomChosenColour);

    
 $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
 var  sound = new Audio('sounds/' + randomChosenColour +'.mp3');
 sound.play();
  }

  









