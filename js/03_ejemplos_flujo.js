    
    console.log('probando el bucle for');
    //Muestra los números del 0 al 9
    for (let i = 0; i < 10 ; i = i + 1) {
        console.log(i);
    }
    //Muestra los números del 1 al 10
    for (let i = 1; i <= 10 ; i = i + 1) {
        console.log(i);
    }
    //Muestra los números del 1 al 10 con operador de post incremento
    for (let i = 1; i <= 10 ; i++) {
        console.log(i);
    }
    //Muestra los números pares que hay entre 1 y 10
    for (let i = 2; i <= 10 ; i=i+2) {
        console.log(i);
    }
    console.log('probando el bucle while');
    var n = 9;
    while(n > 3){
        console.log(n);
        n--; //n = n -1
    }
    
    console.log('probando el bucle do-while');   
    var n = 9;
    do{
        console.log(n);
        n--; //n = n -1
    }while(n < 7);


