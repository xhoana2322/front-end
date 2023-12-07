
// chiamata dell'ajax

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://striveschool-api.herokuapp.com/books');
xhr.send();

// let arrayLibri = [];

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log('Load document complete!');

        let json = xhr.responseText;
        // let json = xhr.response;   --> è la stessa cosa di quello sopra, sono entrambe delle stringhe
        // console.log(json);

        let obj = JSON.parse(json);
        console.log(obj);

        createCard(obj);
    }
}



function createCard(libri) {

    let bookSpace = document.querySelector('.row');

    for (let i = 0; i < libri.length; i++) {
        let div = document.createElement('div');
        bookSpace.appendChild(div);
        div.classList.add('col')
        div.innerHTML = `
        
            <div class="card" style="width: 18rem;">
                <img src='${libri[i].img}' class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${libri[i].title}</h5>
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${libri[i].category}</li>
                        <li class="list-group-item">${libri[i].price}</li>
                    </ul>
                <div class="card-body">
                    <button type="button" class="btn btnShop btn-success">Compra ora</button>
                    <button type="button" class="btn btnDelete btn-danger">Elimina</button>
                </div>
            </div> `
        
    // let btnDelete = document.querySelectorAll('.btnDelete');
    // btnDelete.forEach(b => {
    //     b.addEventListener('click', (b) => {
    //         // console.log(b.target)
    //         b.target.parentNode.parentNode.parentNode.classList.add('d-none')
    //     })
        
    // })


    // let btnShop = document.querySelectorAll('.btnShop');
    // btnShop.forEach(s => {
    //     s.addEventListener('click', (s) => {
    //     // console.log(s.target)
    //     localStorage.setItem('title', s.title)
    //     })
    // }) 
    // }

    
        let btnDelete = document.querySelectorAll('.btnDelete');
            btnDelete[i].addEventListener('click', (b) => {
                // console.log(b.target)
                b.target.parentNode.parentNode.parentNode.classList.add('d-none')
            })
        }


        let btnShop = document.querySelectorAll('.btnShop');
            btnShop[i].addEventListener('click', (s) => {
            // console.log(s.target)
            localStorage.setItem('title', s.title)
            })
        }
