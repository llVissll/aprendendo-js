var num = [5, 2, 9, 4, 1, 3, 6, 7, 8, 10 , 24]

num.sort(ordenar) // colocar o array em ordem crescente
//num.indexOf(3) => mostrar qual a chave do número selecionado
//num.length => tamanho do array.
function ordenar(a ,b){
    return a - b

}
//for novo//
for(let pos in num){
    console.log(`nosso vetor é ${num[pos]}`)
}

/*
//for padrão//
for(var pos = 0 ; pos < num.length ; pos ++ ){
console.log(`Nosso vetor é ${num[pos]}`)}


//while//
var pos = 0
while(pos < num.length){
    console.log(`Nosso vetor é ${num[pos]}`)
    pos++
}


//do while//
var pos = 0
do{
    console.log(`Nosso vetor é ${num[pos]}`)
    pos++
}while(pos < num.length) */