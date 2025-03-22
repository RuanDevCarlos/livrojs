const prompt = require("prompt-sync")()
console.log("Informe os alunos. Após, digite 'Fim' no nome para sair")

// Cria um array vazio para armazenar os objetos dos alunos (nome e nota)
const alunos = []

// Inicia um loop infinito para cadastrar alunos até que o usuário digite "Fim"
do {
    const nome = prompt("Nome: ")
    if (nome == "Fim") {
        break
    }
    const nota = Number(prompt("Nota: "))

    // Adiciona um objeto com o nome e a nota do aluno ao array "alunos"
    alunos.push({nome, nota})
    console.log("OK! Aluno(a) cadastrado(a)...")
} while (true) // O loop continua indefinidamente até que o usuário digite "Fim"

console.log("-".repeat(40))

// Usa o método "reduce" para encontrar a maior nota entre os alunos
const maior = alunos.reduce((a, b) => Math.max(a, b.nota), 0)
console.log(`Maior Nota: ${maior}`)

if (maior >= 7) {
    const destaques = alunos.filter(aluno => aluno.nota == maior)
    for (const destaque of destaques) {
        console.log(`- ${destaque.nome}`)
    }
} else {
    console.log("Não há alunos em destaque na turma")
}
