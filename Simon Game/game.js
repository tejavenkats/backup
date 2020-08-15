var colors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  var userChosenButton = $(this).attr("id");
  userClickPattern.push(userChosenButton);
  playAudio(userChosenButton);
  animateClick(userChosenButton);

  checkAns(userClickPattern.length - 1);
});

function checkAns(currentLevel) {
  if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
    console.log("success");
    if (userClickPattern.length == gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playAudio("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over. Press any KEY to restart.");
    startOver();
  }
}

function nextSequence() {
  userClickPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var n = Math.random() * 4;
  var randomNo = Math.floor(n);
  var chooseRandomColor = colors[randomNo];
  gamePattern.push(chooseRandomColor);
  $("#" + chooseRandomColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playAudio(chooseRandomColor);
}

function playAudio(audioToPlay) {
  var audio = new Audio("sounds/" + audioToPlay + ".mp3");
  audio.play();
}

function animateClick(colorPressed) {
  $("#" + colorPressed).addClass("pressed");
  setTimeout(function () {
    $("#" + colorPressed).removeClass("pressed");
  }, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
