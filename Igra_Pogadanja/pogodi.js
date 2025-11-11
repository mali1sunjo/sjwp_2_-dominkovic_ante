function randNumber(){
    return Math.floor(Math.random() * 100) + 1; 
}

let randNumber1 =  randNumber();
let pokusaji = 0;

let input =  document.getElementById("guess");
let msg = document.getElementById("msg");
let attempt = document.getElementById("attempts");

function updateAttempts(){
attempt.innerHTML = "Pokusaji: " + pokusaji;
}

function checkNumber(event){
    event.preventDefault();
    let value = parseInt(input.value);
    console.log(value);//

}

function newGame(){

}