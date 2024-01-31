
const hoje = Date.now();

let data = new Date(hoje);

let dia = data.getDate();
let mes = data.getMonth()+1;
let ano = data.getFullYear();

console.log(dia+'/'+mes+'/'+ano);