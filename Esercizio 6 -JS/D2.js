/* ESERCIZIO 1 --> OKAY
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 10
let num2 = 20

if(num1 < num2) {
  console.log('Il numero più grande è: ' + num1)
} else {
  console.log('Il numero più piccolo è: ' + num2)
}

/* ESERCIZIO 2 --> OKAY
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */  

let num = 9;
if (num != 5) {
  console.log(num + 'not equal')
}


/* ESERCIZIO 3 --> OKAY
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num3 = prompt('Inserisci un numero');
if (num3 % 5 === 0) {
  console.log('divisibile per 5')
}  

/* ESERCIZIO 4 ---> OKAY
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num4 = 10;
let num5 = 2;

if(num5 == 8 || num4 == 8) {
  console.log('il numero è pari a 8')
} else if (num4 + num5 == 8 || num4 - num5 == 8) {
  console.log('il risultato della somma/differenza è uguale a 8');
} else {
  console.log('Nessun 8 trovato');
}


/* ESERCIZIO 5 --> OKAY
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 70;

if(totalShoppingCart > 50) {
  console.log ('Hai superato €50 di spesa. Hai diritto alla spedizione gratuita');
} else {
  console.log('Non hai superato €50 di spesa. Verrà applicato un costo di spedizione di €10. Il totale sarà di:' +(totalShoppingCart + 10))
}


/* ESERCIZIO 6 --> OKAY
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sconto = (totalShoppingCart / 100) * 20;
let costoFinale = totalShoppingCart - sconto;
console.log(costoFinale); 

if(sconto > 50) {
  console.log ('Hai superato €50 di spesa. Hai diritto alla spedizione gratuita');
} else {
  console.log('Non hai superato €50 di spesa. Verrà applicato un costo di spedizione di €10. Il totale sarà di:' +(totalShoppingCart + 10))
}


/* ESERCIZIO 7 --> OKAY
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num6 = 1;
let num7 = 2;
let num8 = 3;

if (num6 > num7) {
  console.log(num6);
} else if (num7 < num8) {
  console.log(num7);
} else {
  console.log(num8);
}


/* ESERCIZIO 8 --> OKAY
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num9 = 6;
if (typeof num9 === "number"){
  console.log("Il valore è un numero")
} else{
  console.log("Il valore non è un numero")
}

/* ESERCIZIO 9 ---> OKAY
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 13;
let risultato = numero % 2;
console.log(risultato);

if(risultato == 0) {
  console.log('Il numero inserito è  dispari')
} else {
  console.log('Il numero inserito è pari')
}


/* ESERCIZIO 10 --> OKAY
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
  if (val < 10 && val >= 6) {
      console.log("Meno di 10");
    } else if (val <= 5) {
      console.log("Minore o uguale a 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11 --> OKAY
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = 'Toronto';
console.log(me.city);

/* ESERCIZIO 12 --> OKAY
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13 ---> OKAY
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let end = me.skills.pop();
console.log(end + 'è il valore eliminato dal nostro array'); 

/* ESERCIZIO 14 --> OKAY
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let lista = [];
lista.splice(1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(lista);

/* ESERCIZIO 15 --> OKAY
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
lista[9] = 100;
console.log(lista);
