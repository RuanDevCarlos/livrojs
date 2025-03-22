// obtém elementos da página
const formu = document.querySelector('form')
const resp = document.querySelector("pre")

// "Escuta" evento submit do form
formu.addEventListener('submit', (e) => {

    e.preventDefault()

    const numero = Number(formu.inNumero.value)
    let resposta = ""
    
    // cira um laço de respetição (i começa em 1 e é incrementado até 10)
    for (let i = 1; i <= 10; i++) {
        // a variável resposta vai acumulando os novos conteúdos (nos 2 formatos)
        // resposta = resposta + numero + "x" + i + " = " + (numero * i) + "\n"
        resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`
    }
    // o conteúdo da tag pre é alterado para exibir a tabuada do número
    resp.innerText = resposta
})