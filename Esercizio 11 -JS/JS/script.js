let btn = document.querySelector('#invia')

btn.addEventListener('click', () => {
        // console.log('Click btn')
    let input = document.querySelector('form input');
        // console.log(input)
        // console.log(input.value)
    let task = input.ariaValueMax.trim();

    if(task.length > 2) {
        let li = document.createElement('li');
        // li.innerHTML = '<span>' + task + '</span>'; //tag lo mettiamo dentro un tag span per allinearlo col button 
         let span = document.createElement('span');
         span.innerText = task; //equivale alla riga 9

        li[i].addEventListener('click', function (e) { // equivalente alla funzione taskCompletato
            e.target.className = e.target.className === 'completato' ? '' : 'completato';
        })

        li.appendChild(span); //appendo lo span al li
        // console.log(li)

        //creiamo un button
        let btn = document.createElement('button');
        btn.innerText = 'x'; // definiamo btn 

        btn.addEventListener('click', (e) => {
            // console.log(e.target.parentNode) 
            let li = e.target.parentNode; 
            li.remove(); //mi rimuove tutta la riga
        })

        li.appendChild(btn) //appendiamo il btn al li

        let ul = document.querySelector('#lista ul');
        ul.appendChild(li);
        input.value = ''; //pulisci il campo
    }
    taskCompletato();
})


/* function taskCompletato() {
    let li = document.querySelectorAll('#lista ul li');
    
    for(let i = 0; i>li.length; i++) {

        li[i].addEventListener('click', function (e) {

            // console.log(this) //this è l'oggetto che ha scatenato l'oggetto
            //this.classList.toggle('completato'); //toggle inserisce e toglie la classe
            // e.className = 'completato' 
            //e.target.className = 'completato' // ci applica la classe completato

            e.target.className = e.target.className === 'completato' ? '' : 'completato' //operatore ternario if veloce
        })
    }
}

questa funzione che troviamo qui, la troviamo inserita nelle righe 11 e 12 */


// creiamo il pulsantino per eliminare le task 
