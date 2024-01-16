//operadores unários.
/*
var nome = 'osvaldo';

nome  = !true;

console.log(nome);
*/

var idade = 37;

idade+=10;

//console.log(idade);

//operadores aritméticos / * + - %

var media = (10 + 9 + 8) /3;

//console.log(media);

var resultado = 10 % 3; 

//operadores relacionais > >= < <= == === != !==
resultado = 90 !== '90';


//operadore lógicos && || 
resultado = 10 > 60 || 20 % 2 == 0;


//operador ternário. se(condição)?verdadeira:falsa;
idade = 37;
var passouNaProva = true;

resultado = (idade >= 18 && passouNaProva == true) ? 'pode dirigir' : 'não pode dirigir';

console.log(resultado);



