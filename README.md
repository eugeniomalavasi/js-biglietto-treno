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
- [x] creazione variabile per il prezzo del biglietto (ticketPrice)
- [x] creazione variabile costo al km (priceKm)

## Logica
- [x] calcolo prezzo biglietto base
    costo al km * km da percorrere
- [x] Se l'utente ha < 18 applica sconto del 20%
    - costo del biglietto = costo del biglietto - (costo del biglietto / 100) * sconto
- [x] Altrimenti se l'utente ha > 65 applica sconto del 65%
    - costo del biglietto = costo del biglietto - (costo del biglietto / 100) * sconto


## Output
- [x] stampare in HTML ticketPrice
- [x] BONUS: mettere all'output del prezzo del biglietto due decimali dopo la virgola