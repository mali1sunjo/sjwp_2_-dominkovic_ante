function randNumber(){
    return Math.floor(Math.random() * 100) + 1; 
}

let randNumber1 =  randNumber();
let pokusaji = 0;

let input =  document.getElementById("guess");
let msg = document.getElementById("message");
let attempt = document.getElementById("attempts");



function updateAttempts(){
    attempt.innerHTML = "Pokusaji: " + pokusaji;
}

updateAttempts();

function checkNumber(event){
    event.preventDefault();
    let value = parseInt(input.value);
    //console.log(value);//asdasdasdasdas
    if(isNaN(value) || value < 1 || value > 100){
        msg.innerHTML = "Unesi broj izmedu 1 i 100";
        msg.style.color = "red";
        return;
    }

    pokusaji++;
    updateAttempts();

    if(value === randNumber1){
        msg.innerHTML = "Cestitamo! Pogodili ste broj.";
        msg.style.color = "green";
        // disable input and button after correct guess
       
    } else if (value < randNumber1){
        msg.innerHTML = "Broj je manji!";
        msg.style.color = "blue";
    } else {
        msg.innerHTML = "Broj je veci!";
        msg.style.color = "blue";
    }
}

function newGame(){
    randNumber1 = randNumber();
    pokusaji = 0;
    input.value="";
    msg.innerHTML="Nova igra";
    msg.style.color="Black";
    updateAttempts();
    input.focus();
}
