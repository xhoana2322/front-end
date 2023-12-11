// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('#load-images').addEventListener('click', () => {
//         fetch('https://api.pexels.com/v1/search?query=[your-query]', {
//             method: 'GET',
//             headers: {
//                 Authorization: 'VWQ5WbtmtniFsJeXlEjdPCcMeO6U6MaW8Uf4xAIshjHYoALhzvANQg9B'
//             }
//         }).then(response => response.json())
//         .then(json => {
    
//         })
//         .catch(error => console.log(error))
//     })
// })


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#load-images').addEventListener('click', () => {
        fetch('https://api.pexels.com/v1/search?query=[your-query]', {
            method: 'GET',
            headers: {
                Authorization: 'VWQ5WbtmtniFsJeXlEjdPCcMeO6U6MaW8Uf4xAIshjHYoALhzvANQg9B'
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .then(json => {
                // json.photos.forEach(photo => {
                //     let img = document.querySelector('img');
                //     img.classList.add('src');
                //     img.src = json.photos[0].src.small;
                //     console.log(json.photos[0].src.small)
                // });

                let img = document.querySelectorAll('.card img');
                console.log(json.photos)
                console.log(json.photos[0].src.medium);
                    
                img.forEach(element => {
                    img.src = json.element[0].src.small;
                })

            })
            .catch(error => console.log(error))
    })
})

