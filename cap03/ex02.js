const prompt = require("prompt-sync")()    // adiciona o pacote ao programa
const veiculo = prompt('Veículo: ')        // lê os dados de entrada 
const preco = Number(prompt('Preço: '))    
const entrada = preco * 0.50               // calcula valor da entrada
const parcela = (preco * 0.50) / 12        // ... e das parcelas
console.log(`Promoção: ${veiculo}`)        // exibe as respostas
console.log(`+12x de R$ ${parcela.toFixed(2)}`)