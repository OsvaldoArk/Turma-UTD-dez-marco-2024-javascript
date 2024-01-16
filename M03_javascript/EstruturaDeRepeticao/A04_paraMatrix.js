var matriz = [[7,4,6,10,8],[10,6,3],[9,5,7]];
var passou = 0, reprovou = 0;
for(let linha = 0; linha < matriz.length;linha++){
    for(let coluna = 0; coluna < matriz[linha].length;coluna++){
       if(matriz[linha][coluna] >= 7)
            passou++
       else
            reprovou++
    }
}

console.log('aprovados: '+passou);
console.log('reprovados: '+reprovou);