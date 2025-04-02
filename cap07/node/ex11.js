// Importa o módulo prompt-sync para permitir entrada de dados do usuário no Node.js
const prompt = require("prompt-sync")()
const parcelas = Number(prompt("Quantas Parcelas? "))

// Cria um objeto Date com a data atual
const data = new Date()

// Loop para calcular e exibir as datas de cada parcela
for (let i = 1; i <= parcelas; i++) {

    // Adiciona 1 mês à data atual (o objeto Date é atualizado automaticamente)
    data.setMonth(data.getMonth() + 1)

    // Obtém o dia, mês e ano da data calculada
    const dia = data.getDate()
    const mes = data.getMonth() + 1 // +1 porque getMonth() retorna 0-11
    const ano = data.getFullYear()

    // Formata dia e mês com zero à esquerda se necessário
    const diaZero = dia < 10 ? "0" + dia : dia
    const mesZero = mes < 10 ? "0" + mes : mes

    // Exibe a parcela formatada (ex: "1ª Parcela: 05/03/2023")
    console.log(`${i}ª Parcela: ${diaZero}/${mesZero}/${ano}`)
}