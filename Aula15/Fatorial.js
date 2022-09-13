function fatorial(n){
    if(n == 1){
        return 1
    }
    else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))


/*
function fatorial(n){

    let fat = 1
    for(; n > 1 ; n--){
    fat *= n
    }
    
        return fat
}

var res = fatorial(5)
console.log(`${res}`)*/