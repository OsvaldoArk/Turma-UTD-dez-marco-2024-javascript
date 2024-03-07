const elementos = [
    {tag: "img", atributos: [{chave: "alt", valor:"imagem"},
                             {chave: "src", valor: "imagem.png"}], conteudo:""},
    {tag: "p", atributos: [{chave: "class", valor:"texto"}], 
                                conteudo: "sou um parágrafo!"},
    {tag: "h1", atributos:[], conteudo: "sou um título"}
  ];

const tags = elementos.map(el => {
    let tag = '<'
    tag+=el.tag;

    for(let at of el.atributos){
        tag+=' '+at.chave+'="'+at.valor+'"';
    }
    tag+=' >'+el.conteudo+'</'+el.tag+'>';

    return tag;
});

console.log(tags);