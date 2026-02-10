// Dohvat elemenata
const distanceInput = document.getElementById("distance");
const consumptionInput = document.getElementById("consumption");
const priceInput = document.getElementById("price");
const button = document.getElementById("calculateBtn");
const errorDiv = document.getElementById("error");
const resultDiv = document.getElementById("result");

button.addEventListener("click", function () {
    // Očisti stare poruke
    errorDiv.textContent = "";
    resultDiv.textContent = "";

    // Pretvaranje u brojeve
    const distance = Number(distanceInput.value);
    const consumption = Number(consumptionInput.value);
    const price = Number(priceInput.value);

    // VALIDACIJA
    if (!distanceInput.value || !consumptionInput.value || !priceInput.value) {
        errorDiv.textContent = "Sva polja moraju biti ispunjena.";
        return;
    }

    if (isNaN(distance) || isNaN(consumption) || isNaN(price)) {
        errorDiv.textContent = "Unesite ispravne brojčane vrijednosti.";
        return;
    }

    if (distance <= 0 || consumption <= 0 || price <= 0) {
        errorDiv.textContent = "Vrijednosti moraju biti veće od 0.";
        return;
    }

    // IZRAČUN
    const liters = (distance * consumption) / 100;
    const cost = liters * price;

    // Poruka o trošku
    let message = "";
    if (cost < 20) {
        message = "Jeftino putovanje.";
    } else if (cost <= 80) {
        message = "Standardan trošak putovanja.";
    } else {
        message = "Skupo putovanje — razmisli o dijeljenju troška.";
    }

    // ISPIS
    resultDiv.innerHTML = `
        <p><strong>Potrebno goriva:</strong> ${liters.toFixed(2)} L</p>
        <p><strong>Ukupan trošak:</strong> ${cost.toFixed(2)} €</p>
        <p><em>${message}</em></p>
    `;
});
