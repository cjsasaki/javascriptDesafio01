let numero = prompt("Ingrese valor de un número para el cálculo factorial");
let factorial = 1;
if (numero == 0)  {
    factorial = 1;
}else {
    for (let i=1 ; i<=numero;i++){
        factorial = factorial*i;
    }
}
alert("El resultado  de " + numero +"! " + "es " + factorial) 
console.log("El resultado  de " + numero +"! " + "es " + factorial)