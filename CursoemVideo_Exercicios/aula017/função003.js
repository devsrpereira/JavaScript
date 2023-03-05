let v=function(x){
    return x*2
}
console.log(v(5))

console.log('-----------')

function fatorial(n){
    let fat = 1
    for (let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(4))

console.log('-----------')

//RECURSIVIDADE
function fatorial2(n){
    if(n==1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial2(5))