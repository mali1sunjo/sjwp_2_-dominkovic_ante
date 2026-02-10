function izracunajLjubav() {
    var ime1 = document.getElementById("ime1").value;
    var ime2 = document.getElementById("ime2").value;
    var rezultat = document.getElementById("rezultat");

    // Bonus: provjera unosa
    if (ime1 === "" || ime2 === "") {
        rezultat.innerHTML = "⚠️ Molimo unesite oba imena!";
        return;
    }

    var ljubavniRez = Math.floor(Math.random() * 100) + 1;
    var poruka = "";

    if (ljubavniRez <= 30) {
        poruka = "Hmm... možda samo prijateljstvo 😅";
    } else if (ljubavniRez <= 70) {
        poruka = "Ima iskre! 💕";
    } else {
        poruka = "Savršena ljubav! 💖🔥";
    }

    rezultat.innerHTML =
        ime1 + " i " + ime2 + " imaju ljubavni rezultat: <strong>" +
        ljubavniRez + "%</strong><br>" + poruka;
}
