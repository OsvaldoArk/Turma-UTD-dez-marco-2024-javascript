class Pessoa{
    #nome 
    #idade

    constructor(nome,idade){

        if(this.constructor === Pessoa)
            throw new Error('A classe pessoa não deve ser instanciada!');

        if(this.getTaxa === undefined)
            throw new Error('O método getTaxa deve ser implementado!');

        this.#nome = nome;
        this.#idade = idade;
    }

    get nome(){
        return this.#nome;
    }

    set nome(nome){
        this.#nome = nome;
    }

    get idade(){
        return this.#idade;
    }

    set idade(idade){
        this.#idade = idade;
    }

    comer(){
        console.log('estou comendo');
    }

    andar(){
        console.log('estou andando');
    }
}

class Funcionario extends Pessoa{

    #setor

    constructor(nome,idade,setor){
        super(nome,idade);

        this.#setor = setor;
    }

    get setor(){
        return this.#setor;
    }

    set setor(setor){
        this.#setor = setor;
    }

    getTaxa(){
        return 0.05;
    }
}

//const p01 = new Pessoa("Ariclenison",20);

const p02 = new Funcionario("Alex",38,"Marketing");

//p01.nome = "Anderson";

console.log(p02.nome +" "+p02.setor)

//p01.andar();
//p01.comer();
//verificar o tipo de pessoa
//console.log(typeof Pessoa);

//verificar se p01 é uma instância de Pessoa
//console.log(p01 instanceof Pessoa);