let valores = [4, 5, 7, 8, 9, 0, 2]
console.log(valores)

console.log(valores[3])

//maneira inteligente de buscar todos os valores de uma array
for (let cont = 0; cont < valores.length; cont++){
    console.log(`A posição ${cont} do vetor possui o valor ${valores[cont]}`)
}

console.log(`-----------`)

// Estrutura reduzida do for para exibir valores de uma variável composta
for(let cont in valores){
    console.log(`A posição ${cont} do vetor possui o valor ${valores[cont]}`)
}