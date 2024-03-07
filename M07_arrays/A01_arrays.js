const alunos = [
    {id: 1,nome: 'Clara' , idade: 26, curso: 'PHP'},
    {id: 2,nome: 'Igor' , idade: 39, curso: 'Delphi'},
    {id: 3,nome: 'Jonathan' , idade: 30, curso: 'Java'},
    {id: 4,nome: 'Isabella' , idade: 39, curso:'Javascript'},
    {id: 5,nome: 'Laura' , idade: 21 , curso: 'Go'}
];

const nomesAlunos = [];

for(let aluno of alunos){
    nomesAlunos.push(aluno.nome);
}
/*
console.log(alunos[3]);
//mudar só uma propriedade.
alunos[1] = {...alunos[1],nome: 'Armando'};
//mudar o objeto inteiro.
alunos[1] = alunos[3];

console.log(alunos);

//console.log(nomesAlunos.sort());
//ordenação por ordem alfabética nome;
console.log(alunos.sort((atual,proximo)=> atual.nome.localeCompare(proximo.nome)));
//ordenação por ordem crescente idade;
console.log(alunos.sort((atual,proximo)=> atual.idade - proximo.idade));
//ordenação por ordem decrescente usando reverse;
console.log(alunos.sort((atual,proximo)=> atual.idade - proximo.idade).reverse());
*/

const fila = [];

fila.push(alunos[1]);
fila.push(alunos[3]);
fila.push(alunos[0]);

fila.unshift(alunos[2]);
/*
console.log(fila.pop());

fila.shift();

console.log(fila.shift().nome);

console.log(fila);
*/

//console.log(fila.includes(alunos[1]));
function verificaAlunoNaFila(){

    for(let aluno of fila){
        if(JSON.stringify(aluno) === JSON.stringify({id: 2,nome: 'Igor' , idade: 39, curso: 'Delphi'}))
            return true;
    }

    return false;
}

//console.log(verificaAlunoNaFila());

//console.log(nomesAlunos.includes('Josivaldo'));

//console.log(fila.indexOf(alunos[3]));

const resultado = nomesAlunos.join('-');

console.log(resultado);

console.log(resultado.split('-'))

