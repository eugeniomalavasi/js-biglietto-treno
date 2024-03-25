// TEST
// alert ("ciao come va?")

// INPUT
let km = prompt("Quanti km vuoi percorrere"); //string
console.log(km , typeof km);
let age = prompt("Quanti anni hai?"); //string
console.log(age , typeof age);

// trasformazione string in numeri
km = parseInt(km); // number
console.log(km , typeof km);

age = parseInt(age); // number
console.log(age , typeof age);

// LOGICA
// var costo al km
const priceKm = 0.21; // number

// var costo biglietto fra i 18 e i 65 compresi
let ticketPrice = priceKm * km; // number
console.log(ticketPrice);

// calcolo costo biglietto con sconti in base all'età
if (age < 18) {
    ticketPrice = (ticketPrice - (ticketPrice / 100) * 20); // number
    console.log(ticketPrice);
} else if (age > 65) {
    ticketPrice = (ticketPrice - (ticketPrice /100) * 40); // number
    console.log(ticketPrice , typeof ticketPrice);
}

// ticketPrice = ticketPrice.toString();
// console.log(typeof ticketPrice);

// OUTPUT
document.getElementById("finalprice").innerHTML = ticketPrice;