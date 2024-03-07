const alunos = [
    {id: 1,nome: 'Clara' , idade: 26, curso: 'PHP'},
    {id: 2,nome: 'Igor' , idade: 39, curso: 'Delphi'},
    {id: 3,nome: 'Jonathan' , idade: 30, curso: 'Java'},
    {id: 4,nome: 'Isabella' , idade: 39, curso:'Javascript'},
    {id: 5,nome: 'Laura' , idade: 21 , curso: 'Go'}
];

const nomeAlunos = [];
//forEach não retorna NADA!
alunos.forEach(aluno => nomeAlunos.push(aluno.nome));

console.log(nomeAlunos);