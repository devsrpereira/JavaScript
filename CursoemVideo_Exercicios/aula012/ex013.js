var idade = 17
console.log(`Você tem ${idade} anos.`)
if (idade < 16){
    console.log(`Você ainda não pode votar.`)
} else if(idade < 18 || idade >=65) {
        console.log(`Você pode votar, mas seu voto não é obrigatório`)
} else {
        console.log(`Seu voto é obrigatório.`)
}

