let amigo = []
console.log(typeof amigo)
console.log('-------------')

let amigo_obj = {
    nome:'José', 
    sexo:'M', 
    peso:85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
amigo_obj.engordar(2)
console.log(amigo_obj)
console.log('-------------')

let num = 5
num /=2
console.log(num)
