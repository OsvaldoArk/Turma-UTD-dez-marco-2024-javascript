var contador = 30, resultado='';

while(contador>0){
    if(contador % 4 == 0)
        resultado+='['+contador+'] '
    else
        resultado+=contador+' '
    contador--;
}

console.log(resultado);