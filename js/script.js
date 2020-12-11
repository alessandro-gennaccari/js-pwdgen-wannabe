/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito20 */

var firstName = prompt('Inserisca il suo nome: '); // Dichiarazione variabile firstName, Richiesta del valore all'utente
var surname = prompt('Inserisca il suo cognome: '); // Dichiarazione variabile surname, Richiesta del valore all'utente
var favoriteColor = prompt('Inserisca il suo colore preferito: '); // Dichiarazione variabile favoriteColor, Richiesta del valore all'utente
// Concatenazione delle variabili ed aggiunta della stringa 20, tutto trasformato in minuscolo
document.getElementById('password').innerHTML =
(firstName + surname + favoriteColor + '20').toLowerCase();

document.getElementById('this').innerHTML = '&Egrave; la tua password generata.';