const retornaProdutos = async ()=>{

    const id = Math.round(Math.random()*19+1);

    const resposta = await fetch(`https://fakestoreapi.com/products/${id}`);
    
    const dado = await resposta.json();
    
    const imagem = document.getElementById('imagem');

    const titulo = document.getElementById('titulo');

    const preco = document.getElementById('preco');

    const categoria = document.getElementById('categoria');

    const nota = document.getElementById('nota');

    const {image,description,title,price,category,rating} = dado;

    imagem.innerHTML = `<img src='${image}' alt='${description}'/>`

    titulo.innerText = title;

    preco.innerText = 'preco: '+price;

    categoria.innerText = 'categoria: '+category;

    nota.innerText = 'nota: '+rating.rate;
}

document.getElementById('carregar').addEventListener('click',retornaProdutos);

//retornaProdutos();