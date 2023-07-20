"use strict";
class CapoAbbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getsaldocapo() {
        this.prezzoivainclusa = this.prezzoivainclusa - this.saldo;
    }
    getacquistocapo() {
        return this.prezzoivainclusa;
        ;
    }
}
const api = "./Abbigliamento.json";
fetch(api)
    .then((response) => response.json())
    .then((data) => {
    console.log("Dati ricevuti dall'API:", data);
})
    .catch((error) => {
    console.error("Si è verificato un errore:", error);
});
