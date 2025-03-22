// cria referência ao form e elemento onde será exibida a resposta
let formu = document.querySelector("form")
let resp = document.querySelector("p#resp")

// "ouvinte" de evento, acionado quando o botão submit for clicado
formu.addEventListener("submit", (e) => {
    e.preventDefault() // evita envio de formulário

    //obtém e converte o conteúdo do campo inHoraBrasil
    let horaBrasil = Number(formu.inHoraBrasil.value)
    let horaFranca = horaBrasil + 5 // calcula o horário da França
    if (horaFranca > 24) {           // se passar das 24 horas na França 
        horaFranca = horaFranca - 24 // ... subtrai 24
    }
    // exibe a resposta (alerta o conteúdo do elemento p da página)
    resp.innerText = `Hora na França: ${horaFranca.toFixed(2)}`
})