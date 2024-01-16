var numero = 0,contador =0, numeros = '', 
    acimaDeCinco = 0, divisiveisPorTres = 0;

while(contador < 10){

    numero = Math.round(Math.random() * 10);

    if(numero > 5)
        acimaDeCinco++;

    if(numero % 3 == 0 && numero !== 0)
        divisiveisPorTres++;

    numeros+=numero+' ';

    contador++;
}

console.log(numeros);

console.log('maior do que cinco: '+acimaDeCinco);

console.log('divisíveis por 3: '+divisiveisPorTres);
