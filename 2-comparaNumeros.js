//2 Elabore um algoritmo que receba dois números e determine 
//qual é o maior entre eles, se os números forem iguais, mostre
//uma mensagem no console "Os números são iguais".

function comparaNumeros (num1, num2) {
    if (num1 > num2) {
        return `${num1} é maior que ${num2}`
    } else if (num1 < num2) {
        return `${num1} é menor que ${num2}`
    } else if (num1 === num2) {
        return `${num1} e ${num2} são iguais`
    }
}


console.log(comparaNumeros(34, 19))//34 é maior que 19
console.log(comparaNumeros(10, 24))//10 é menor que 24
console.log(comparaNumeros(50, 50))//50 e 50 são iguais

