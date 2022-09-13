function carregar(){

    var ano1  = document.getElementById('ano1')
    var ano = Number(ano1.value)
    var res = document.getElementById('res')
    var conta = 2022 - ano
    var genero =  document.getElementsByName('radsex')


    
    if (conta == 2 && genero[0].checked){
        
        res.style.textAlign = 'center'
        res.innerHTML = `Você é um Menininho de ${conta} anos!!`
    }
        
    else if (conta == 2 && genero[1].checked){
        
            res.style.textAlign = 'center'
            res.innerHTML = `Você é  uma Menininha de ${conta} anos!!`
    }
    
    else if(conta == 1 && genero[0].checked){

        res.style.textAlign = 'center'
        res.innerHTML = `Você é um Bebêzinho de ${conta} ano!!`
}
    
    else if(conta == 1 && genero[1].checked){

        res.style.textAlign = 'center'
        res.innerHTML = `Você é uma Bebêzinha de ${conta} ano!!`
    }
    else if(conta >= 3 && conta < 14 && genero[0].checked){

        res.style.textAlign = 'center'
        res.innerHTML = `Você é um Menino de ${conta} anos!` 
    }

    else if(conta >= 3 && conta < 14 && genero[1].checked){

        res.style.textAlign = 'center'
        res.innerHTML = `Você é uma menina de ${conta} anos!` 
    }
    else if(conta >= 14 && conta < 18 && genero[0].checked){
        res.style.textAlign = 'center'
        res.innerHTML = `Você é um Jovem de ${conta} anos!` 
    
    }
    else if(conta >= 14 && conta < 18 && genero[1].checked){
        res.style.textAlign = 'center'
        res.innerHTML = `Você é uma Jovem de ${conta} anos!` 
    
    }
    else if(conta >= 18 && conta < 60 && genero[0].checked){
        res.style.textAlign = 'center'
        res.innerHTML = `Você é um Homem de ${conta} anos!` 
    }
    else if(conta >= 18 && conta < 60 && genero[1].checked){
        res.style.textAlign = 'center'
        res.innerHTML = `Você é um Mulher de ${conta} anos!` 
    }
    else if (conta >= 60 && conta < 100 && genero[0].checked){
        res.style.textAlign = 'center'
        res.innerHTML = `Você é um Idoso de ${conta} anos!`
    
    }
    else if (conta >= 60 && conta < 100 && genero[1].checked){
        res.style.textAlign = 'center'
        res.innerHTML = `Você é uma Idosa de ${conta} anos!`
    
    }
    else{
        res.innerHTML = alert('algum erro foi encontrado, digite o ano novamente.')
    
    }
    

}



















