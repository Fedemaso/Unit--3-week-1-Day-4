function calcolaPrezzoFinale(prezzoIvaInclusa, scontoPercentuale) {
  const sconto = prezzoIvaInclusa * (scontoPercentuale / 100);
  const prezzoFinale = prezzoIvaInclusa - sconto;
  return prezzoFinale.toFixed(2);
}

// fetch del file JSON e crezione istanze di CapoAbbigliamento
fetch("Abbigliamento.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("abbigliamentoContainer");

    data.forEach((item) => {
      // prezzo finale con lo sconto
      const prezzoFinale = calcolaPrezzoFinale(
        item.prezzoivainclusa,
        item.saldo
      );

      // Creazione card capo di abbigliamento
      const card = document.createElement("div");
      card.classList.add("col-md-6", "mb-2", "card", "h-100", "cards");

      card.innerHTML = `
            <div class="card-body ">
              <h5 class="card-title fs-2">Capo: ${item.capo}</h5>
              <p class="card-text">Collezione: ${item.collezione}</p>
              <p class="card-text">Modello: ${item.modello}</p>
              <p class="card-text">Quantità disponibile: ${item.quantita}</p>
              <p class="card-text">Colore: ${item.colore}</p>
              <p class="card-text">Prezzo IVA esclusa: €${item.prezzoivaesclusa.toFixed(
                2
              )}</p>
              <p class="card-text">Prezzo IVA inclusa: €${item.prezzoivainclusa.toFixed(
                2
              )}</p>
              <p class="card-text">Disponibile: ${item.disponibile}</p>
              <p class="card-text">Saldo: ${item.saldo}%</p>
              <p class="card-text fs-4">Prezzo finale: €${prezzoFinale}</p>
            </div>
          `;

      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Si è verificato un errore:", error);
  });
