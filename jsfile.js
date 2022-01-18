let numero = prompt("Ingrese valor de un número para el cálculo factorial");
let factorial = 1;
if (numero == 0)  {
    factorial = 0;
}else {
    for (let i=1 ; i<=numero;i++){
        factorial = factorial*i;
    }
}

console.log("El resultado factorial  es " + factorial)