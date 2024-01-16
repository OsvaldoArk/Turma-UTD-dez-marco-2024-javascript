let numeros = [];

for(let indice = 0; indice <6; indice++){
    numeros[indice] = Math.round(Math.random()*99);
}

let copia = numeros;

var cres = ordenaVetor(copia,'crescente');

//var des = ordenaVetor(numeros,'decrescente');

//var inv = ordenaVetor(numeros,'inversa');

console.log("vetor original: "+numeros);

//console.log("ordem crescente: "+cres);

//console.log("ordem decrescente: "+des);

//console.log("ordem inversa: "+inv);

function ordenaVetor(lista,ordem){

    let vetor = lista;

    switch(ordem){
        
        case 'crescente': 
        
        console.log(vetor);

        for(let atual = 0; atual < vetor.length; atual++){
            
            for(let proximo = atual+1;proximo < vetor.length;proximo++){

                if(vetor[atual] > vetor[proximo]){
                    var temp = vetor[atual];

                    vetor[atual] = vetor[proximo];

                    vetor[proximo] = temp;
                }
            }
        }


        break;

        case 'decrescente': 


        for(let atual = 0; atual < vetor.length; atual++){
            
            for(let proximo = atual+1;proximo < vetor.length;proximo++){

                if(vetor[atual] < vetor[proximo]){
                    var temp = vetor[atual];

                    vetor[atual] = vetor[proximo];

                    vetor[proximo] = temp;
                }
            }
        }

        break;

        case 'inverso': 


        for(let atual = 0; atual < vetor.length; atual++){
            
            for(let proximo = atual+1;proximo < vetor.length;proximo++){
                
                    var temp = vetor[atual];

                    vetor[atual] = vetor[proximo];

                    vetor[proximo] = temp;
            }
        }

        break;

        default: console.log('ordem não reconhecida')
    }
    return vetor;
}