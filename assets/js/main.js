var nomeUtente = "";
var km = 0;
var età = "medio";

function annullare() {
    document.querySelector("#nome_cognome").value = "";
    km = document.querySelector("#km").value = "";
    età = document.querySelector("#fascia_età").value = "medio";

    document.getElementById("nome_utente").innerHTML = "";
    document.getElementById("costo_biglietto").innerHTML = "";
    document.getElementById("offerta").innerHTML = "";
    document.getElementById("carrozza").innerHTML = "";
    document.getElementById("codice_treno").innerHTML = "";
}

function generare() {
    nomeUtente = document.querySelector("#nome_cognome").value.toLowerCase();
    km = document.querySelector("#km").value;
    età = document.querySelector("#fascia_età").value;
    console.log(nomeUtente, km, età);


    //nome utente
    document.getElementById("nome_utente").innerHTML = nomeUtente;

    //prezzo biglietto e se minorenni sconto 20%, se over 65 sconto 40%
    //e offerta
    var prezzo = 0.21 * km;
    var prezzoFinale;
    if (età == "minorenne") {
        prezzoFinale = (prezzo * 80) / 100;
        document.getElementById("costo_biglietto").innerHTML = prezzoFinale.toFixed(2) + " €";
        document.getElementById("offerta").innerHTML = "Sconto per minorenni";
    } else if (età == "over") {
        prezzoFinale = (prezzo * 60) / 100;
        document.getElementById("costo_biglietto").innerHTML = prezzoFinale.toFixed(2) + " €";
        document.getElementById("offerta").innerHTML = "Sconto per over 60";
    } else {
        prezzoFinale = prezzo;
        document.getElementById("costo_biglietto").innerHTML = prezzoFinale.toFixed(2) + " €";
        document.getElementById("offerta").innerHTML = "Non hai diritto a sconti";
    }

    //carrozza
    var numeroCarrozza = Math.ceil(Math.random() * 50);
    document.getElementById("carrozza").innerHTML = numeroCarrozza;

    //codice treno
    var codiceTreno = Math.floor(Math.random() * (999999 - 90000 + 1) + 90000);
    document.getElementById("codice_treno").innerHTML = codiceTreno;
}

document.getElementById("annulla").addEventListener('click', annullare);

document.getElementById("genera").addEventListener("click", generare);
