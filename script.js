let  num = document.getElementById('fnum')
let Lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
}
function adicionar() {
   if(isNumero(num.value) && !inLista(num.value,valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text =`Valor ${num.value} adicionado.`
    Lista.appendChild(item)
    res.innerHTML = ''
   }else{
    alert('Valor invalido ou já está na lista')
   }
   
    num.value = '' // Dando certo ou errado ele vai apagar
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores Antes de Finalizar')
    }else{
        let total = valores.length

        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let c = 0 ; c < valores.length; c++){
            soma += valores[c]
            media = soma / valores.length
            if(valores[c] > maior){
                maior = valores[c]
            }else if(valores [c] < menor){
                menor = valores[c]
            }
        }
        res.innerHTML =''
        res.innerHTML += `<p> ao todo, temos ${total} números</p>` 
        res.innerHTML += `<p>o maior é ${maior} </p>` 
        res.innerHTML += ` <p>o menor é ${menor} </p>`
        res.innerHTML += `<p>A soma é ${soma} </p>`
        res.innerHTML += `<p>A media é ${media}</p>`
        }
    }
