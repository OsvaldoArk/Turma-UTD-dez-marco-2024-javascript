var numero = 80, numeroDivisores=0,divisores = [];

for(let divisor = 1;divisor<=80;divisor++){

    if(numero % divisor === 0){
        numeroDivisores++;
        divisores.push(divisor);
    }
}

console.log(numeroDivisores);
console.log(divisores);