// ponteiros
const formu = document.querySelector('form')
let resp = document.querySelector('p#resp')

// ouvinte
formu.addEventListener('submit', (e) => {
    
    e.preventDefault()

    let num = Number(formu.inNum.value)
    resp.innerText = (num % 2 == 0) ? "Seu número é Par" : "Seu número é Ímpar";
})