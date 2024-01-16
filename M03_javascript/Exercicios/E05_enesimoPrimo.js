
nPrimos(5000);

function nPrimos(limite){

    for(let numero = 0;numero<=limite;numero++){
        if(verificaSePrimo(numero))
            console.log(numero);
    }
}

function verificaSePrimo(numero){

    var numeroDivisores=0;
    
    for(let divisor = 1;divisor<=80;divisor++){
    
        if(numero % divisor === 0){
            numeroDivisores++;
        }
    }

    if(numeroDivisores == 2)
        return true;
    else    
        return false;
}