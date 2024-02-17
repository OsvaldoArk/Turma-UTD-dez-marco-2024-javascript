function Pessoa(nome,idade){
    
    let pessoa = Object.create(Pessoa.prototype)

    this.nome = nome;
    this.idade = idade;

    return pessoa;
}

Pessoa.prototype.andar = function(){
    console.log('estou andando');
}

Pessoa.prototype.comer = function(){
    console.log('estou comendo');
}

const p01 = Pessoa("osvaldo",37);

p01.comer();