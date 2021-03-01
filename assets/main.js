//inizializzazione variabili
var km = 0;
var età = -1;
var scontoMinori = 0.20;
var scontoOver65 = 0.40;
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
    var prezzoTemp = prezzoKm * km;

    if (età < 18) {
        prezzoTotale = prezzoTemp - (prezzoTemp * scontoMinori);
        console.log(prezzoTotale);
    } else if (età >= 65) {
        prezzoTotale = prezzoTemp - (prezzoTemp * scontoOver65);
        console.log(prezzoTotale);
    }  else{
        prezzoTotale = prezzoTemp;
        console.log(prezzoTotale);
    }    
}
