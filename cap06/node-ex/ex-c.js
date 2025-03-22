const prompt = require("prompt-sync")()
console.log("Informe o valor dos saques ou 0 para sair")

// Cria um array vazio para armazenar os valores dos saques
const saques = []

// Inicia um loop infinito para registrar os saques até que o usuário digite 0
do {
    const valor = Number(prompt("Saque R$: "))
    if (valor == 0) {
        break
    }

    saques.push(valor)

    // Verifica se o valor do saque é múltiplo de 10
    if (valor % 10 == 0) {
        console.log("Saque Realizado com Sucesso")
    } else {
        console.log("Erro... Valor Inválido (deve ser múltiplo de 10)")
    }
} while (true) // O loop continua indefinidamente até que o usuário digite 0

// Exibe o cabeçalho para a lista de saques válidos
console.log("\nSaques Válidos")
console.log("-".repeat(40))
const saquesValidos = saques.filter(saque => saque % 10 == 0)

// Filtra os saques válidos (múltiplos de 10)
for (const saque of saquesValidos) {
    console.log(saque.toFixed(2))
}

console.log("-".repeat(40))

// Calcula o total dos saques válidos usando o método "reduce"
const totalSacado = saquesValidos.reduce((total, saque) => total + saque, 0)
console.log(`Total dos Saques: R$ ${totalSacado.toFixed(2)}`)

// Calcula o número de saques inválidos (tentativas de saque que não são múltiplos de 10)
const saquesInvalidos = saques.length - saquesValidos.length
console.log(`\nNº de tentativas de saques (saques inválidos): ${saquesInvalidos}`)