var randomNumber1 =  Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource1 = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); 

//player 1 wins 
if (randomImageSource1 > randomImageSource2) {
    document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins!";
    document.querySelector("h1").classList.add("reduce");
}

else if (randomImageSource2 > randomImageSource1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681";
    document.querySelector("h1").classList.add("reduce");
} else{
    document.querySelector("h1").innerHTML = "Draw!";
}








