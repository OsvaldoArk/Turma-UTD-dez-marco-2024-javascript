
document.getElementById('botao').addEventListener('click',async ()=>{

    const resposta = await fetch('https://fakestoreapi.com/products');
    
    const dados = await resposta.json();
    
    for(let produto of dados){
        insereLinha(produto);
    }
});


const insereLinha = (produto) => {
    const tbody = document.getElementById('tabela').lastElementChild;
    
    const linha = document.createElement('tr');

    for(let chave in produto){

        let coluna = document.createElement('td');

        if(chave === 'image'){
            coluna.style.width = '100px';
            coluna.style.height = '100px';
            coluna.innerHTML = `<img style='width:100%;height:100%;object-fit:contain' src='${produto[chave]}' alt='teste' />`;
        }
        else if(chave === 'rating'){
            coluna.style.textAlign = 'center'
            coluna.innerText = produto[chave].rate;
        }
        else if(chave === 'title' || chave === 'description'){
            coluna.innerText = produto[chave].substring(0,20)+'...';
        }
        else{
            coluna.innerText = produto[chave];
        }

        linha.appendChild(coluna);
    }

    const acoes = document.createElement('td');
    
    acoes.innerHTML = `<div style='display:flex;flex-direction:row;' >
                        <button>
                        <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button>
                        <i class="fa-solid fa-trash"></i>
                        </button>
                       </div>
                       `;

    linha.appendChild(acoes);

    tbody.appendChild(linha);  
}
