const numeros = [7, 1, 37, 5, 6, 2, 8, 10, 0, 4, 9];

console.log(numeros.reduce((ant, prox)=> prox > ant ? prox : ant));