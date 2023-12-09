// ESERCIZIO 1

class Utente {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    confronto(a) {
        if (a.age > this.age) {
            console.log(a.firstName + ' è più vecchio di ' + this.firstName)
        } else if (a.age < this.age) {
            console.log(a.firstName + ' è più giovane di ' + this.firstName)
        } else {
            console.log(a.firstName + ' e ' + this.firstName + ' hanno la stessa età')
        }
    }
}

let b = new Utente ('Mario', 'Verdi', 23, 'Bologna');
let c = new Utente ('Gianluca', 'Giallo', 30, 'Milano');
let d = new Utente ('Lucia', 'Viola', 23, 'Bergamo');

console.log(b.confronto(c));
console.log(d.confronto(b));
console.log(c.confronto(d));



// ESERCIZIO 2

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    confronto(b) {
        if(b.ownerName === this.ownerName) {
            return true 
        } else {
            return false
        }
    }
}

let e = new Pet ('Billie', 'Luca', 'cane', 'labrador');
let f = new Pet ('Lucio', 'Luca', 'gatto', 'siamese');
let g = new Pet ('Waffle', 'Marco', 'lucertola', 'geco nano');

console.log(e.confronto(g));
console.log(f.confronto(e));
console.log(g.confronto(f));

let button = document.querySelector('.btn button');
console.log(button)

button.addEventListener('click', () => {
    let form = document.querySelector('#petForm form');

})
