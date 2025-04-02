// Importa o módulo "prompt-sync" para permitir a entrada de dados do usuário via terminal
const prompt = require("prompt-sync")()

// Solicita ao usuário que insira uma fórmula matemática ou lógica
const formula = prompt('Fórmula: ')

// Inicializa contadores para verificar o balanceamento de parênteses
let abre = 0
let fecha = 0

// Itera sobre cada caractere da fórmula fornecida pelo usuário
for (const simbolo of formula) {
    if (simbolo == "(") {
        abre++
    } else if (simbolo == ")") {
        fecha++
    }

    // Se em algum momento o número de parênteses de fechamento for maior que o de abertura, a fórmula está desbalanceada, então interrompe o loop
    if (fecha > abre) {
        break
    }
}

// Após o loop, verifica se o número de parênteses de abertura e fechamento é o mesmo
if (abre == fecha) {
    console.log("Ok! Fórmula correta (em relação ao parênteses)")
} else {
    console.log("Erro... Fórmula incorreta")
}