let prompt = require('prompt-sync')()        // adiciona pacote para entrada de dados
let num1 = Number(prompt('1º Número: '))     // lê os números 
let num2 = Number(prompt('2º Número: '))
let soma = num1 + num2                       //calcula a soma
console.log(`Soma é: ${soma}`)               // exibe o resultado