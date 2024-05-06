class  User {
    constructor(_fristName, lasrName, _age, _location){
        

    this.fristName = _fristName;
    this.lasrName = lasrName;
    this.age = _age;
    this.location = _location;

    }
    eta(other){
        if (this.age > x.age){
            return `${this.fristName} è più giovane di ${other.fristName}`
        }
        else (this.age < y.age);{
            return `${this.fristName} è più vecchio di ${other.fristName}`
        }
    }
}
const y = new User("alex", "loso", 25 , "palermo");
const x = new User("alfonso", "nonloso", 24, "firenze");

console.log(x.eta(y));
console.log(y.eta(x));


const nomeCani = document.getElementById("name");
const razzaCani = document.getElementById("razza");
const formTag = document.getElementsByTagName('form')[0]
const contatti = [];

class Pet {
    constructor(_petName, _ownerName, _species, _breed){
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }
    nome(padrone){
        if (this.petName > addPet.ownerName){
            return `${this.petName} è lo stesso padrone ${padrone.ownerName}`
        }
        else (this.petName < addPet2.ownerName);{
            return `${this.petName} è diverso il padrone ${padrone.ownerName}`
        }
    }
}


const addPet = new Pet("topolino", "alfredo", "cane", "pitbull");
const addPet2 = new Pet("balu", "alfredo", "gatto", "persiano");
console.log(addPet.nome(addPet2));



const aggiungoContatti = function(){
    const contattiRow = document.getElementById("contacts-row");
    contattiRow.innerHTML = "";
    contatti.forEach((Pet) => {
        const nuovoDiv = document.createElement("div");
        nuovoDiv.classList.add("col");
        nuovoDiv.innerHTML= `
        <div class="card${
          Pet.fav ? ' border border-success border-3' : ''
        }">
            <div class="card-body">
                <h5 class="card-title">${Pet.name}</h5>
                <h5 class="card-title">${Pet.razza}</h5>
            </div>
        </div>
    `
    contattiRow.appendChild(nuovoDiv);
    });
}

formTag.addEventListener("submit", function(e) {
    e.preventDefault();
    const contactFromFormValues = new Pet(
        nomeCani.value,
        razzaCani.value,
    )
    contatti.push(contactFromFormValues);
    nomeCani.value = "";
    razzaCani.value = "";
    aggiungoContatti()
})