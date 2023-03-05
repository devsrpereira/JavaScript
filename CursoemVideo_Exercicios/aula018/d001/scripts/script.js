function add(){
   let numero = document.querySelector('input#itxnum')
   let area = document.querySelector('select#area')
   let resposta = document.querySelector('div#resposta')
   
   var vetor = []
   var cont_php = 0

   if (numero.value.length == 0){
    window.alert (`[ERROR] Campo "Número" está vazio`)
   } else{
        numero = (Number(numero.value))

        let validador =  vetor.indexOf(numero)

        if (validador !== -1){
            window.alert(`[ERROR] O valor ${numero} já foi adicionado.`)
        } else {
            vetor.push(numero)
            var opt = document.createElement('option')
            opt.text = `Valor ${numero} adicionado.`
            opt.value = cont_php ++
            area.appendChild(opt)
        }
   }
     
}
