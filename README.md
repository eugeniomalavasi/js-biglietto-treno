Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

#Calcolo costo biglietti del treno

##Input
- [ ] richiedere km da percorre
- [ ] richiedere età passeggero

##Logica
- [ ] creazione variabile per il prezzo del biglietto (ticketPrice)
- [ ] calcolo prezzo biglietto in base per passeggeri di età fra 18 e e 65 anni compresi
    - 0.21 * km
- [ ] calcolo prezzo biglietto per <18 
    - if passengerAge <18 ticketPrice = ((ticketPrice / 100) * 20) + ticketPrice
- [ ] calcolo prezzo biglietto per >65
    - if passengerAge  >65 ticketPrice = ((ticketPrice / 100) * 40) + ticketPrice

##Output
- [ ] stampare in HTML ticketPrice