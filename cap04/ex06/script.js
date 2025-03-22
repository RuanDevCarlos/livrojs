const formu = document.querySelector('form')           // obtém elementos da página
const resp01 = document.querySelector('p#resp01')       
const resp02 = document.querySelector('p#resp02')
const resp03 = document.querySelector('p#resp03')

formu.addEventListener('submit', (e) => {              // "escuta" evento submit do form
    e.preventDefault()                                 // evita evio do form
    
    let saque = Number(formu.inSaque.value)            // obtém valor do saque
    
    if (saque % 10 != 0) {                             // se saque não é multiplo de 10
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)")
        formu.inSaque.focus()
        return
    }

    let notasCem = Math.floor(saque / 100)            // calculal notas de 100
    let resto = saque % 100                           // quanto sobra para pagar
    let notasCinquenta = Math.floor (resto / 50)      // calcula notas de 50
    resto = resto % 50                                // quanto ainda sobra
    let notaDez = Math.floor(resto / 10)              // calcula notas de 10
    
    if (notasCem > 0) {
        resp01.innerText = `Notas de R$ 100: ${notasCem}`
    }

    if (notasCinquenta > 0) {
        resp02.innerText = `Notas de R$: ${notasCinquenta}`
    }

    if (notaDez > 0) {
        resp03.innerText = `Notas de R$ 10: ${notaDez}`
    }
})