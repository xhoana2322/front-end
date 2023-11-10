function creaTabellone(){
    let tabellone = document.querySelector('#tabellone')


   // let table = document.createElement('table');
   // console.log(table)

    for (let i = 1; i <= 77; i++) {
        let cella = document.createElement('div');
        cella.innerText = [i];
        tabellone.appendChild(cella);
        cella.className = 'cellaTabellone';
        console.log(tabellone);
    }

}
creaTabellone()



 function estraiNumero() {
    let button = document.querySelector('#button');
    let numeriselezionati = document.querySelectorAll('#tabellone div');

    button.addEventListener('click', () => {
        let numeroEstratto = (Math.ceil(Math.random()*76));
         console.log(numeroEstratto);

        numeriselezionati.forEach(cella => {
            numeriselezionati[numeroEstratto -1].style.backgroundColor = 'red';
         })
    })
}
estraiNumero() 




// EXTRA - non va yeee

/* function estraiNumero() {
    let button = document.querySelector('#button');
    let numeriselezionati = document.querySelectorAll('#tabellone div');
    let numeriEstratti = [];

    button.addEventListener('click', () => {
        let numeroEstratto;

         do {
            numeroEstratto = (Math.ceil(Math.random()*76));
        } while (numeriEstratti.includes(numeroEstratto));
        
        // console.log(numeroEstratto);
        numeriEstratti.push(numeroEstratto); 

        let numeriselezionati = document.querySelectorAll('#tabellone div');

        numeriselezionati.forEach(cella => 
                numeriEstratti(numeroEstratto-1).style.backgroundColor = 'red')
            
       // numeriselezionati[numeroEstratto -1].style.backgroundColor = 'red';
         })
    }

estraiNumero() */