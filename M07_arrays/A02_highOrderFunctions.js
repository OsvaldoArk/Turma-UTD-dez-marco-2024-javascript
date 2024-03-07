//const multiplica = multiplicador => numero => numero * multiplicador;

const multiplica = function (multi){
    return function (numero){
        return multi * numero;
    }
}

const cincoVezes = multiplica(5); 

/*
    const cincoVezes =  function (numero){
        return 5 * numero;
    }
*/

const noveVezes = multiplica(9);

console.log(cincoVezes(4));

console.log(noveVezes(4));