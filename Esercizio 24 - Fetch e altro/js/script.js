
// // button 1
// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('#load-images').addEventListener('click', () => {
//         fetch('https://api.pexels.com/v1/search?query=cat', {
//             method: 'GET',
//             headers: {
//                 Authorization: 'VWQ5WbtmtniFsJeXlEjdPCcMeO6U6MaW8Uf4xAIshjHYoALhzvANQg9B'
//             }
//         })
//             .then(response => response.json())
//             .then(json => {
//                 let img = document.querySelectorAll('.card img')
//                     img.forEach((img, i) => {
//                         img.src = json.photos[i].src.medium;
//                     })
//                 })
//             .catch(error => console.log(error))
//     })
// })

// // button 2
// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('#load-images-secondary').addEventListener('click', () => {
//         fetch('https://api.pexels.com/v1/search?query=dog', {
//             method: 'GET',
//             headers: {
//                 Authorization: 'VWQ5WbtmtniFsJeXlEjdPCcMeO6U6MaW8Uf4xAIshjHYoALhzvANQg9B'
//             }
//         })
//             .then(response => response.json())
//             .then(json => {
//                 let img = document.querySelectorAll('.card img')
//                     img.forEach((img, i) => {
//                         img.src = json.photos[i].src.medium;
//                     })
//                 })
//             .catch(error => console.log(error))
//     })
// })

/* ------------------------------------------------------------------------------------------- */

// soluzione dell'esercizio data dal docente

const apiKey = 'VWQ5WbtmtniFsJeXlEjdPCcMeO6U6MaW8Uf4xAIshjHYoALhzvANQg9B';

let page = 1;
let size = 9;
let query = 'house';
const url = 'https://api.pexels.com/v1/search?query=dog';

// soluzione esercizio 1

// mettiamo il button dentro a questo add event listener sennò non lo prende perchè lo legge in ritardo
document.addEventListener('DOMContentLoaded', () => {

    // document
    //     .querySelector('main section.jumpotron button.btn-primary');
    //     .addEventListener('click', () => {})

    
    let btnLoadImages = document.querySelector('main section.jumpotron button.btn-primary');
    btnLoadImages.addEventListener('click', () => { getPhotos('cat', 1, 15)}); //prendiamo gli elementi dentro la funzione
})

function getPhotos(page, size, query) {
    let url = 'https://api.pexels.com/v1/search/?page=${page}&per_page=${size}&query=${query}';
    let obj = {};
    fetch(url, {
        method: 'GET',
        headers: { Authorization: apiKey }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error))

        setTimeout(() => {console.log(obj)}, 1000)
}

function createPhotosCard(data) {
    console.log(data)
    let album = document.querySelector('div.album div.row');

    album.addEventListener('click', (e) => {
        let card = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
        album.removeChild(card);
    })
    album.innerHTML =''; // ciò che abbiamo dentro lo svuotiamo
    
    data.forEach(photo => {
        let card = `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img src='${photo.src.portrait}' class="bd-placeholder-img card-img-top alt='${photo.alt}"/> 
                <div class="card-body">
                    <h5 class="card-title">${photo.photographer}</h5>
                    <p class="card-text">
                    ${photo.alt}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary"> View </button>
                            <button type="button" class="btn btn-sm btn-outline-secondary"> Edit  </button>
                        </div>
                        <small class="text-muted">${photo.id}</small>
                    </div>
                </div>
            </div>
        </div>  `;

        album.innerHTML = album.innerHTML + card; // aggiungiamo la variabile card per concatenare il contenuto a ciò che sta dentro l'album
       // album.innerHTML =+ card  --> stessa cosa dellìoperazione appena sopra
    });
}
