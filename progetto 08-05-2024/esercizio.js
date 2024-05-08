


const generoCard = function (arrayOfUsers) {
    const cardsContainer = document.getElementById("cardsContainer");

    arrayOfUsers.forEach((user) => {
        
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("align-items-center");

       
        const creoImg = document.createElement("img");
        creoImg.classList.add("w-25");
        creoImg.src = user.img;
        
       
        card.appendChild(creoImg);

       
        cardsContainer.appendChild(card);

        const creoBtn = document.createElement("button");
        creoBtn.classList.add("btn");
        creoBtn.classList.add("btn-primary");
        creoBtn.classList.add("mt-2");
        creoBtn.innerText = "SCARTA";
        card.appendChild(creoBtn);
        creoBtn.addEventListener("click", () => {
            creoBtn.addEventListener("click", () => {
                card.remove();
                localStorage.getItem("card" , "aiuto")
                
            });
        });
    });
    
}

const cardBody = function (arrayOfUsers) {
    const cards = document.querySelectorAll(".card");
    
    arrayOfUsers.forEach((user, index) => {
        
        const card = cards[index];
        const creoTesto = document.createElement("p");
        creoTesto.classList.add("text-center");
        creoTesto.innerText = user.title + " " + user.price;
        card.appendChild(creoTesto);
    });
}

const libreria = function () {
    fetch( 'https://striveschool-api.herokuapp.com/books')
        
        .then((response) => {
    
    
           if (response.ok) {
    
            console.log("fine", response)
    
    
            return response.json()
         } else {
            throw new Error('Network ERRORE');
        }
        })
        
        
    
    .then((arrayOfUsers) => {
        console.log(arrayOfUsers)
        generoCard(arrayOfUsers);
        cardBody(arrayOfUsers);
        
    })
    .catch((err) => {
        console.log("errore", err)
 
    })
}

libreria()