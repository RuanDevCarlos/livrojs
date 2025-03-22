// Ponteiros
const formu = document.querySelector("form");
let resp01 = document.querySelector('p#resp01');
let resp02 = document.querySelector('p#resp02');

// ouvinte
formu.addEventListener('submit', (e) => {
    
    e.preventDefault()
    
    let valor = Number(formu.inValor.value)
    let troco = 0

    if (valor < 1.00) {
        resp01.innerText = "VALOR INVÁLIDO"
    } else if ( valor < 1.75) {
        troco = valor % 1.00
        if (troco != 0) {
            resp01.innerText = "Tempo: 30 min"
            resp02.innerText = `Troco: ${troco.toFixed(2)}`
        } else {
            resp01.innerText = "Tempo: 30 min"
        }
    } else if (valor < 3.00) {
        troco = valor % 1.75
        if (troco != 0) {
            resp01.innerText = "Tempo: 60 min"
            resp02.innerText = `Troco: ${troco.toFixed(2)}`
        } else {
            resp01.innerText = "Tempo: 60 min"
        }
    } else {
        troco = valor % 3.00
        if (troco != 0) {
            resp01.innerText = "Tempo: 120 min"
            resp02.innerText = `Troco: ${troco.toFixed(2)}`
        } else {
            resp01.innerText = "Tempo: 120 min"
        }
    }
});