//let num = [8,7,1,3,2,9]

//for (let pos = 0; pos < num.length; pos++) {
   
 //  console.log(num[pos])
   

//}

let valores = [8,7,1,3,2,9]

for(let pos in valores){
console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


//indexOf para achar uma coisa no array
let teste = valores.indexOf(2)

if (teste== -1) {
         console.log('O valor não foi encontrado')
} else {
   console.log(`O valor está na posição ${teste}`)
}