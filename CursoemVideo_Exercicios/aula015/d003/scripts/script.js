function iniciar(){

var numero = document.querySelector('input#itxnum').value
var area = document.querySelector('div#area')


    if (numero == 0){
        window.alert (`Todo número mutiplicado por ZERO é igual a ZERO!`)
    } else{
        var calc = 0
        var res_calc = ''
        var cont2 = 0
        area.innerHTML = `<h2>Tabuada do ${numero}:</h2> <br>`
                
        for (var cont = 1; cont <= 10; cont++){
            calc = numero * cont
            res_calc = `${numero}x${cont} = ${calc}<br>`
            
            area.innerHTML += `${res_calc}` 
        }
    }
   
}