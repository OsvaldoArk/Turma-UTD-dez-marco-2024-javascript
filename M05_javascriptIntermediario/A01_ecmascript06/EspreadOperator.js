const pares  = [2,4,6,8,10];

const impares = [1,3,5,7,9];

//let numeros = [...pares, ...impares];

let numeros  = [40,50];

let terceiro = numeros.concat(pares);

terceiro = terceiro.concat(impares);

//console.log(numeros.flat());

console.log(terceiro);