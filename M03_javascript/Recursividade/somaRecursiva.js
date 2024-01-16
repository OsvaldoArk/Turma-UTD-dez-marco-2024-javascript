
console.log(somaRecursiva(10));

function somaRecursiva(numero){

    if(numero == 1) return 1;

    return numero + somaRecursiva(numero-1);
}

//10 + ( 9 + ( 8 + ( 7 + ( 6 + (5 + (4 + (3 + (2 + (1))))))))