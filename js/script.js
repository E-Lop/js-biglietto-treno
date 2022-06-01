/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere 
e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

// chiedere a utente quanti km deve viaggiare
const tripLength = parseInt(prompt('Quanti km devi percorrere in treno?'));

// chiedere a utente quanti anni ha
const userAge = parseInt(prompt('Quanti anni hai?'));

// calcolare prezzo standard del biglietto
let ticketPrice = tripLength * 0.21;

let discountedTicketPrice;
let messageToUser;

// se utente ha meno di 18 anni applicare 20% di sconto
// se utente ha più di 65 anni applicare 40% di sconto
// altrimenti applicare prezzo standard
if (userAge < 18) {
  discountedTicketPrice = ticketPrice * 0.8;
  messageToUser = `Il costo del biglietto è ${discountedTicketPrice.toFixed(
    2
  )} euro`;
} else if (userAge > 65) {
  discountedTicketPrice = ticketPrice * 0.6;
  messageToUser = `Il costo del biglietto è ${discountedTicketPrice.toFixed(
    2
  )} euro`;
} else {
  messageToUser = `Il costo del biglietto è ${ticketPrice.toFixed(2)} euro`;
}

// pubblicare in pagina il prezzo del biglietto arrotondato ai centesimi di euro
document.getElementById('final_message').innerHTML = messageToUser;
