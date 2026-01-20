document.getElementById("prijavaForma").addEventListener("submit", function (event) {
    event.preventDefault(); // sprječava slanje forme

    let ime = document.getElementById("ime").value;
    let prezime = document.getElementById("prezime").value;
    let email = document.getElementById("email").value;
    let lozinka = document.getElementById("lozinka").value;
    let poruka = document.getElementById("poruka");

    
    if (ime === "" || prezime === "") {
        poruka.textContent = "Ime i prezime ne smiju biti prazni!";
        poruka.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        poruka.textContent = "Email mora sadržavati znak @!";
        poruka.style.color = "red";
        return;
    }

    if (lozinka.length < 6) {
        poruka.textContent = "Lozinka mora imati najmanje 6 znakova!";
        poruka.style.color = "red";
        return;
    }

   
    poruka.textContent = "Uspješna prijava!";
    poruka.style.color = "green";
});
