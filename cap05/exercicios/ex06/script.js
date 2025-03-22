const form = document.querySelector('form')
const resp = document.querySelector('#resp')

form.addEventListener('submit', (e) => {         

    e.preventDefault()

    const num = Number(form.inNum.value)         
    let numDivisores = 0                       // declara e inicializa contador

    for (let i = 1; i <= num; i++) {           // percorre todos os possíveis divisores de num
        if (num % i == 0) {                    // verificar se i (1, 2, 3...) é divisor do num
            numDivisores++                     // se é, incrementada contador
        }
    }

    if (numDivisores == 2) {                   // se possuí apenas 2 divisores, é primo
        resp.innerText = `${num} É Primo`
    } else {
        resp.innerText = `${num} Não é Primo`
    }

    /* 
    let teDivisor = 0                          // declara e inicializa a vairável tipo flag

    for (let i = 2; i <= num / 2; i++) {       // percorre os possíveis divisores do num
        if (num % i == 0) {                    // se tem um divisor
        temDivisor = 1                         // muda o flag
        break                                  // sai da repetição
        }
    }

    if (num > 1 && !temDivisor) {              // se num > 1 e não possui divisor 
        resp.innertext = `${num} É Primo`
    } else {
        resp.innertText = `${num} Não é Primo` 
    }
    */
})