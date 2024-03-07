const numeros = [3,6,9,11,12,15,17];
/*
const primos = numeros.map(numero => {
    let contador = 1;
    let divisores = 0;

    while(contador<=numero){
        if(numero % contador === 0) divisores++;

        contador++;
    }

    if(divisores===2) return numero;
}).filter(numero => numero !== undefined);
*/
const filtroPrimo = (numero)=>{
    let contador = 1;
    let divisores = 0;

    while(contador<=numero){
        if(numero % contador === 0) divisores++;

        contador++;
    }

    return divisores===2? true : false;
}

const primos = numeros.filter(numero => filtroPrimo(numero));

console.log(primos);