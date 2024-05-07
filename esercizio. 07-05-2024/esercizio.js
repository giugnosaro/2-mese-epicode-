const prendoP = document.getElementById('testo');

const save = function () {
const prendo = document.getElementById('inputNome').value;
localStorage.setItem('salvo', prendo);
const leggoTesto = document.getElementById('leggo');   
prendoP.innerText = localStorage.getItem('salvo');

console.log(leggoTesto);
}
const elimina = function () {
    localStorage.removeItem('salvo');
    prendoP.innerText = " ",localStorage.removeItem('salvo');
    
}

let startTime;
let elapsedTime = 0;
let stopwatchInterval;


function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let formattedHH = hh.toString().padStart(2, '0');
    let formattedMM = mm.toString().padStart(2, '0');
    let formattedSS = ss.toString().padStart(2, '0');

    return `${formattedMM}:${formattedSS}`;
}


function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    stopwatchInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        document.getElementById('stopwatch').textContent = timeToString(elapsedTime);
    }, 1000);
}


function stopStopwatch() {
    clearInterval(stopwatchInterval);
}


function resetStopwatch() {
    clearInterval(stopwatchInterval);
    elapsedTime = 0;
    document.getElementById('stopwatch').textContent = '00:00:00';
}

