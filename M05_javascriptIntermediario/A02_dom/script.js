
const titulo = document.getElementById('titulo');
//retorna 1 elemento a partir do nome da tag.
const ti = document.querySelector('h1');
//retorna 1 elemento a partir do id.
const ti2 = document.querySelector('#titulo');
//retorna 1 elemento a partir da classe.
const ti3 = document.querySelector('.highlight');

const lista = document.getElementsByTagName('ol');

//const ti2 = document.querySelectorAll();
//maneira de navegar entre os componentes filhos de um elemento.
console.log(lista[0].children[1].firstElementChild.innerHTML);
