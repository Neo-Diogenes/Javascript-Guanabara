

function parimpar (n) {
    if (n%2 == 0) {
        return 'par!'
    } else {
        return 'impar!'
    }
}

let res = parimpar(3)
console.log(res)

//poderia jogar direto sem variavel caso tivesse feito console.log(parimpar(n))