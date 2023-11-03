/* ESERCIZIO 1 --> OKAY
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
    let molt = l1 * l2;
    console.log(molt);
}
area(3, 9);

/* ESERCIZIO 2 --> OKAY
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo 
 deve invece tornare la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(x, y) {
    if (x === y) {
        return (x + y)*3;
    } else {
        return x + y;
    }
}

console.log(crazySum (10, 10));
console.log(crazySum (2, 8));

/* ESERCIZIO 3 --> OKAY
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 
// dobbiamo usare la funzione abs --> absolute
function crazyDiff(w, z) {
    if (w > z) {
        return (w - z)*3;
    } else {
        return w - z;
    }
}

console.log(crazyDiff(5, 19));
console.log(crazyDiff(23, 19));

/* ESERCIZIO 4 --> esce sempre true
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true 
 se n è compreso tra 20 e 100 (incluso) oppure se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num = Math.floor(Math.random() * 1000) + 1;
// console.log(num);

function boundary(num) {
    if (num > 20 && num <= 100 || num === 400) {
        console.log('true');
    } else {
        console.log('Error');
    }
}


/* ESERCIZIO 5 -->OKAY
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita 
 comincia già con "EPICODE" allora deve ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify (stringa){ 
    if (stringa === "Epicode") {
        return stringa;
    } else { 
        return "Epicode" + stringa;
    }
}

let Epicode = epify(" insegna linguaggi di programmazione");
console.log(Epicode);


/* ESERCIZIO 6 --> non riesco a vederla 
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let N = Math.floor(Math.random() * 100) + 1;
// console.log(N);

function check3and7(N) {
    if (N % 3 || N % 7) {
        console.log('è un moltiplicatore di 3 o 7 il paramtro: ' + N);
    } else {
        console.log('Error');
    }
}



/* ESERCIZIO 7 --> OKAY
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro 
 (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str) {
    return (str.split("").reverse().join(""))
}

let rev = reverseString("EPICODE");
console.log(rev);

/* ESERCIZIO 8 --> OKAY
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let par = 'John';
let par2 = par.slice(1);


function upperFirst() {
   
}    

console.log(par2); 

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare 
 una nuova stringa senza il primo e l'ultimo carattere della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */




/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e 
 ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */////