// TEST
// alert ("ciao come va?")

// INPUT
let km = prompt("Quanti km vuoi percorrere"); //string
console.log(km , typeof km);
let age = prompt("Quanti anni hai?"); //string
console.log(age , typeof age);

// trasformazione string in numeri
km = parseInt(km); //number
console.log(km , typeof km);

age = parseInt(age); //number
console.log(age , typeof age);

// LOGICA
// creazione var costo prezzo finale
let ticketPrice;

const priceKm = 0.21;

// calcolo prezzo biglietto in base per passeggeri di età fra 18 e e 65 anni compresi
if (age < 18 && age > 65) {
    ticketPrice = "sei medio";
}
console.log(ticketPrice);