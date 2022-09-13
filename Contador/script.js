
function contar(){

    let inicio = document.getElementById("ini1")
    let fim1 = document.getElementById('fim1')
    let passo1 = document.getElementById('pas1')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim1.value.length == 0 || passo1.value.length == 0){
        window.alert('[ERRO] Faltam dados!!')
    }
    else {
        res.innerHTML = 'Contando:'
        let ini = Number(inicio.value)
        let fim = Number(fim1.value)
        let passo = Number(passo1.value)


                    
    if(ini < fim)
        {           
                    // Modo For //           
        for(; ini <= fim ; ini += passo ){
            res.innerHTML  += ` ${ini} \u{1f449}` 
        }
        res.innerHTML += `\u{1F3C1}`}

    else{
        for(; ini >= fim ; ini -= passo ){
            res.innerHTML  += ` ${ini} \u{1f449}` 
        }
        res.innerHTML += `\u{1F3C1}`}    

        


        

/*
        // Modo While //
        while(ini <= fim){
            res.innerHTML += ` ${ini} \u{1F449}`
            ini+=passo
        }
        res.innerHTML += `\u{1F3C1}`



        // Modo Do While //
        do {
            res.innerHTML += ` ${ini} \u{1F449}`
            ini+=passo
        } while (ini <= fim);


    }
    res.innerHTML += `\u{1F3C1}`

*/

}


}








