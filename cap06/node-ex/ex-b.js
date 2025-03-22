const prompt = require("prompt-sync")()
console.log("Informe os clientes em ordem de chegada ou 'Fim' no nome para sair")

// Cria um array vazio para armazenar os objetos dos clientes (nome e idade)
const clientes = []

// Inicia um loop infinito para cadastrar clientes até que o usuário digite "Fim"
do {
    const nome = prompt("Nome: ")
    if (nome == 'Fim') {
        break
    }
    const idade = Number(prompt("Idade: "))
    // Adiciona um objeto com o nome e a idade do cliente ao array "clientes"
    clientes.push({nome, idade})
    console.log("OK! Cliente inserido na fila...")
} while (true) // O loop continua indefinidamente até que o usuário digite "Fim"

// Exibe o cabeçalho da fila preferencial
console.log("\nFila Preferencial")
console.log("-".repeat(40))

// Filtra os clientes com idade maior ou igual a 60 anos para a fila preferencial
const filaPref = clientes.filter(cliente => cliente.idade >= 60)

// Exibe os clientes da fila preferencial com um índice numerado
filaPref.forEach((fila, i) => {
    console.log(`${i + 1}. ${fila.nome}`)
})

// Exibe o cabeçalho da fila normal
console.log("\nFila Normal")
console.log("-".repeat(40))

// Filtra os clientes com idade menor que 60 anos para a fila normal
const filaNormal = clientes.filter(cliente => cliente.idade < 60)

// Exibe os clientes da fila normal com um índice numerado
filaNormal.forEach((fila, i) => {
    console.log(`${i + 1}. ${fila.nome}`)
})