
const soma = (...numeros) => {
    let soma = 0;
    for(let contador = 0; contador < numeros.length;contador++){
        soma+=numeros[contador];
    }

    return soma;
}

console.log(soma(1,2,3,4,5,6,7,8,9));
