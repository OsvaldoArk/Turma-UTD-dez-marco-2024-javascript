var idade = 320;
if(idade >= 0 && idade <=150){

    if(idade >= 18){
        console.log('maior de idade.');
    }else{
        console.log('menor de idade.');
    }

}else{
    console.log('idade inválida');
}

//melhor resolução.

if(idade >= 0 && idade <18){
    console.log('menor de idade.');
}else if(idade >= 18 && idade <= 150){
    console.log('maior de idade.');
}else{
    console.log('idade inválida.');
}

console.log('o programa continua aqui');