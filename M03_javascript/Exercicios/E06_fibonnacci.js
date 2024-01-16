var contador = 0, a = 1, b = 0, c = 0;

while(contador<=20){

    c = a + b;
    a = b;
    b = c;

    console.log(c);
    contador++;
}