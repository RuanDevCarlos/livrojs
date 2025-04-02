// Importa a biblioteca "prompt-sync" para permitir a entrada de dados do usuário no terminal
const prompt = require("prompt-sync")()

// Solicita ao usuário a altura da árvore e converte o valor para um número
const altura = Number(prompt("Altura da Árvore: "))

// Imprime uma linha em branco para melhorar a formatação da saída
console.log()

// Loop que itera de 1 até a altura da árvore
for (let i = 1; i <= altura; i++) {
    // Calcula a quantidade de espaços em branco necessários para centralizar os asteriscos
    // A quantidade de espaços diminui à medida que a árvore cresce
    const espacos = 30 + (altura - i)

    // Imprime os espaços em branco seguidos pelos asteriscos
    // A quantidade de asteriscos aumenta conforme a árvore cresce (i*2)
    console.log(" ".repeat(espacos) + "*".repeat(i*2))
}