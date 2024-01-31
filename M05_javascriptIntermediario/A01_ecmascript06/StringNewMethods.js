letra = `Falling too fast to prepare for this
Tripping in the world could be dangerous
Everybody circling, it's vulturous
Negative, nepotist
Everybody waiting for the fall of man
Everybody praying for the end of times
Everybody hoping they could be the one
I was born to run, I was born for this
Whip, whip
Run me like a racehorse
Pull me like a ripcord
Break me down and build me up
I wanna be the slip, slip
Word upon your lip, lip
Letter that you rip, rip
Break me down and build me up`;

console.log(letra.includes('dangerous'));

let incidencias = 0;

const palavras = letra.split(' ');

for(let palavra of palavras){
    if(palavra.includes(`Everybody`)) incidencias++;

    //console.log(palavra)
}
console.log(incidencias);

console.log(letra.startsWith('falling'));

console.log(letra.endsWith('me up'));