let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor está guardando os valores: ${num}`)

// o termo variavel.length retorna a quantidade de valores contidos no vetor
console.log(`No momento temos ${num.length} valores na nossa array`)

//variavel seguida de [] com numero dentro, retorna o valor contido na posição declarada nos colchetes
console.log(`Este é o valor que esta na posição 0 da minha array: ${num[0]}`)


//variavel.sort() organiza de maneira crescente os valores internos na array
console.log(`Organizando os valores internos do vetor, temos a seguinte combinação: ${num.sort()}`)


//variavel.push(valor) adiciona o valor entre parenteses como ultimo elemento da array
console.log(`Adicionando o valor 4 no vetor ${num.push(4)} / ficamos com os seguintes valores: ${num}`)

console.log(`----------`)
//para buscarmos o indice de um valor dentro de um vetor usaremos o comando .indexOf(valor)
var indice = num.indexOf(4)
if (indice == -1){
    console.log(`Valor não encontrado`)
}else{
    console.log(`O valor está na posição ${indice}`) 
}



