var distancia = 300 , taxa = 0 , valorDaPassagem = 0;
/*
if(distancia>200)
    taxa = 0.45;
else
    taxa = 0.50;
*/
//operador ternário.
taxa = (distancia > 200) ? 0.45 : 0.50;

valorDaPassagem = distancia * taxa;

console.log(valorDaPassagem);