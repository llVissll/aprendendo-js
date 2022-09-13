function clicar(){
let num1 = document.getElementById('txt1')
let tab = document.getElementById('seltab')

if(num1.value.length == 0){
alert('Por favor, digite um número!')
}

else{
   let num = Number(num1.value)
   let c = 1
   tab.innerHTML = ''

   while(c <= 10){
    let item = document.createElement('option')
    item.text = `${num} x ${c} = ${num*c}`
    tab.appendChild(item)
    c++

    
   } 
}





}