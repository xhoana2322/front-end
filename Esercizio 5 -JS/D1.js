/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Il dato Stringa è un dato che viene indicato mediante un testo all'interno di doppi apici o un apice e può essere trascrtitto in questi tre modi:
let str1 = "Questa è una 'Stringa'"; //Possiamo usare doppio apice esterno e un apice all'interno;
let str2 = 'Questa è una "Stringa"'; //Possiamo usare un apice esterno e doppio apice all'interno;
let str3 = "Questa è una /'nuova' Stringa"; // Inoltre, possiamo inserire all'interno degli apici uno slash per far sì che gli apici interni non vengano letti.

console.log(str1);
console.log(str2);
console.log(str3);


//Il dato Numerico è un dato che viene indicato mediante un numero, decimale o intero
let num1 = 3;
let num2 = 3.5; 

console.log(num1);
console.log(num2);

//Il Boolean è un dato che indica unicamente "true" o "false"
let bol1 = true;
let bol2 = false;

console.log(bol1);
console.log(bol2);

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Xhoana";

console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = 12;
let num4 = 20;
let somma = num3 + num4;

console.log(somma);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

console.log(x);


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let name = "Xhoana"; // Errore.
// const name = "Beqiri"; // Non è possibile cambiare il valore della nostra variabile poichè il costrutto const ha un unico valore e non può essere riassegnato. 

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num5 = 4;
let diff = num5 - x;

console.log(diff);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";

console.log(name1 == name2);
console.log(name1 === name2.toLowerCase("Jhon"))

