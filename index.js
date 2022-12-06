var randomnum1=6*Math.random();
randomnum1=Math.floor(randomnum1)+1;

var randomDiceImage1="dice"+randomnum1+".png";

var randomDiceImageSource1="images/"+randomDiceImage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImageSource1);

var randomnum2=6*Math.random();
randomnum2=Math.floor(randomnum2)+1;

var randomDiceImage2="dice"+randomnum2+".png";

var randomDiceImageSource2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImageSource2);


if(randomnum1>randomnum2)
document.querySelector("h1").innerHTML="Player1 wins";
if(randomnum1<randomnum2)
document.querySelector("h1").innerHTML="Player2 wins";
if(randomnum1==randomnum2)
document.querySelector("h1").innerHTML="Math Tied";