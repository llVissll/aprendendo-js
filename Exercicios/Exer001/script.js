function load(){

    var horas = document.getElementById('hor')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var hora1 = String(horas.value)

    
    //var data = new Date()
    //var hora = data.getHours() 
    
    //var hora = 11
    //msg.innerHTML = `Agora são ${hora1}h `


    if (hora1 >= 1 && hora1 < 13){
       
         img.src = 'fotomanha.png.jpg'
         document.body.style.background = 'yellow'
         msg.innerHTML = `${hora1}h, é da manhã!`

    }else if(hora1 >= 13 && hora1 < 19){
        
        img.src = 'fototarde.png.jpg'
        document.body.style.background = 'aquamarine'
        msg.innerHTML = `${hora1}h, é da tarde!`
         

    }
    else if(hora1 >=19 && hora1 <24 ){
        
        img.src = 'fotonoite.png.jpg'
        document.body.style.background = 'grey'
        msg.innerHTML = `${hora1}h, ou seja, é da noite!`
       


}
    else if(hora1 == 24 || hora1 == 0){

        msg.innerHTML = `São Meia noite!!`
        img.src = 'fotonoite.png.jpg'
        document.body.style.background = 'grey'

}
    else {

        msg.innerText = '[Error 404] O Horário não foi encontrado..'
        img.src = 'fotoerror.png.jpg'
        document.body.style.background = 'darkorchid'


}

    
}

