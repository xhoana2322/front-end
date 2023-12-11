
// button 1
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#load-images').addEventListener('click', () => {
        fetch('https://api.pexels.com/v1/search?query=cat', {
            method: 'GET',
            headers: {
                Authorization: 'VWQ5WbtmtniFsJeXlEjdPCcMeO6U6MaW8Uf4xAIshjHYoALhzvANQg9B'
            }
        })
            .then(response => response.json())
            .then(json => {
                let img = document.querySelectorAll('.card img')
                    img.forEach((img, i) => {
                        img.src = json.photos[i].src.medium;
                    })
                })
            .catch(error => console.log(error))
    })
})

// button 2
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#load-images-secondary').addEventListener('click', () => {
        fetch('https://api.pexels.com/v1/search?query=dog', {
            method: 'GET',
            headers: {
                Authorization: 'VWQ5WbtmtniFsJeXlEjdPCcMeO6U6MaW8Uf4xAIshjHYoALhzvANQg9B'
            }
        })
            .then(response => response.json())
            .then(json => {
                let img = document.querySelectorAll('.card img')
                    img.forEach((img, i) => {
                        img.src = json.photos[i].src.medium;
                    })
                })
            .catch(error => console.log(error))
    })
})

