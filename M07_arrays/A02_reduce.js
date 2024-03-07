const numeros = ['3','6','9','11.5','12','15','17'];

const total = numeros.reduce((total,numero)=> total+=Number(numero),0);

console.log(total);