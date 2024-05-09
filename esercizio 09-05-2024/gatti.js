const caricaImaggine = function (photos) {
    const row = document.getElementById('events-row');
    photos.forEach((photo) => {
        const newCol = document.createElement('div');
        newCol.classList.add('col');
        newCol.innerHTML = `
            <div class="card h-100 d-flex flex-column">
                <img src="${photo.src.original}" class="card-img-top" alt="${photo.alt}">
                <div class="card-body d-flex flex-column justify-content-around">
                    <h5 class="card-title">${photo.photographer}</h5>
                    <p class="card-text">${photo.alt}</p>
                    <div class="d-flex justify-content-between">
                        <button class="btn btn-primary">Buy</button>
                        <a href="details.html?photoId=${photo.id}" class="btn btn-info">INFO</a>
                    </div>
                </div>
            </div>
        `;
        row.appendChild(newCol);
    });
};

const caricaCani = function (photos) {
    const cani = document.getElementById('cani-row');
    photos.forEach((photo) => {
        const newCol = document.createElement('div');
        newCol.classList.add('col');
        newCol.innerHTML = `
            <div class="card h-100 d-flex flex-column">
                <img src="${photo.src.original}" class="card-img-top" alt="${photo.alt}">
                <div class="card-body d-flex flex-column justify-content-around">
                    <h5 class="card-title">${photo.photographer}</h5>
                    <p class="card-text">${photo.alt}</p>
                    <div class="d-flex justify-content-between">
                        <button class="btn btn-primary">Buy</button>
                        <a href="details.html?photoId=${photo.id}" class="btn btn-info">INFO</a>
                    </div>
                </div>
            </div>
        `;
        cani.appendChild(newCol);
    });
};

const recupero = function () {
    fetch('https://api.pexels.com/v1/search?query=cat', {
        headers: {
            'Authorization': "Bearer SGng1JPKMxcQVTnICfB5V8wk6FVqilv19iFbuCnskv9lMZMwx5WTjeHk"
        }
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Errore nella risposta del server');
        }
    })
    .then((data) => {
        console.log('Data:', data);
        caricaImaggine(data.photos);
    })
    .catch((err) => {
        console.log('Errore:', err);
    });
};

recupero();

const cani = function (){
    fetch('https://api.pexels.com/v1/search?query=dog', {
        headers: {
            'Authorization': "Bearer SGng1JPKMxcQVTnICfB5V8wk6FVqilv19iFbuCnskv9lMZMwx5WTjeHk"
        }
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Errore nella risposta del server');
        }
    })
    .then((data) => {
        console.log('Data:', data);
        caricaCani(data.photos);
    })
    .catch((err) => {
        console.log('Errore:', err);
    });
}

cani()