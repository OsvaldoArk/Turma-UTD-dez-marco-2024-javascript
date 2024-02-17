let pessoa = {
    nome: 'osvaldo',
    idade: 37,
    curso: 'javascript'
}

console.log(pessoa);

pessoa.nome = 'Jurandir'

//pessoa.email = 'jurandir@email.com';

//desestruturação
//const {nome} = pessoa;

//spread operator
const {nome,...etc} = pessoa;

console.log(pessoa);

for(let propriedade in pessoa){
//    console.log(propriedade+": "+pessoa[propriedade]);
}

let aluno = {
    ...pessoa,
    nome:'Jozivaldo'
}

pessoa = {
    ...pessoa,
    curso:'python'
}

console.log(pessoa);