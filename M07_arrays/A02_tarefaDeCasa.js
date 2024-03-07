//Temos uma lista de 5 produtos
//{id:1,nome:'abacaxi',preco:4.5}
//{id:2,nome:'abacate',preco:10.2}
//{id:3,nome:'laranja',preco:3.8}
//{id:4,nome:'mamão',preco:6.3}
//{id:5,nome:'banana',preco:4.1}
//um cliente tem cadastro no supermercado, logo ele tem
//desconto de 10% na compra de cada um dos produtos.
//mostre os valores pagos pelo cliente com desconto.
const produtos = [
{id:1,nome:'abacaxi',preco:4.5},
{id:2,nome:'abacate',preco:10.2},
{id:3,nome:'laranja',preco:3.8},
{id:4,nome:'mamão',preco:6.3},
{id:5,nome:'banana',preco:4.1}
]

const desconto = (desconto) => (preco) => preco - (preco * desconto/100);

const descontoCadastro = desconto(10);

produtos.map(prod => ({nome:prod.nome, preco: descontoCadastro(prod.preco)}))
        .forEach(obj => console.log(obj));

console.log('total: R$'+produtos.map(prod =>descontoCadastro(prod.preco))
        .reduce((ant, atual)=> ant+= atual,0));