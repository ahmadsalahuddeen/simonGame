var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = [];
var userChoosenPattern = [];
function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}
var started = false;
var level = 0;

$("#level-title").on("click", function () {
  if (!started) {
      $("#level-title").text("Level  " + level);
      nextSequence();
      started = true;
  }
});


// User click function
$(".btn").on('click', function () {
   
  var userChoosenColour = $(this).attr("id")
  userChoosenPattern.push(userChoosenColour);

  playSound(userChoosenColour);
  animatePress(userChoosenColour);
  checkAnswer(userChoosenPattern.length-1)
});




function checkAnswer(currentlevel){

  if(gamePattern[currentlevel] === userChoosenPattern[currentlevel]){
    
    console.log("succes");

    if(userChoosenPattern.length === gamePattern.length){
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  }else{
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Touch me to Restart")
startOver();

  }
  }





// next game pattern function
function nextSequence() {
  userChoosenPattern = [];
  level++
  $("#level-title").text("Level  " + level);
    var randomnumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomnumber];
    gamePattern.push(randomChosenColour);

    
 $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour)
}




// PLay sound
function playSound(name) { 
  var  sound = new Audio('sounds/' + name +'.mp3');
  sound.play();
 }


// animate user clicked button
 function animatePress(currentColour){
  $("#"+ currentColour).addClass('pressed');
   setTimeout(() => {
    $("#"+ currentColour).removeClass('pressed');
   }, 100);


}





