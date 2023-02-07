    var n = window.prompt("Inserta un número entero: ");/*n entra como string*/
    alert(n+n+2);
    n = parseInt(n);
    alert(n+n+2);
    var n2 = window.prompt("Inserta un número real: ");
    alert(n2+n2+2);
    n2 = parseFloat(n2);
    alert(n2+n2+2);
    var n3 = parseFloat(window.prompt("Inserta un número real")); //Convierte directamente la cadena de caracteres a float
    alert(n3+1);
