const amigosPaulo = ['João','Daniel','Laura','Pedro','Armando'];

const amigosAlice = ['Maria','Jéssica','Laura','Ivo','João'];

let amigosEmComum = [];

amigosEmComum = amigosPaulo.filter(amigo => amigosAlice.includes(amigo));

console.log(amigosEmComum);