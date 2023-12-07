

// codice Kleo x mettere sopra all'input i username
// document.querySelector('#bottone1').addEventListener('click', () => {
//     let username = document.querySelector('#form1 input').value;
    
//     let p = document.createElement('p');
//     p.innerText = username;
//     document.querySelector('#nome').appendChild(p);
//     });


let buttonSave = document.querySelector('#btnSave');
console.log(buttonSave);

buttonSave.addEventListener('click', () => {
    let username = document.querySelector('#form input');
    let usernameValue = username.value;
    console.log(usernameValue);
})
