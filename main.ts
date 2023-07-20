
class CapoAbbigliamento {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
  
    constructor(
      id: number,
      codprod: number,
      collezione: string,
      capo: string,
      modello: number,
      quantita: number,
      colore: string,
      prezzoivaesclusa: number,
      prezzoivainclusa: number,
      disponibile: string,
      saldo: number
    ) {
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
  
   
    getsaldocapo(): void {
      this.prezzoivainclusa = this.prezzoivainclusa - this.saldo;
    }
  
    
    getacquistocapo(): number {
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
  


    