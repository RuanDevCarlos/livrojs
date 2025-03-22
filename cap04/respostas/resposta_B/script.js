// Ponteiros
const formu = document.querySelector("form");
let resp = document.querySelector('p#resp');

// ouvinte
formu.addEventListener('submit', (e) => {
    
    e.preventDefault()
    
    let velPerm = Number(document.getElementById("inVelPerm").value);
    let velCond = Number(document.getElementById("inVelCond").value);

    if (velCond < velPerm) {                  // se a velocidade for menor que 20%
        resp.innerText = "Sem Multa";
    } else if (velCond <= (velPerm * 1.20)) {           // se for até 20%
        resp.innerText = "Multa Leve";
    } else {                 // se for maior que 20%
        resp.innerText = "MULTA PESADA";
    }
});