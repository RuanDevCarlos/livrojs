const formu = document.querySelector('form')  // obtém os elementos da página
const resp = document.querySelector("p#resp")

formu.addEventListener('submit', (e) => {
    e.preventDefault()  // evita envio de formulário
    
    let numero = Number(formu.inNumero.value)  // obtém número digitado no form
    let raiz = Math.sqrt(numero)  // calcula raiz quadrada do número
    if (Number.isInteger(raiz)) {  // se o valor da raiz for um número inteiro
        resp.innerText = `Raiz: ${raiz}`  // ... mostra a raiz
    } else {
        resp.innerText = `Não há raiz exta para ${numero}`  // ... mostra mensagem
    }
})