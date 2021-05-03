var nomeUtente = document.querySelector("#nome_cognome").value;
var km = document.querySelector("#km").value;
var età = document.querySelector("#fascia_età").value;

function annullare() {
    document.querySelector("#nome_cognome").value = "";
    km = document.querySelector("#km").value = "";
    età = document.querySelector("#fascia_età").value = "medio";
}

document.getElementById("annulla").addEventListener('click', annullare());
