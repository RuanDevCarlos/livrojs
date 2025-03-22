const form = document.querySelector('form')
const resp01 = document.querySelector('#outResp01')
const resp02 = document.querySelector('#outResp02')

let resposta = ""
let numContas = 0
let valTotal = 0

form.addEventListener("submit", (e) => {

    e.preventDefault()

    const descricao = form.inDescricao.value
    const valor = Number(form.inValor.value)

    numContas++
    valTotal = valTotal + valor
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"
    resp01.innerText = `${resposta} ---------------------------------`
    resp02.innerText = `${numContas} Contas(s) - Total R$: ${valTotal.toFixed(2)}`

    form.inDescricao.value = ""
    form.inValor.value = ""
    form.inDescricao.focus() 
})