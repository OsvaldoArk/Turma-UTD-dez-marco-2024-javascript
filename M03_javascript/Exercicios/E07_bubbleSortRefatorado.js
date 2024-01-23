function ordenaVetor(lista,ordem){

    let vetor = lista;

    for(let atual = 0; atual < vetor.length; atual++){
        for(let proximo = atual+1;proximo < vetor.length;proximo++){
            switch(ordem){ 
                case 'crescente': 
                    if(vetor[atual] > vetor[proximo]){
                        trocaValores(vetor,atual,proximo);
                    }
                break;

                case 'decrescente': 
                    if(vetor[atual] < vetor[proximo]){
                        trocaValores(vetor,atual,proximo);
                    }
                break;

                case 'inverso': 
                    trocaValores(vetor,atual,proximo);
                break;

                default: 
                    console.log('ordem não reconhecida');
                
            }

        }

    }

    return vetor;

}

function trocaValores(vetor, atual, proximo) {
    let temp = vetor[atual];
    vetor[atual] = vetor[proximo];
    vetor[proximo] = temp;

    return vetor;
}

let numeros = [];

for(let indice = 0; indice <6; indice++){
    numeros[indice] = Math.round(Math.random()*99);
}

console.log("Vetor original: "+numeros);

console.log("Vetor inverso: "+ordenaVetor(numeros,'inverso'));
console.log("Vetor em ordem crescente: "+ordenaVetor(numeros,'crescente'));
console.log("Vetor em ordem decrescente: "+ordenaVetor(numeros,'decrescente'));