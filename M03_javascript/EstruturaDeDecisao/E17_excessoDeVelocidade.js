var velocidade = 140,multa = 0;

if(velocidade > 80){

    multa = (velocidade - 80) * 5;

    console.log('você foi multado por excesso de velocidade estando a '+
    velocidade+'km/h. Multa no valor de: R$ '+multa+' reais.');
}