/* ESERCIZIO 1 ---> okay
    Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/
 let h1 = window.document.getElementById("titolo")
 console.log(h1)

    const changeTitle = function () {
        h1.innerText = "Titolo iniziale della pagina"

        // document.querySelector("div > h1").innerText = "Titolo iniziale della pagina"
    }

    changeTitle()


/* ESERCIZIO 2 -->> okay!!
    Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/
 
 let classe = document.querySelector('h1')


    const addClassToTitle = function () {
        classe.classList.add("myHeading")

        //  document.querySelector('div < h1').className = "myHeading"
    }
    
    addClassToTitle()


/* ESERCIZIO 3 --> mi prende un solo P
    Scrivi una funzione che cambi il testo dei p figli di un div
*/
 let p = document.querySelector('div > p');
 console.log(p)
 console.dir(p)

    const changePcontent = function () {
        p.innerText = 'Ho cambiato il testo dei p figli di div'
    }

    changePcontent()

   /*  const changePcontent = function () {
        const p = document.querySelectorAll('div > p')
        // console.log(p)  

        p.forEach(paragraph => {
            paragraph.innerText = "Ho cambiato il testo dei p figli di div"
        }) 

        changePcontent()  */

        //   N.B. si usa il forEach per applicare la stessa modifica a tutti i p
        
    

 
/* ESERCIZIO 4 --> OKAYYY
    Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

    const changeUrls = function () {
    let link = document.querySelectorAll('a:not(footer a)');
        link.forEach(function(link) {
        link.href  = 'https://www.google.com'
        });   
    }
    
    changeUrls() 

/* ESERCIZIO 5 ---> okay
    Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/
    const addToTheSecond = function () {
    let li = document.createElement("li");
        li.innerText = "4th";
        document.querySelector("#secondList").appendChild(li);
    };

    addToTheSecond();

/* ESERCIZIO 6 --> non va il firstoftype
    Scrivi una funzione che aggiunga un paragrafo al primo div
 */

 /* let div1 = document.querySelectorAll('div');
console.log(div1)

    const addParagraph = function () {
        div1.innerText = 'Aggiungo un nuovo testo'
    }
 
    addParagraph()

/* ESERCIZIO 7 --> OKAY
     Scrivi una funzione che faccia scomparire la prima lista non ordinata
 */
 
    const hideFirstUl = function () {
        let q = document.querySelector("#firstList");
    
        // display none ???
        q.style.visibility = "hidden";
    }

          hideFirstUl();
 
/* ESERCIZIO 8 --> ma non mi prende il colore o_o
    Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

/* let background = document.querySelectorAll('ul')
console.log(background)

    const paintItGreen = function () {
        background.style.backgroundColor = 'green'
    }
 
    paintItGreen()

/* ESERCIZIO 9 (extra perchè non lo abbiamo visto insieme)
    Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
 */
 
    const makeItClickable = function () {}
 
/* ESERCIZIO 10 --> OKAY
    Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/
 
    /* const revealFooterLink = function () {
        let click = document.querySelector('footer a');
        alert('https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents')
    }

    revealFooterLink()

/* ESERCIZIO 11 -- > OKAY
    Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
    La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
 */
   // let table = document.getElementById('tableArea');
    // console.log(table)


    const generateTable = function () {
        // let createTable = document.getElementById('tableArea')
        // console.log(table)
        let table = document.createElement('table')
        let thead = document.createElement('thead')
        let tbody = document.createElement('tbody')

        table.appendChild(thead);
        table.appendChild(tbody);

        let createTable = document.getElementById('tableArea').appendChild(table);

        // prima riga

        let row1 = document.createElement('tr')

        let heading1 = document.createElement('th')
        heading1.innerText = 'imamgine'

        let heading2 = document.createElement('th')
        heading2.innerText = 'nome prodotto'

        let heading3 = document.createElement('th')
        heading3.innerText = 'quantità'

        let heading4 = document.createElement('th')
        heading4.innerText = 'prezzo'

        row1.appendChild(heading1);
        row1.appendChild(heading2);
        row1.appendChild(heading3);
        row1.appendChild(heading4);
        thead.appendChild(row1);

        // seconda riga

        let row2 = document.createElement('tr')

        let row2Data1 = document.createElement('th')
        row2Data1.innerText = 'Logo Netflix'

        let row2Data2 = document.createElement('th')
        row2Data2.innerText = 'Netflix'

        let row2Data3 = document.createElement('th')
        row2Data3.innerText = 'media'

        let row2Data4 = document.createElement('th')
        row2Data4.innerText = 'esagerato'

        row2.appendChild(row2Data1);
        row2.appendChild(row2Data2);
        row2.appendChild(row2Data3);
        row2.appendChild(row2Data4);
        tbody.appendChild(row2);


    }

    generateTable()
 
/* ESERCIZIO 12 --> come faccio ad inserire il tbody?
     Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
 */
 
    /* const addRow = function () {
        
        let row3 = document.createElement('tr')

        let row3Data1 = document.createElement('th')
        row3Data1.innerText = 'Logo Disney'

        let row3Data2 = document.createElement('th')
        row3Data2.innerText = 'Disney'

        let row3Data3 = document.createElement('th')
        row3Data3.innerText = 'buona'

        let row3Data4 = document.createElement('th')
        row3Data4.innerText = 'giusta'

        row3.appendChild(row3Data1);
        row3.appendChild(row3Data2);
        row3.appendChild(row3Data3);
        row3.appendChild(row3Data4);
        tbody.appendChild(row3);
    }

    addRow()
 
/* ESERCIZIO 13 -- si può fare
     Crea una funzione che nasconda le immagini della tabella quando eseguita
*/
 
    const hideAllImages = function () {}
 
/* EXTRA ESERCIZIO 14 -- si può fare
    Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/
 
   /* const changeColorWithRandom = function () {
        let cambioColore = document.getElementById('changeMyColor');
        
    }
 
    changeColorWithRandom()

/* EXTRA ESERCIZIO 15
    Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
 */
 
    const deleteVowels = function () {}