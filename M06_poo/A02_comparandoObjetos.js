const a = {nome:'joão',idade:26}

let b = {nome:'joão',idade:26, endereco:undefined}

//b = a;

console.log(a === b);

console.log(JSON.stringify(a) === JSON.stringify(b));

console.log(JSON.stringify(a));
//não está funcionando para o professor
//console.log(_.isEqual(a,b));