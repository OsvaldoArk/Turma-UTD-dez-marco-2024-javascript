
var notas = [9,8,10,7,5,3,9,10,9,8,6,8,10,4,10];
var total = 0,media = 0;
for(let indice = 0;indice<notas.length;indice++){
    total+=notas[indice];
    //total = total + notas[indice]
}

media = total/notas.length;

console.log(media);