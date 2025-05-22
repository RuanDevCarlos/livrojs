// Importa o módulo prompt-sync para entrada de dados no terminal
const prompt = require("prompt-sync")()

// Array para armazenar os vinhos cadastrados
const vinhos = []

// Variável de controle para encerrar o programa
let encerrar = false

// Função para exibir títulos formatados
function titulo(texto) {
    console.log()
    console.log(texto)
    console.log("=".repeat(40))
}

// Loop principal do programa
do {
    // Exibe o menu principal
    titulo("===< Cadastro de Vinhos >==")
    console.log("1. Inclusão de Vinhos")
    console.log("2. Listagem de Vinhos")
    console.log("3. Pesquisa por Tipo")
    console.log("4. Média e Destaques")
    console.log("5. Finalizar")

    // Solicita a opção do usuário
    const opcao = Number(prompt("Opção: "))

    // Estrutura switch para direcionar para a função correspondente
    switch (opcao) {
        case 1:
            incluir()
            break          
        case 2:
            listar()
            break
        case 3:
            pesquisar()
            break
        case 4:
            calcularMedia()
            break
        case 5:
            encerrar = true
            break
    }
} while (!encerrar)

// Função para incluir novos vinhos
function incluir() {
    titulo("==< Inclusão de Vinhos >==")

    // Solicita dados do vinho
    const marca = prompt("Marca...: ")
    const tipo = prompt("Tipo...: ")
    const preco = Number(prompt("Preço R$: "))
    
     // Adiciona o novo vinho ao array
    vinhos.push ({marca, tipo, preco})
    console.log("OK! Vinho cadastrado com sucesso")
}

// Função para listar todos os vinhos cadastrados
function listar() {
    titulo("===< Lista de Vinhos Cadastrados >===")
    console.log("Marca.......... Tipo.......... Preço R$:")

    // Percorre todos os vinhos e exibe formatado
    for (const vinho of vinhos) {
        console.log(`${vinho.marca.padEnd(15)} ${vinho.tipo.padEnd(15)} ${vinho.preco.toFixed(2).padStart(7)}`)
    }
}

// Função para pesquisar vinhos por tipo
function pesquisar() {
    titulo("===< Pesquisar por Tipo de Vinho >===")

    // Solicita o tipo a pesquisar
    const pesq = prompt("Tipo: ")

    let contador = 0
    console.log("Marca.......... Tipo.......... Preço R$:")

    // Percorre os vinhos procurando pelo tipo
    for (const vinho of vinhos) {
        // Comparação case-insensitive
        if (vinho.tipo.toUpperCase().includes(pesq.toUpperCase())) {
            console.log(`${vinho.marca.padEnd(15)} ${vinho.tipo.padEnd(15)} ${vinho.preco.padStart(7)}`)
            contador++
        }
    }

    // Mensagem se não encontrar resultados
    if (contador == 0) {
        console.log(`Obs: Não há vinhos cadastrados do tipo "${pesq}"`)
    }
}

// Função para calcular estatísticas
function calcularMedia() {
    titulo("===< Média e Destaques do Cadastro de Vinhos >===")

    const num = vinhos.length

    // Verifica se há vinhos cadastrados
    if (num == 0) {
        console.log("Obs: Não há vinhos cadastrados")
        return
    }

    // Calcula o total dos preços
    let total = 0
    for (const vinho of vinhos) {
        total += vinho.preco
    }

    // Calcula a média
    const media = total / num

    // Cria cópia ordenada por preço
    const vinhos2 = [...vinhos]
    vinhos2.sort((a,b) => a.preco - b.preco) 

    // Obtém o menor e maior preço
    const menor = vinhos2[0]
    const maior = vinhos2[num-1]

    // Exibe os resultados
    console.log(`Preço Médio dos Vinhos R$: ${media.toFixed(2)}`)
    console.log(`Menor Valor R$: ${menor.preco.toFixed(2)} - ${menor.marca}`)
    console.log(`Maior Valor R$: ${maior.preco.toFixed(2)} - ${maior.marca}`)
}

