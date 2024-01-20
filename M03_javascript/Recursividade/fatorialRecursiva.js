//4! 4 * 3 * 2 * 1
console.log(fatorialRecursiva(5))

function fatorialRecursiva(numero){

    if(numero === 1) return 1;

    return numero * fatorialRecursiva(numero - 1);
}