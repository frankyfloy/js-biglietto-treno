//inizializzazione variabili
var km = 0;
var età = -1;
var scontoMinori = 20;
var scontoOver65 = 40;
var prezzoKm = 0.21;
var prezzoTotale = 0;


// Controllo Input km
var kmTemp = prompt("Inserisci i km da percorrere : ");
if (!isNaN(kmTemp)) {
    km = kmTemp;
}else {
    console.log("Kilometri non validi");
}


// Controllo Input età
var etàTemp = prompt("Inserisci la tua età : ");
if (!isNaN(etàTemp)) {
    età = etàTemp;
}else {
    console.log("Età non valida");
}



// Calcolo sconto
if (!isNaN(km)  && !isNaN(età)) {
    prezzoTotale = prezzoKm * km;

    if (età < 18) {
        prezzoTotale -= prezzoTotale * scontoMinori / 100;
        console.log(prezzoTotale);
    } else if (età >= 65) {
        prezzoTotale -= prezzoTotale * scontoOver65 / 100;
        console.log(prezzoTotale);
    }  else{
        prezzoTotale;
        console.log(prezzoTotale);
    }
}
