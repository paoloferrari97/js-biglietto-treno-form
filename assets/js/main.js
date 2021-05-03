var nomeUtente = "";
var km = 0;
var età = "medio";

function annullare() {
    document.querySelector("#nome_cognome").value = "";
    km = document.querySelector("#km").value = "";
    età = document.querySelector("#fascia_età").value = "medio";
}

function generare() {
    nomeUtente = document.querySelector("#nome_cognome").value;
    km = document.querySelector("#km").value;
    età = document.querySelector("#fascia_età").value;

    console.log(nomeUtente, km, età);
}

document.getElementById("annulla").addEventListener('click', annullare());

document.getElementById("genera").addEventListener("click", generare());