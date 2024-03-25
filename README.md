# Calcolo costo biglietti del treno

### Istruzioni per lo svolgimento
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



## Input
- [x] richiedere km da percorre
- [x] richiedere età passeggero

## Logica
- [x] creazione variabile per il prezzo del biglietto (ticketPrice)
- [x] creazione variabile costo al km (priceKm)
- [x] calcolo prezzo biglietto base
    - 0.21 * km
- [x] calcolo prezzo biglietto per < 18 
- [x] calcolo prezzo biglietto per > 65
- [ ] BONUS: mettere all'output del prezzo del biglietto due decimali dopo la virgola

## Output
- [x] stampare in HTML ticketPrice