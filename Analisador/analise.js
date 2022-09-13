    let valores = []
    let num = document.getElementById('n1')
    let sele = document.getElementById('sel')
    let res = document.getElementById('res')
 
function isNumero(n){

    if(Number(n) >= 1 && Number(n) <= 100){
             return true
    } else {
             return false
    }
}
 
function inLista(n, l){

    if(l.indexOf(Number(n)) == -1){
        
        return true
   }
    else {
        
        return false
   }

}  


function adicionar(){
    if(isNumero(num.value)  && inLista(num.value, valores)   ){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        sele.appendChild(item)
        
}else if(num.value < 1 || num.value > 100){
    alert('Por favor, digite um número entre 1 e 100!')
   
}
else{
    alert('O valor ja foi adicionado na lista!')
}
     

    num.value = ''
    num.focus()
        
} 


function finish(){
 if(valores.length == 0 ){
    alert('Adicione um valor antes de finalizar')
 }
 else{

    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores){
        soma += valores[pos]
        
        if (valores[pos] > maior)
            maior = valores[pos]
            

        if (valores[pos] < menor)
            menor = valores[pos]
    }
    media = soma / total
    res.innerHTML = ''
    res.innerHTML += `<hr><p>total de valores adicionados: ${total}</p>`
    res.innerHTML += `<p>O maior número foi: ${maior}</p>`
    res.innerHTML += `<p>O menor número foi: ${menor}</p>`
    res.innerHTML += `<p>A soma dos valores é de: ${soma}</p>`
    res.innerHTML += `<p>A média dos valores é de: ${media}</p><hr>`
 }
   


 


}
