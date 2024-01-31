
document.getElementById('nome').addEventListener('keyup',()=>{

    const valor = document.getElementById('nome').value;

    const lista = document.getElementById('lista');

    //console.log(lista.children)

    for(let item of lista.children){

        if(item.innerText.toLowerCase().includes(valor.toLowerCase()) && valor.length >= 2){

            item.style.fontWeight = "bolder";
        }else{
            item.style.fontWeight = "normal";
        }

        //console.log(item.innerText);
    }
    //console.log(valor)
});
