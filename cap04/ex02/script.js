// cria uma referência ao form e elemento onde será exibida a resposta
let formu = document.querySelector('form')
let resp = document.querySelector('p#resp')

// "ouvinte" de evento, acionado quando o botão submit for clicado
formu.addEventListener("submit", (e) => {
    
    e.preventDefault() // evita o envio do form

    let nome = formu.inNome.value // obtém valores do form
    let masculino = formu.inMasculino.checked
    let altura = Number(formu.inAltura.value)

    let peso // declara a variável peso
    if (masculino) {
        peso = 22 * Math.pow(altura, 2) // Math.pow eleva ao quadrado
    } else {
        peso = 21 * Math.pow(altura, 2)
    }

    // apresenta a resposta (altera o conteúdo do elemento h3 da página)
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3) } kg`
})

formu.addEventListener('reset', () => {
    resp.innerText = "" // limpa o conteúdo do elemento h3 que exibe a resposta 
})