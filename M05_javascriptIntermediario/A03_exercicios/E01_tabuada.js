

document.getElementById("botao").addEventListener('click',()=>{

    const painel = document.getElementById('painel');

    const numero = Number.parseInt(document.getElementById('numero').value);

    if(isNaN(numero)){

        console.log('digite um número válido')

    }else{
        
            const div = document.createElement('div');
        
            let contador = 1;
        
            while(contador <= 10){
        
                const p = document.createElement('p');
        
                p.innerText = `${numero} X ${contador} = ${numero * contador}`;
        
                div.appendChild(p);
        
                contador++;
            }
        
            painel.innerText = '';
        
            painel.appendChild(div);
    }
});