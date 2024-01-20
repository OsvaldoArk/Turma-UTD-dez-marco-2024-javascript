console.log(fibonnacciRecursiva(3))

function fibonnacciRecursiva(numero){
    
    if(numero < 1) return 1;

    return fibonnacciRecursiva(numero -1) + fibonnacciRecursiva(numero -2);
}