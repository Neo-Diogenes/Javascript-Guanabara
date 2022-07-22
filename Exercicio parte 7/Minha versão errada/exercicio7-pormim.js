let opções = []

function adicionar(){
    let input = document.querySelector('.input')
    let valores = document.querySelector('.valores')

    if(input.value.length == 0) {
        alert('Ponha um número')
    } else if(input.value > 100 || input.value < 1) {
        alert('Número maior ou menor que 100')
    } else{
       var numero = Number(input.value);
       c = 1
    for(i=c; i<=1; i++){
        var val = document.createElement('option');
        val.innerText = `Valor ${numero} adicionado`
        valores.appendChild(val)

    }
    }
}

function finalizar(){

    
}

// consegui fazer só até aqui, travei pois nao consegui imaginar como pegar os elementos que não existem ainda