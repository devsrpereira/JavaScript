var inicio = 1
var fim = 5
var passos = 1
//var resposta = document.querySelector('div#msg') CONSOLE
var res_total = ''

    for (inicio; inicio <= fim; inicio += passos){
        var nova_resposta = `${inicio} &#x1F449 `
        res_total + nova_resposta
        console.log(`Contagem:<br> ${res_total}`)
    } 
    
    if (inicio == fim){
        console.log(`Contagem:<br>  ${res_total} &#x1F3C1`)
    }
  

