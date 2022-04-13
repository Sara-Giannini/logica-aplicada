//4 Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function parOuImpar (numero) {
    if (numero % 2 == 0) {
        return `O número ${numero} é par`
    } else if (numero % 2 != 0) {
        return `O número ${numero} é impar`
    }
}

console.log(parOuImpar(8)) // O número 8 é par
console.log(parOuImpar(11)) // O número 11 é impar

