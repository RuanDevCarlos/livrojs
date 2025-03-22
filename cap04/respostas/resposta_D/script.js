// Ponteiros
const formu = document.querySelector("form");
let resp01 = document.querySelector('p#resp01');
let resp02 = document.querySelector('p#resp02');

// ouvinte de evento
formu.addEventListener('submit', (e) => {
    
    e.preventDefault()
    
    let ladoA = Number(formu.inLadoA.value)    
    let ladoB = Number(formu.inLadoB.value)
    let ladoC = Number(formu.inLadoC.value)

    if (ladoA > (ladoB + ladoC) || ladoB > (ladoA + ladoC) || ladoC > (ladoA + ladoB)) {
        resp01.innerText = "Não é possível formar uma triângulo"
    } else if ( ladoA == ladoB && ladoB == ladoC) {
        resp01.innerText = "É possível formar um triângulo"
        resp02.innerText = "Tipo: Equilátero"
    } else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
        resp01.innerText = "É possível formar um triângulo"
        resp02.innerText = "Tipo: Isósceles"
    } else {
        resp01.innerText = "É possível formar um triângulo"
        resp02.innerText = "Tipo: Escaleno"
    }
});