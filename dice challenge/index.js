var randomNo1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg1 = "images/" + "dice" + String(randomNo1) + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImg1);

var randomNo2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2 = "images/" + "dice" + String(randomNo2) + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);

if (randomNo1 == randomNo2) {
  document.querySelectorAll("h1")[1].style.fontSize = "3rem";
  document.querySelectorAll("h1")[1].innerHTML = "Draw";
} else if (randomNo2 > randomNo1) {
  document.querySelectorAll("h1")[1].style.fontSize = "3rem";
  document.querySelectorAll("h1")[1].innerHTML = "player 2 wins!!";
} else {
  document.querySelectorAll("h1")[1].style.fontSize = "3rem";
  document.querySelectorAll("h1")[1].innerHTML = "player 1 wins!!";
}
