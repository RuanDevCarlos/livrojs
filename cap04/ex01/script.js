// cria uma referência ao form e elementos de respostas do programa
let formu = document.getElementById("formu")
let resp01 = document.getElementById("resp01")
let resp02 = document.getElementById("resp02")

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado 
formu.addEventListener("submit", (e) => {

    e.preventDefault()         // evita o envio do form

    let nome = formu.inNome.value //obtém valores do form
    let nota01 = Number(formu.inNota01.value)
    let nota02 = Number(formu.inNota02.value)
    let media = (nota01 + nota02) / 2 //calcula a média das notas
    resp01.innerText = `Média das Notas ${media.toFixed(2)}`

    //cria as condições
    if (media >= 7) {
        // altera o estilo da cor do elemento resp02
        resp02.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
        resp02.style.color = 'green'
        resp02.style.background = 'orange'
    } else if (media >= 4) {
        resp02.innerText = `Atenção ${nome}. Você está em exame`
        resp02.style.color = 'yellow'
        resp02.style.background = 'purple'
    } else {
        resp02.innerText = `Sinto muito, ${nome}... Você foi reprovado(a)`
        resp02.style.color = 'red'
        resp02.style.background = 'yellow'
    }
})