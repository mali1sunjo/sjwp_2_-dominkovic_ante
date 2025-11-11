let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
let randomImageSource1 = "images/dice" + randomNumber1 + ".png"; // 
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
let randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // 
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

let randomNumber3 = Math.floor(Math.random() * 6) + 1; // 1-6
let randomImageSource3 = "images/dice" + randomNumber3 + ".png"; // 
document.querySelectorAll("img")[2].setAttribute("src", randomImageSource3);

let randomNumber4 = Math.floor(Math.random() * 6) + 1; // 1-6
let randomImageSource4 = "images/dice" + randomNumber4 + ".png"; // 
document.querySelectorAll("img")[3].setAttribute("src", randomImageSource4);

document.querySelector(".prvi").innerHTML = randomNumber1+randomNumber2;
document.querySelector(".drugi").innerHTML = randomNumber3+randomNumber4;


if (randomNumber1+randomNumber2 > randomNumber3+randomNumber4) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🦟";
}
else if (randomNumber3+randomNumber4 > randomNumber1+randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "It's a Draw!";   
}

