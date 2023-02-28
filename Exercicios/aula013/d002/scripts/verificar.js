function teste(){
    
   
    var data = new Date() 
    var anoatual = data.getFullYear()
    var ano = document.getElementById('inascimento')
    var msg = document.querySelector('div#msg')
    var div_img = document.querySelector('div#imagem')

    

      
    if (ano.value.length == 0 || Number(ano.value) > anoatual){
        window.alert(`[ERROR] Verifique os dados e tente novamente!`)
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = anoatual - ano.value
        var genero = ''
        if (sexo[0].checked){
            genero = 'Mulher'
        } else{
            genero = 'Homem'
        }
        
        var img = document.createElement('img')
        var cont = 0
        img.setAttribute('id','foto')
        div_img.appendChild(img)

        

        //msg.innerHTML = `Detectamos ${genero} com ${idade} anos.`  
    }
        
    switch (genero == 'Homem'){
        case (idade<2):
            msg.innerHTML = `Detectamos que é um bebê de ${idade} anos.`
            img.src = 'imagens/homem2menos.png'
            break
        
        case (idade<10):
            msg.innerHTML = `Detectamos que é um menino de ${idade} anos.`
            img.src = 'imagens/homem10menos.png'
            break 
        
        case (idade<20):
            msg.innerHTML = `Detectamos que é um garoto de ${idade} anos.`
            img.src = 'imagens/homem25menos.png'
            break

        case (idade<60):
            msg.innerHTML = `Detectamos que é um homem de ${idade} anos.`
            img.src = 'imagens/homem25mais.png'
            break                 
        
        case (idade>=60):
            msg.innerHTML = `Detectamos que é um senhor de ${idade} anos.`
            img.src = 'imagens/home60mais.png'
            break
        
        default:
            
    } 

    

    




    /*  
    

        case (idade < 2 && sexo =='Mulher'):
            var msg = document.querySelector('imsg')
            msg.innerHTML = `Detectamos que você é uma bebê de ${idade} anos.`
            var img = document.querySelector('foto')
            img.src = 'imagens/mulher2menos.png'
            break
    
        case (idade < 10 && sexo =='Mulher'):
            var msg = document.querySelector('imsg')
            msg.innerHTML = `Detectamos que você é uma menina de ${idade} anos.`
            var img = document.querySelector('foto')
            img.src = 'imagens/mulher10menos.png'
            break
        
        case (idade < 20 && sexo =='Mulher'):
            var msg = document.querySelector('imsg')
            msg.innerHTML = `Detectamos que você é uma garota de ${idade} anos.`
            var img = document.querySelector('foto')
            img.src = 'imagens/mulher25menos.png'
            break
                    
        case (idade < 60 && sexo =='Mulher'):
            var msg = document.querySelector('imsg')
            msg.innerHTML = `Detectamos que você é uma mulher de ${idade} anos.`
            var img = document.querySelector('foto')
            img.src = 'imagens/mulher25mais.png'
            break
        
        case (idade >= 60 && sexo =='Mulher'):
            var msg = document.querySelector('imsg')
            msg.innerHTML = `Detectamos que você é uma senhora de ${idade} anos.`
            var img = document.querySelector('foto')
            img.src = 'imagens/mulher60mais.png'
            break
        
        default:          
    } */

}