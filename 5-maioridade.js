//5 Crie uma função que recebe o ano de nascimento da pessoa 
//informando se ela é maior de idade ou menor.

function informaMaiorIdade (anoDeNascimento) {
    if (anoDeNascimento <= 2004) {
        return ('É maior de idade')
    } else if (anoDeNascimento > 2004) {
        return ('É menor de idade')
    }
}

console.log(informaMaiorIdade(1999))// É maior de idade
console.log(informaMaiorIdade(2005))// É menor de idade
