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
// se utente ha meno di 18 anni applicare 20% di sconto
// se utente ha più di 65 anni applicare 40% di sconto
// pubblicare in pagina il prezzo del biglietto arrotondato ai centesimi di euro
