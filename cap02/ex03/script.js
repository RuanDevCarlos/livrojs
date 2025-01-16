// cria referência ao form e aos elementos de respota (pelo seu id)
let formu = document.querySelector('form')
let resp01 = document.querySelector('div#outResp01')
let resp02 = document.querySelector('div#outResp02')
let resp03 = document.querySelector('div#outResp03')

// cria um 'ouvinte' de evento, acionando quando o botão submit for clicado
formu.addEventListener('submit', (e) => {
    // obtém o conteúdo dos campos
    let veiculo = formu.inVeiculo.value 
    let preco = Number(formu.inPreco.value) 

    let entrada = preco * 0.50 // calcula valor da entrada
    let parcela = (preco * 0.50) / 12 // ... e das parcelas

    // exibe as respostas
    resp01.innerText = `Promoção: ${veiculo}`
    resp02.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    resp03.innerText = `+12x de R$ ${parcela.toFixed(2)}`

    e.preventDefault() // evita envio do form
    })